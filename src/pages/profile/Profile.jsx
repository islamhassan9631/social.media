import './Profile.scss'
import { FaFacebook, FaLinkedin, FaInstagram, FaPizzaSlice, FaLanguage, FaFacebookMessenger, FaPlaceOfWorship, } from "react-icons/fa";
import Posts from '../../compoants/posts/Posts'
const Profile = () => {
  return (
    <div className='profile'>
      <div className="imges">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHnOICeZ9FgKP1-oWp7lqft0DqJ1bMnSSbw&usqp=CAU" alt="" className='cover' />
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='profilepic' />
      </div>
      <div className="profilecontainer">
        <div className="userinfo">
          <div className="left">
            <a href="#">
              <FaFacebook fontSize="large" />
            </a>
            <a href="#">
              <FaLinkedin fontSize="large" />
            </a>
            <a href="#">
              <FaInstagram fontSize="large" />
            </a>
          </div>
          <div className="center">
          
            <div className="info">  <span>islam</span>
              <div className="item">
                <FaPlaceOfWorship />
                <span>egypt</span>
              </div>
              <div className="item">
                <FaLanguage />
                <span></span>
              </div>
              <button>
                follow
              </button>
            </div>
          </div>
          <div className="right">
            <FaFacebookMessenger />
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  )
}

export default Profile