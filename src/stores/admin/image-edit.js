import { defineStore } from 'pinia';
import imagesApi from 'api/images';

export const useImageEditAdminStore = defineStore({
  id: 'image-edit-admin',
  state: () => ({
    image: {},
    isImageFetching: false,
  }),
  actions: {
    async getImageById(id) {
      try {
        if (this.isImageFetching) {
          return Promise.resolve();
        }

        this.isImageFetching = true;

        const image = await imagesApi.getImageById(id);
        this.image = image;

        return Promise.resolve();
      } finally {
        this.isImageFetching = false;
      }
    },
  },
});
