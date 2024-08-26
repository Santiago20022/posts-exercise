import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './pages/Posts';
import UsersProvider from './context/UsersContext';
import PostDetail from './pages/PostDetail';
import UserDetail from './pages/UserDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/user/:id",
    element: <UserDetail />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UsersProvider>
    <RouterProvider router={router} />
   </UsersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
