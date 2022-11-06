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
  deleteActivity: async (id) => {
    try {
      const res = await todoRequest.delete(`activity-groups/${id}`);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
  getActivity: async (id) => {
    try {
      const res = await todoRequest.get(`activity-groups/${id}`);
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  },
  updateActivity: async (id, data) => {
    try {
      const res = await todoRequest.patch(`activity-groups/${id}`, data);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
  getAllTodo: async (activityId) => {
    try {
      const res = await todoRequest.get(`todo-items?activity_group_id=${activityId}`);
      return res.data.data;
    } catch (error) {
      console.error(error.message);
    }
  },
  createTodo: async (data) => {
    try {
      const res = await todoRequest.post('todo-items/', data);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
  updateTodo: async (id, data) => {
    try {
      const res = await todoRequest.patch(`todo-items/${id}`, data);
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  },
  deleteTodo: async (id) => {
    try {
      const res = await todoRequest.delete(`todo-items/${id}`);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
};

export default todoApi;
