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
