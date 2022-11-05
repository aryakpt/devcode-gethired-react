import React from 'react';
import { useParams } from 'react-router-dom';
import { DefaultLayout } from '../../components';
const Detail = () => {
  let { id } = useParams();

  return <DefaultLayout>Detail {id}</DefaultLayout>;
};

export default Detail;
