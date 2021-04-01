import { defineStore } from 'pinia';
import imagesApi from 'api/images';

export const useImageUploadAdminStore = defineStore({
  id: 'home-slides-admin',
  state: () => ({
    image: null,
    isImageFetching: false,
  }),
  actions: {
    async uploadImage(formData) {
      try {
        if (this.isImageFetching) {
          return Promise.resolve();
        }

        this.isImageFetching = true;

        const images = await imagesApi.imageUpload(formData);

        console.log(images);

        return Promise.resolve();
      } finally {
        this.isImageFetching = false;
      }
    },
  },
});
