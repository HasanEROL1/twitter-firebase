import { useState } from "react";
import {
  AiOutlineEye as Open,
  AiOutlineEyeInvisible as Closed,
} from "react-icons/ai";

const PasswordInput = () => {

  const [isShow, setIsShow] = useState(false)
  console.log(isShow)
  return ( 
    <div className="mt-5" >
      <label >Şifre</label>
      <div className="relative">
        <input type={isShow ? "text" : "password"} name="password" className="input" />
        <span
          onClick={() => setIsShow(!isShow)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-zinc-700 hover:text-zinc-400 transition-colors" >  {isShow ? <Closed /> : <Open />}
        </span>

      </div>
    </div>
  )
}

export default PasswordInput