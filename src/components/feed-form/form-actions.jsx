import { CiImageOn as Image } from "react-icons/ci"
import { MdOutlineGifBox as Gif } from "react-icons/md"
import { FaRegSmile as Smile } from "react-icons/fa"
import Loader from './../loader/index';

const FormActions
 = ({fileInputRef, onImageChange,isLoading}) => {
  return (
      <div className="flex justify-between">
          <div className="text-tw-blue text-xl flex gap-4">
            <label htmlFor="image" type="button" className="form-icon">
                <input id= "image" 
                type="file" 
                name="image"
                className="hidden" 
                onChange={onImageChange}
                ref={fileInputRef}
                />
                  <Image />
            </label>
             
              <button type="button"
              className="form-icon">
                  <Gif />
              </button>
              <button type="button"
              className="form-icon">
                  <Smile />
              </button>
          </div>
          <button 
          disabled = {isLoading}
          type="submit"
          className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-70 min-w-[100px] cursor-pointer transition">
            
           {isLoading ? <Loader /> :  "Gönder"}</button>

      </div>

   
  )
}

export default FormActions
