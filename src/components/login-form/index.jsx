import EmailInput from "./email-input"
import PasswordInput from "./password-input"
import ForgotPassword from "./forgot-password"
import AuthToggle from "./auth-togle"
import { useState } from "react"
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Form = () => {
    const navigate = useNavigate()
    // kaydol modundamıyız ? 
   const [isSignup, setIsSignup] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        // inputlardaki verileri al
        const formData = new FormData (e.target)
        const {email,password} = Object.fromEntries (formData.entries())

        // kaydolma modundaysa : hesap olustur 
        try{
        if (isSignup){
            const res =    await createUserWithEmailAndPassword(auth,email,password)
           
            // email doğrulama epostası gönder
              await sendEmailVerification(res.user)
            // bildirim gönder
            toast.info("Mailinize doğrulama epostası gönderildi")

            // giriş yapma  moduna geç
            setIsSignup(false)
        } else {
            // giriş modundaysa : oturum aç
          const res = await  signInWithEmailAndPassword(auth,email,password)

         // mailini doğrulamamış ise bildirim gönder
         if (!res.user.emailVerified) {
            return toast.info("Lütfen mailinizi doğrulayın")
         }
          // mailini doğrulamış ise anasayfaya yönlendir ve bildirim gönder
        navigate("/feed")
        toast.success("oturumunuz açıldı") 
        }

        // formu temizle
        e.target.reset()
    } catch (error) {
        // hatayı bildirim olarak gönder
        toast.error("Hata" + error.code)
    }
}
    return (
        <form onSubmit={handleSubmit}
        className="flex flex-col ">

          <EmailInput />

          <PasswordInput />
            {!isSignup ? <ForgotPassword /> :<div className="h-[28px] w-1" />}
  

            <button type="submit"
                className="mt-10  bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer "
            >{isSignup ? "Kayıt Ol" : "Giriş Yap" }</button>

          <AuthToggle  isSignup = {isSignup} setIsSignup={setIsSignup}/>
        </form>
    )
}

export default Form