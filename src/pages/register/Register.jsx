import { Link } from 'react-router-dom'
import './Register.scss'

function Register() {
  return (
    <div className='Register containar'>
    <div className='card'>
    <div className='left'>
        <h1>Islam Social</h1>
        <p>Lorem ipsum dolor sit amet , harum dolore!</p>
       <span>Do You Have an account </span>
       <Link to='/Login'>
       <button>Login</button>
       </Link>
       
    </div>
    <div className='right'>
        <h1> Register</h1>
        <form>
            <input type="text" placeholder='user name'/>
            <input type="email" placeholder=' Email'/>
            <input type="password" placeholder='password'/>
            <button>Register</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Register