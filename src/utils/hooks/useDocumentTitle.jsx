import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Todo List App`;
  }, [title]);
};

export default useDocumentTitle;
