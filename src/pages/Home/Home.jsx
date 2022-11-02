import Stories from '../../compoants/stories/Stories'
import Posts from '../../compoants/posts/Posts'
import './Home.scss'


const Home = () => {
  return (
    <div className='home'>
   <Stories/>
   <Posts/>
    </div>
  )
}

export default Home