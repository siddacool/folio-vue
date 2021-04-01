import { cachedFetch, serverUrl } from './base';

export default {
  getHomeSlides: () => cachedFetch('/homepage-slides', 'homepage_slides'),
  addHomeSlide: ({ name, url }) =>
    fetch(`${serverUrl}/homepage-slides`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        url,
      }),
    }).then((response) => response.json()),
};
