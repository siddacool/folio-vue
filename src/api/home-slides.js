import { getAllHomeSlides, serverUrl } from './base';

export default {
  getHomeSlides: getAllHomeSlides,
  addHomeSlide: ({ name, url }) =>
    fetch(`${serverUrl}/homepage-slides`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        url,
      }),
    }).then((response) => response.json()),
};
