import './App.css';
import Login from './components/Login'
import Browse from './components/Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {

  const appRrouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])

  return (
    <RouterProvider router={appRrouter}>

    </RouterProvider>
  );
}

export default App;
