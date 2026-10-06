import UserAvatar from "./user-avatar"
import TextArea from "./text-area"
import FormActions from "./form-actions"
import { useRef, useState } from "react"
import ImagePreview from "./image-preview"
import { toast } from "react-toastify"
import UploadToStorage from "../../firebase/UploadToStorage"
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
const Form = ({ user }) => {
const [image, setImage] = useState(null)
const [isLoading, setIsLoading] = useState(false)
const fileInputRef = useRef(null)
  // resmin önizleme url'ini oluştur
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
}

// önizleme resmini kaldır
const clearImage = () => {
  setImage(null)

  if (fileInputRef.current) {
    fileInputRef.current.value =""
  }
}

//  console.log(image)
  // form gönderilince
 const handleSubmit = async (e) => {
   e.preventDefault()
const text = e.target.text.value
const file = fileInputRef.current?.files?.[0]

if (!text && !file) return toast.warning("Lütfen içeiği belirleyiniz")
 
  try{
    setIsLoading(true)
      // resim varsa resmi storage a yükle ve urlini al
    const url = await UploadToStorage(file)
     
    // tweets kolleksiyonunun referanısnı al
    const collectionRef = collection(db, "tweets");
   // yeni tweet belgesi koleksiyona kaydet
   await addDoc(collectionRef, {
    content: {
      text,
      image: url,
    },
    isEdited:false,
    likes:[],
    createdAt: serverTimestamp(),
    user:{
      id:user.uid,
      name: user.displayName,
      photo: user.photoURL,

    },
    
   })
      // formu sıfırla
      e.target.reset()
      clearImage()
  } catch (error) {
    console.error(error);
    
  }
   setIsLoading(false)
}
  

  return (
  <div className="border-b border-[var(--color-tw-gray)] p-4 flex gap-3 ">
   <UserAvatar photo={user.photoURL} name={user.displayName} />
    <form onSubmit={handleSubmit}
    className="w-full pt-1">
     <TextArea user={user} />


    <ImagePreview image={image} 
    clearImage={clearImage} />


     <FormActions 
     isLoading={isLoading}
     fileInputRef= {fileInputRef} 
     onImageChange = {onImageChange} />
 </form>
   </div>
  )
}

export default Form