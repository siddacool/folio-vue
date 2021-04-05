import { defineStore } from 'pinia';
import imagesApi from 'api/images';

export const useImagesAdminStore = defineStore({
  id: 'images-admin',
  state: () => ({
    images: [],
    uploadedImages: [],
    isImageFetching: false,
  }),
  actions: {
    async getImages() {
      try {
        if (this.isImageFetching) {
          return Promise.resolve();
        }

        this.isImageFetching = true;

        const images = await imagesApi.getImages();

        this.images = images;

        return Promise.resolve();
      } finally {
        this.isImageFetching = false;
      }
    },
    async upload(formData) {
      try {
        this.uploadedImages = [];
        if (this.isImageFetching) {
          return Promise.resolve();
        }

        this.isImageFetching = true;

        const images = await imagesApi.imageUpload(formData);

        this.uploadedImages = images;

        const imagesAll = await imagesApi.getImages();

        this.images = imagesAll;

        return Promise.resolve();
      } finally {
        this.isImageFetching = false;
      }
    },
  },
});
