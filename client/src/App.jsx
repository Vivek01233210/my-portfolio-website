import './App.css'
import HomeLayout from './pages/HomeLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error.jsx';
import Loading from './pages/Loading.jsx';
import Content from './components/Content.jsx';
import ProjectDetails from './pages/Project/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import AllProjects from './pages/Project/AllProjects.jsx';
import EditProject from './pages/Project/EditProject.jsx';
import EditProductPage from './pages/Project/EditProductPage.jsx';
import Login from './pages/Authentication/Login.jsx';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { isAuthenticated } from './redux/slices/authSlice.js';
import { checkUserAPI } from './APIServices/userAPI.js';
import CreateProject from './pages/Project/CreateProject.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    loadingElement: <Loading />,
    children: [
      {
        index: true,
        element: <Content />
      },
      {
        path: 'login',
        element: <Login />
      },
      
      {
        path: 'projects',
        element: <AllProjects />,
      },
      {
        path: 'projects/:slug',
        element: <ProjectDetails />,
      },
      {
        path: 'projects/create-project',
        element: <CreateProject />,
      },
      {
        path: 'projects/edit-projects',
        element: <EditProductPage />,
      },
      {
        path: 'projects/edit-projects/:slug',
        element: <EditProject />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  },
]);

function App() {
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["check-user"],
    queryFn: checkUserAPI,
  });

  useEffect(() => {
    if (!data) return;
    dispatch(isAuthenticated(data));
  }, [data]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;