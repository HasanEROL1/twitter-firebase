import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { toast } from "react-toastify"
import { storage } from "."
import { v4 } from "uuid"

// parametre olarak aldığı dosya bir resim ise storage a yüklesin ve geriye resmin URL ini return etsin
const UploadToStorage =async (file) => {
    console.log(file)
//1)  dosya yoksa veya dosya resim değilse fonksiyonu durdur
if (!file || !file.type.startsWith("image")) return null

// 2) maksimum dosya boyutu 2mbı geçiyorsa hata fırlat
if (file.size > 2097152) {
    toast.error("Lütfen 2mb'ın altında bir medya yükleyin")
    throw new Error("Medya içeriği sınırı aşıyor")
}

// 3) dosyanın yükleneceği konumun referansını al
const imageRef = ref(storage, v4() + file.name)
    const snapshot = await uploadBytes(imageRef, file)
    console.log("Upload snapshot:", snapshot.metadata.fullPath, snapshot.metadata.size)

// 4) referansını olusşturduğumuz konuma dosyayı yükle
 await uploadBytes(imageRef, file)
// 5) storage' a yüklenen dosyanın Url ' ini al ve return et
 const url = await getDownloadURL(imageRef)
  
 return url


}
export default UploadToStorage