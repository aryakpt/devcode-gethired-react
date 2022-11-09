import { useState, createContext } from 'react';
import todoApi from '../../api/todoApi';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const getAllActivity = async () => {
    const res = await todoApi.getAllActivity();
    return setActivities(res);
  };

  const createActivity = async (
    data = {
      title: 'New Activity',
      email: 'aryakrisna07@gmail.com',
    }
  ) => {
    // const res = await todoApi.createActivity(data);
    // return setActivities([res.data, ...activities]);
    todoApi.createActivity(data);
    return getAllActivity();
  };

  const deleteActivity = (id) => {
    const newactivities = activities.filter((todo) => todo.id !== id);
    setActivities(newactivities);
    return todoApi.deleteActivity(id);
  };

  const value = {
    activities,
    getAllActivity,
    createActivity,
    deleteActivity,
  };

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
};

export { ActivityContext, ActivityProvider };
