import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

export const useUserId = (userId) => {
  const { users } = useContext(UsersContext);
  return users.find((user) => user.id === userId);
};