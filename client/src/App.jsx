import './App.css'
import HomeLayout from './pages/HomeLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Alert/Error.jsx';
import Loading from './pages/Alert/Loading.jsx';
import Content from './components/Content.jsx';
import ProjectDetails from './pages/Project/ProjectDetails.jsx';
import NotFound from './pages/Alert/NotFound.jsx';
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
import PublicRoute from './pages/Authentication/PublicRoute.jsx';
import AdminRoute from './pages/Authentication/AdminRoute.jsx';
import Messages from './pages/Messages.jsx';
import Contact from './pages/Contact.jsx';
import { ImSpinner8 } from 'react-icons/im';
import CertificationPage from './pages/Certifications/CertificationPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    loadingElement: <Loading />,
    children: [
      { index: true, element: <Content /> },
      {
        path: 'login',
        element: <PublicRoute />,
        children: [
          { index: true, element: <Login /> },
        ],
      },
      { path: 'projects', element: <AllProjects />, },
      { path: 'contact', element: <Contact />, },
      { path: 'certifications', element: <CertificationPage />, },
      { path: 'projects/:slug', element: <ProjectDetails />, },
      {
        path: '',
        element: <AdminRoute />,
        children: [
          { path: 'messages', element: <Messages /> },
          { path: 'projects/create-project', element: <CreateProject /> },
          { path: 'projects/edit-projects', element: <EditProductPage /> },
          { path: 'projects/edit-projects/:slug', element: <EditProject /> },
        ],
      },
      { path: '*', element: <NotFound />, }
    ]
  },
]);

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["check-user"],
    queryFn: checkUserAPI,
  });

  useEffect(() => {
    if (!data) return;
    dispatch(isAuthenticated(data));
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen m-8 p-8">
          <ImSpinner8 className="w-28 h-28 animate-spin" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App;