import { Link } from 'react-router-dom'
import './Login.scss'
import { useContext } from 'react';
import { AuthContext} from '../../context/authContext';

const Login = () => {
  const {login} =useContext(AuthContext)
  const handlLogin=()=>{
    login()
  }
  return (
    <div className='Login containar'>
    <div className='card'>
    <div className='left'>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet , harum dolore!</p>
       <span>Donot You Have an account </span>
       <Link to='/Register'>
       <button>Register</button>
       </Link>
       
    </div>
    <div className='right'>
        <h1> lOGIN</h1>
        <form>
            <input type="text" placeholder='user name'/>
            <input type="password" placeholder='password'/>
            <button onClick={handlLogin()}>Login</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login