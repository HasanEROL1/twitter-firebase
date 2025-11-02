import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useOutletContext } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'
import Aside from './Aside'

const Feed = () => {
  const user = useOutletContext()
  console.log(user)
  return (
    <div className='h-screen bg-primary owerflow-hidden text-secondary grid 
    grid-cols-[1fr_minmax(300px,600px)_1fr]'>

    <Nav user = {user} />
    <Main user = {user} />
    <Aside />
   </div>
  )
}

export default Feed