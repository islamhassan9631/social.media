import './style.scss'
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Navbar from './compoants/navbar/Navbar'
import Laftbar from './compoants/leftbar/Leftbar'
import Rightbar from './compoants/rightbar/Rightbar'
import Home from './pages/Home/Home'
import Profile from './pages/profile/Profile'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext} from './context/authContext';



function App() {
  const {currentUser} =useContext(AuthContext)
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode);
  const Layaut = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "ligt"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Laftbar />
          <div style={{flex:6}}><Outlet /></div>
          
          <Rightbar />
        </div>
      </div>
    )


  }
  const ProtcolRout = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtcolRout>
          <Layaut />
        </ProtcolRout>
      ,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        }
      ]

    },
    {
      path: "/login",
      element: <Login />,

    },
    {

      path: "/Register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
