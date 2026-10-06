import { useOutletContext } from 'react-router-dom'
import AppShell from '../../components/app-shell'
import Main from './Main'

const Feed = () => {
  const user = useOutletContext()

  return (
    <AppShell user={user} title="Anasayfa">
      <Main user={user} />
    </AppShell>
  )
}

export default Feed