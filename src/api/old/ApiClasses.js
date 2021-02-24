export const fetchRoomsListTeacher = async (id) => {
  try {
    const response = await fetch(
      `${process.env.API}/classes/Rooms?where={"roomsOwner": {"__type": "Pointer","className": "_User","objectId": "${id}"}}`,
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

export const fetchRoomsListStudent = async () => {
  try {
    const response = await fetch(`${process.env.API}/classes/Rooms`, {
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

export const fetchRoomsCreate = async (data) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Rooms`, {
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

export const fetchRoomsUpdate = async (data, id) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Rooms/${id}`, {
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
