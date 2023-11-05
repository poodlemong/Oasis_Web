import { createBrowserRouter } from 'react-router-dom';

import Main from '../pages/main/index';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

export default Router;
