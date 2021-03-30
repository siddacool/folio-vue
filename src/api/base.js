import db from 'pack-pack/db.json';
import { isDevelopment } from 'helpers/utils';

const serverUrl = 'http://localhost:8080';

const getAllHomeSlidesBase = async () => {
  try {
    let homepageSlides = [];

    if (isDevelopment) {
      homepageSlides = await fetch(
        `${serverUrl}/homepage-slides`,
      ).then((response) => response.json());
    } else {
      homepageSlides = db.homepage_slides;
    }

    return Promise.resolve(homepageSlides);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getAllHomeSlides = getAllHomeSlidesBase;
