export const fetchCompanyCreate = async (data) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Company`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchCurrentCatalogList = async (objectId) => {
  try {
    const response = await fetch(
      `${process.env.API}/classes/Company?where={"whoCreate": {"__type": "Pointer","className": "_User","objectId": "${objectId}"}}`,
      {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': process.env.APP_ID,
          'X-Parse-REST-API-Key': process.env.API_KEY,
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};
