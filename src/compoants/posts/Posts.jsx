import './posts.scss'
import Post from '../post/Post'

const Posts = () => {
  const posts = [
    {
        id: 1,
        name: "islam",
        userId:1,
        desc:"Lorem ipsum dolor sit amet , harum dolore!",
        profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img:
            "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "ahmed",
      userId:2,
      desc:"Lorem ipsum dolor sit amet , harum dolore!",
      profilePic:
      "https://us.123rf.com/450wm/tomwang/tomwang1806/tomwang180600046/102862018-happy-family-running-on-the-beach.jpg?ver=6",
      img:
          "https://us.123rf.com/450wm/tomwang/tomwang1806/tomwang180600046/102862018-happy-family-running-on-the-beach.jpg?ver=6",
  },
  {
    id: 3,
    name: "nada",
    userId:3,
    desc:"Lorem ipsum dolor sit amet , harum dolore!",
    profilePic:
    "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos",
    img:
        "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos",
},


  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
  <Post post={post} ket={post.id}/>
      ))}
    </div>
  )
}

export default Posts