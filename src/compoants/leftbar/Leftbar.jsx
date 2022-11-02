import './Leftbar.scss'
import Friendes from '../../assets/1.png'
import grops from '../../assets/2.png'
import markt from '../../assets/3.png'
import watch from '../../assets/4.png'
import memories from '../../assets/5.png'
import evants from '../../assets/6.png'
import gaming from '../../assets/7.png'
import gallery from '../../assets/8.png'
import videos  from '../../assets/9.png'
import messages  from '../../assets/10.png'
import tutorials  from '../../assets/11.png'
import courses  from '../../assets/12.png'
import fund  from '../../assets/13.png'
import { useContext } from 'react';
import { AuthContext} from '../../context/authContext';
const Leftbar = () => {
  const {currentUser} =useContext(AuthContext)
  return (
    <div className='Leftbar'>
      <div className="container">
        <div className="menu">
        <div className="user">
        <img src={currentUser.profilePic} />
        <span>islam</span>
      </div>
      <div className="item">
          <img src={Friendes} alt="" srcset="" />
          <span>Friendes</span>
        </div>
        <div className="item">
          <img src={grops} alt="" srcset="" />
          <span>grops</span>
        </div>
        <div className="item">
          <img src={markt} alt="" srcset="" />
          <span>Markt</span>
        </div>
        <div className="item">
          <img src={watch} alt="" srcset="" />
          <span>Watch</span>
        </div>
        <div className="item">
          <img src={memories} alt="" srcset="" />
          <span>Memories</span>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
          <img src={evants} alt="" srcset="" />
          <span>Evants</span>
        </div>
        <div className="item">
          <img src={gaming} alt="" srcset="" />
          <span>Gaming</span>
        </div>
        <div className="item">
          <img src={gallery} alt="" srcset="" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src={videos} alt="" srcset="" />
          <span>Videos</span>
        </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Other</span>
          <div className="item">
          <img src={messages} alt="" srcset="" />
          <span>Messages</span>
        </div>
        <div className="item">
          <img src={tutorials} alt="" srcset="" />
          <span>Tutorials</span>
        </div>
        <div className="item">
          <img src={courses} alt="" srcset="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={fund} alt="" srcset="" />
          <span>Fund</span>
        </div>

        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Leftbar