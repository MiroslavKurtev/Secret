import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Profile from './views/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
    errorElement: <div>Error 404 Not found</div>,
  },
  {
    path: '/signup',
    element: <Register />,
    errorElement: <div>Error 404 Not found</div>,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <div>Error 404 Not found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
