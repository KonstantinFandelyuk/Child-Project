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

export const fetchFeedbackPlace = async (objectId) => {
  try {
    const response = await fetch(
      `${process.env.API}/classes/Feedback?where={"companyOwner": {"__type": "Pointer","className": "Company","objectId": "${objectId}"}}`,
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

export const fetchAddFeedbackPlace = async (data) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Feedback`, {
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
export const fetchUpdateCompanyRating = async (id, data) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Company/${id}`, {
      method: 'PUT',
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
