import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import PageLoader from "../loader/PageLoader"
const Protected = () => {
  const navigate = useNavigate()
  const location = useLocation()
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
    navigate("/", { replace: true })
    return
  }

  if (user && !user.emailVerified){
    toast.info("Mailinizi Doğrulayın")
    navigate("/", { replace: true })
    return
  }

  if (user && user.emailVerified && location.pathname === "/") {
    navigate("/feed", { replace: true })
  }
}, [user, location.pathname, navigate])
  
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