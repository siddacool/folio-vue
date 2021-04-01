import { defineStore } from 'pinia';
import imageUploadApi from 'api/image-upload';

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

        const images = await imageUploadApi.imageUpload(formData);

        console.log(images);

        return Promise.resolve();
      } finally {
        this.isImageFetching = false;
      }
    },
  },
});
