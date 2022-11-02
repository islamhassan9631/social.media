import "../../style.scss"
import './Navbar.scss'
import {  FaHome, FaUser, FaVoicemail, FaMoon, FaSearch, FaAppStore, FaSun } from "react-icons/fa";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext} from '../../context/authContext';



import { Link } from 'react-router-dom';

const Navbar = () => {
  const {toggle ,darkMode} = useContext(DarkModeContext)
  const {currentUser} =useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:"none"}}>
           <span>islam</span>
          
        </Link>
       

 <FaHome/>

{darkMode ? <FaSun onClick={toggle}/>: <FaMoon onClick={toggle}/>}

<div className="search">
  <FaSearch/>
  <input type="text" placeholder='search...'/>
</div>


 
 
 
      </div>
      <div className='right'>
      <FaVoicemail/>
      <FaAppStore/>
    
      <FaUser/>
      <div className="user">
        <img src={currentUser.profilePic} />
        <Link to="/Profile/:id" style={{textDecoration:"none"}}>
           <span>islam</span>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar