import { doc, updateDoc } from "firebase/firestore"
import Modal from "./index"
import { db } from "../firebase"
import { useRef, useState } from "react"
import UploadToStorage from './../firebase/UploadToStorage';
import { toast } from "react-toastify";
import Loader from "../components/loader";



const EditModal = ({isOpen, close, tweet}) => {
 // resim kaldırılacakmı state i
const [isPicDeleting, setIsPictureDeleting] = useState(false)

// güncelleme yükleniyor mu state i
const [isLoading, setIsLoading] = useState(false)


 // form gönderilince 
  const handleSubmit =async (e) =>{
    e.preventDefault()
    
    // inputlardaki verileri al
    const text = e.target[0].value.trim();
    const file = e.target[1].files && e.target[1].files[0];

    // verileri kontrol et
    if (!text && !file && !tweet.content.image) {
      return toast.info("Lütfen içeriği belirleyin")
    }
    try{
      setIsLoading(true)
    // güncellenecek dökümanın referansını al
    const docRef = doc(db, "tweets",   tweet.id)

    // belgenin güncellenecek bilgileri
    let updatedData = {
      "content.text" :text,
      isEdited: true,
    }

    // fotoğraf silinecekse
    if (isPicDeleting) {
      updatedData["content.image"] = null
    }

    // yeni dosya yüklenecekse

    if (file) {
      const imageUrl = await UploadToStorage(file)
      updatedData["content.image"] = imageUrl
    }
    // belgeyi güncelle
    await updateDoc(docRef, updatedData)

      // modal ı kapat
      close()
  } catch(error){
    console.log(error)
  }
    
  // stateleri sıfırla
  setIsLoading(false)
  setIsPictureDeleting(false)
     
  }
  return (
      <Modal isOpen={isOpen} close={close}>
        <h1 className="text-2xl">Tweeti Düzenle</h1>

        <form onSubmit={handleSubmit}
        className="flex flex-col mt-10 min-w-[90%]">
          <label className="text-sm" >Metni Değiştir</label>
          <textarea className="mt-3  resize-y min-h-20 max-h-[250px] bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
          defaultValue={tweet.content.text}
          />

        <label className="text-sm mt-8 mb-3" >Fotoğrafı Değiştir</label>
        {!isPicDeleting && tweet.content.image? (
          <button onClick={(e) =>  {
            e.preventDefault()
            setIsPictureDeleting(true)}}
          type="button" 
          
          className="button"
        
          >Resmi Kaldır</button>
        ) : <input type="file"  className="button"/>}

            <div className="flex justify-end gap-5 mt-10">
              <button onClick={close}
              type="button"
              className="cursor-pointer">Vazgeç</button>

          <button disabled={isLoading}
          type="submit"
          className="bg-secondary text-black px-3 py-1 cursor-pointer hover:bg-secondary/70">{isLoading ?
            <Loader /> : "Kaydet"}</button>
            </div>

           </form>

  
  </Modal>
  )
}

export default EditModal