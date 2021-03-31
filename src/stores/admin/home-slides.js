import { defineStore } from 'pinia';
import homeSlidesApi from 'api/home-slides';

export const useHomeSlidesAdminStore = defineStore({
  id: 'home-slides-admin',
  state: () => ({
    slides: [],
    isSlidesFetching: false,
  }),
  actions: {
    async addHomeSlide({ name, url }) {
      try {
        if (this.isSlidesFetching) {
          return Promise.resolve();
        }

        this.isSlidesFetching = true;

        const setHomeSlides = await homeSlidesApi.addHomeSlide({ name, url });

        this.slides = setHomeSlides;

        return Promise.resolve();
      } finally {
        this.isSlidesFetching = false;
      }
    },
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
