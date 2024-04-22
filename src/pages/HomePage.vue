<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { artworksService } from '../services/ArtworkService.js';
import Pop from '../utils/Pop.js';



// if it comes from the appstate use a computed
const artworks = computed(() => AppState.artworks)


async function getArtwork() {
  try {
    await artworksService.getArtworks()
  } catch (banana) {
    Pop.error(banana)
  }
}

// new version of the constructor
onMounted(() => {
  getArtwork()
})





</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 m-auto">
        <div class="d-flex flex-wrap gap-4">
          <!-- PROPS -->
          <Clicker type="Cheese" />
          <Clicker type="Fish" :startingAmount="33" />
          <Clicker type="Ore" />
          <Clicker type="bananas" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-between">
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 my-2" v-for="a in artworks" :key="a.id">
        <img :src="a.imgUrls.regular" :alt="a.slug" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
