// import { toJS } from 'mobx';

export const fetchUserReg = async (data) => {
  try {
    const response = await fetch(`${process.env.API}/users`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
        'X-Parse-Revocable-Session': 1,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchUserLogin = async (data) => {
  try {
    const response = await fetch(
      `${process.env.API}/login?username=${data.username}&password=${data.password}`,
      {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': process.env.APP_ID,
          'X-Parse-REST-API-Key': process.env.API_KEY,
          'X-Parse-Revocable-Session': 1,
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchCurrentUser = async (token) => {
  try {
    const response = await fetch(`${process.env.API}/users/me`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
        'X-Parse-Session-Token': token,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchUpdateCurrentUser = async (id, data) => {
  try {
    const response = await fetch(`${process.env.API}/users/${id}`, {
      method: 'PUT',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
        'X-Parse-Session-Token': sessionStorage.getItem('_id'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};
