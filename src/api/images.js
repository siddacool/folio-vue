import { cachedFetch, serverUrl } from './base';

export default {
  getImages: () => cachedFetch('/images', 'images'),
  imageUpload: (formData) => {
    return fetch(`${serverUrl}/images`, {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    }).then((response) => response.json());
  },
};
