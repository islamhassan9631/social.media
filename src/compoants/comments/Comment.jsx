import './Comment.scss'
import { useContext } from 'react';

import { AuthContext} from '../../context/authContext';
const Comment = () => {
    const {currentUser} =useContext(AuthContext)
    const Comments = [
        {
            id: 1,
            name: "islam",
            userId:1,
            desc:"Lorem ipsum dolor sit amet , harum dolore!",
            profilePic:
            "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
           
        },
        {
            id: 2,
            name: "nada",
            userId:2,
            desc:"Lorem ipsum dolor sit amet , harum dolore!",
            profilePic:
            "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos",
            
        },
        
        
    ]
  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='write a comment'/>
        <button>send</button>
        </div>
        {Comments.map(comment=>(
            <div className="comment" key={comment.id}>
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">
1 hour ago
                </span>
            </div>
        ))}
    </div>
  )
}

export default Comment