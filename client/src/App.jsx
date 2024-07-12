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
        path: 'projects',
        element: <AllProjects />,
      },
      {
        path: 'projects/:slug',
        element: <ProjectDetails />,
      },
      {
        path: '/edit-projects',
        element: <EditProductPage />,
      },
      {
        path: '/edit-projects/:slug',
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;