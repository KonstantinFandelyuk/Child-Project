export const fetchCatalogList = async () => {
  try {
    const response = await fetch(`${process.env.API}/classes/Company`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchCatalogCurrentItem = async (id) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Company?where={"objectId": "${id}"}`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};
