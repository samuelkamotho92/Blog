import '.././App.css'
import MainContent from './MainContent'
import Sidesum from './Sidesum'
const Main = ({blogs}) => {
  console.log(blogs)
  return (
    <div className='myBlog'>
<MainContent blogs={blogs} />
<Sidesum blogs={blogs}/>
            </div>
  )
}

export default Main
