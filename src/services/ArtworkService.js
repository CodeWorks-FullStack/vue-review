import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ArtworkService {
  async getArtworks() {
    const res = await api.get('api/artworks')
    AppState.artworks = res.data.artworks
    AppState.page = res.data.page
    AppState.pages = res.data.pages
  }
}

export const artworksService = new ArtworkService()