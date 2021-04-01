import { serverUrl } from './base';

export default {
  imageUpload: (formData) => {
    return fetch(`${serverUrl}/image`, {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    }).then((response) => response.json());
  },
};
