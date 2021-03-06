import { defineStore } from 'pinia';
import homeSlidesApi from 'api/home-slides';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    slides: [],
    isSlidesFetching: false,
  }),
  actions: {
    async getHomeSlides() {
      try {
        if (this.isSlidesFetching) {
          return Promise.resolve();
        }

        this.isSlidesFetching = true;

        const setHomeSlides = await homeSlidesApi.getHomeSlides();

        this.slides = setHomeSlides;

        return Promise.resolve();
      } finally {
        this.isSlidesFetching = false;
      }
    },
  },
});
