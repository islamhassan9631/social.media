import './stories.scss'
import { useContext } from 'react';

import { AuthContext} from '../../context/authContext';
const Stories = () => {
    const {currentUser} =useContext(AuthContext)
    const Stories = [
        {
            id: 1,
            name: "islam",
            img:
                "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "ali",
            img:
                "https://us.123rf.com/450wm/tomwang/tomwang1806/tomwang180600046/102862018-happy-family-running-on-the-beach.jpg?ver=6",
        },
        {
            id: 3,
            name: "nada",
            img:
                "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos",
        },
        {
            id: 4,
            name: "ahmed",
            img:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ]
    return (
        <div className='stories'>
             <div className="story"> 
                    <img src={currentUser.profilePic} alt="" srcset="" />
                    <span>islam</span>
                    <button>+</button>
                </div>
            {Stories.map(story=>(
                <div className="story" key={story.id}> 
                    <img src={story.img} alt="" srcset="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories