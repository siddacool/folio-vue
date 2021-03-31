import db from 'pack-pack/db.json';
import { isDevelopment } from 'helpers/utils';

const serverUrlMain = 'http://localhost:8080';

export const serverUrl = serverUrlMain;

const getAllHomeSlidesBase = async () => {
  try {
    let homepageSlides = [];

    if (isDevelopment) {
      homepageSlides = await fetch(
        `${serverUrlMain}/homepage-slides`,
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
