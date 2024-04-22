<script setup>
import { ref } from 'vue';

const props = defineProps({
  type: { type: String, required: true },
  startingAmount: { type: Number, default: 0 }
})

// ref == tiny AppState
let cheese = ref(props.startingAmount)

function mine() {
  cheese.value++
}
</script>


<template>
  <div>
    <h1>{{ type }}: {{ cheese }}</h1>
    <button @click="mine()">mine</button>
  </div>
</template>


<style lang="scss" scoped></style>