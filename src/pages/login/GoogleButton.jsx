import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const GoogleButton = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate("/feed")
      toast.success("Oturumunuz Açıldı")
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request" ){
        console.log("Popup iptal edildi, tekrar deneyin.")
      } else
      console.error(error)
      toast.error("Giriş başarısız")
    }
  }

  return (
    <button onClick={handleGoogle}
      className="bg-gray-100 flex items-center py-2 px-10 rounded-full text-gray-700 hover:bg-gray-300 transition cursor-pointer mb-4 whitespace-nowrap gap-x-3 justify-center">
      <img
        className="h-5"
        src="/google-logo.png"
        alt="Google Logo" />
      <span className="text-xl font-medium text-gray-800">Google ile Giriş Yap</span>
    </button>
  )
}

export default GoogleButton