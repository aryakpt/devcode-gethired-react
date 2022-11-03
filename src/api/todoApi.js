import apiConfig from './apiConfig';
import { todoRequest } from './axiosInstance';

const todoApi = {
  getAllActivities: async () => {
    try {
      const res = await todoRequest.get('activity-groups/', {
        params: { email: apiConfig.EMAIL },
      });
      return res.data.data;
    } catch (error) {
      console.error(error.message);
    }
  },
};

export default todoApi;
