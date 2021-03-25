import { baseLink } from './base';

export default {
  getHomeSlides: () =>
    fetch(`${baseLink}/homepage-slides`).then((response) => response.json()),
  removeHomeSlideById: (id) =>
    fetch(`${baseLink}/homepage-slides/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json()),
};
