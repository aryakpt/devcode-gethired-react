import React, { useState, useEffect } from 'react';
import { DefaultLayout } from '../../components';
import { Container, Box } from '@mui/material';
import { HomeHeader } from '../../components/home';
import todoApi from '../../api/todoApi';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchAllTodos = async () => {
      const res = await todoApi.getAllActivities();
      setTodos(res);
    };
    fetchAllTodos();
  }, []);

  return (
    <DefaultLayout>
      <Container maxWidth="lg">
        <HomeHeader />
        <Box>{todos.length ? 'ada' : 'ga ada'}</Box>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
