import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,

    // with this data loaded before rendering
    // loader: async ({ request, params }) => {
    //   return fetch(`/fake/api/teams/${params.teamId}.json`, {
    //     signal: request.signal,
    //   });
    // },

    // performing this mutation when data is submitted to it
    // action: async ({ request }) => {
    //   return updateFakeTeam(await request.formData());
    // },

    // and renders this element in case something went wrong
    errorElement: <div>Error 404 Not found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
