import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { Outlet, replace, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import PageLoader from "../loader/PageLoader"
const Protected = () => {
  const navigate = useNavigate()
  // oturumu açık olan kullanıcının state i
  const [user, setUser] = useState(undefined)

  // Kullanıcını oturum verilerini al
useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => setUser (user))

  return () => unsub()
}, [])

// yönlendirme ve bildirim
useEffect(() => {
  if (user=== null){
    navigate("/")
  } else if (user && !user.emailVerified){
    toast.info("Mailinizi Doğrulayın")
    navigate("/")
  } else if (user && user.emailVerified) {
    navigate("/feed")
  }
}, [user,navigate])
  
// oturum verileri gelene kadar yükleniyor bas
if ( user=== undefined) {
  return <PageLoader />
}

  // Eğer kullanıcı yok veya doğrulanmamışsa render etme
  if (!user || !user.emailVerified) return null;


  // Oturumu açık veya epostası doğrulandıysa sayfayı ektana bas
  return (
    <Outlet context={user} />
  )

}
export default Protected