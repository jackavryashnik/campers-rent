import axios from 'axios';

axios.defaults.baseURL = 'https://6686ad9a83c983911b033822.mockapi.io';

export const getCampers = async () => {
  try {
    const { data } = await axios.get('/campers');
    if (!data || data.length === 0) {
      throw new Error('Campers not found');
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
