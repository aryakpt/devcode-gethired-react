import apiConfig from './apiConfig';
import { todoRequest } from './axiosInstance';

const todoApi = {
  getAllActivity: async () => {
    try {
      const res = await todoRequest.get('activity-groups/', {
        params: { email: apiConfig.EMAIL },
      });
      return res.data.data;
    } catch (error) {
      console.error(error.message);
    }
  },
  createActivity: async (
    data = {
      title: 'New Activity',
      email: 'aryakrisna07@gmail.com',
    }
  ) => {
    try {
      const res = await todoRequest.post('activity-groups/', data);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
};

export default todoApi;
