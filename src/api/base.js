import db from 'pack-pack/db.json';
import { isDevelopment } from 'helpers/utils';

const serverUrlMain = 'http://localhost:8080';

export const serverUrl = serverUrlMain;

export const cachedFetch = async (url, fieldName) => {
  try {
    let data = null;

    if (isDevelopment) {
      data = await fetch(`${serverUrlMain}${url}`).then((response) =>
        response.json(),
      );
    } else {
      data = db[fieldName];
    }

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
