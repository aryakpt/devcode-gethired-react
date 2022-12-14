import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DefaultLayout, Container, ModalAddListItem } from '../../components';
import { DetailHeader, TodoListEmpty, TodoList } from '../../components/detail';
import { TodoContext } from '../../context/TodoContext/TodoContext';
import todoApi from '../../api/todoApi';
import { useDocumentTitle } from '../../utils/hooks';

const Detail = () => {
  useDocumentTitle('Detail');
  const todoCtx = useContext(TodoContext);
  const { id } = useParams();
  const [activity, setActivity] = useState({});

  const getActivity = async (id) => {
    const res = await todoApi.getActivity(id);
    setActivity(res);
  };

  useEffect(() => {
    getActivity(id);
    todoCtx.getAllTodos(id);
  }, []);

  const addTodoHandler = (data, activityId = id) => {
    const newData = { activity_group_id: activityId, ...data };
    todoCtx.createTodo(newData);
    todoCtx.setIsCreateModalOpen(false);
  };

  return (
    <>
      <DefaultLayout>
        <Container>
          <DetailHeader activity={activity} isTodosExist={todoCtx.todos.length} />
          {todoCtx.todos.length ? <TodoList /> : <TodoListEmpty />}
        </Container>
      </DefaultLayout>
      <ModalAddListItem
        data_cy="modal-add"
        title={'Tambah List Item'}
        isOpen={todoCtx.isCreateModalOpen}
        onClose={() => todoCtx.setIsCreateModalOpen(false)}
        onConfirm={addTodoHandler}
      />
    </>
  );
};

export default Detail;
