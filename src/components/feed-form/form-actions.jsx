import { CiImageOn as Image } from "react-icons/ci"
import { MdOutlineGifBox as Gif } from "react-icons/md"
import { FaRegSmile as Smile } from "react-icons/fa"
import Loader from './../loader/index';

const FormActions
  = ({ fileInputRef, onImageChange, isLoading }) => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-[var(--color-tw-blue)] text-xl flex items-center gap-4">
          <label htmlFor="image" className="form-icon flex items-center justify-center">
            <input id="image"
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
            <Gif  />
          </button>
          <button type="button"
            className="form-icon">
            <Smile  />
          </button>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-[var(--color-secondary)] font-bold px-5 py-[6px] rounded-full text-[var(--color-primary)] tracking-wide hover:brightness-70 min-w-[100px] cursor-pointer transition">

          {isLoading ? <Loader /> : "Gönder"}</button>

      </div>


    )
  }

export default FormActions
