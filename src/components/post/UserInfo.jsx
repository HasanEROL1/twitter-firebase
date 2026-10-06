import { MdEdit } from "react-icons/md"
import { getUserName } from "../../utils/helpers"
import moment from "moment/min/moment-with-locales"







const UserInfo = ({tweet}) => {

let date

  if (tweet?.createdAt) {
    date = moment(tweet.createdAt.toDate())
      .locale("tr")
      .fromNow()
  } else {
    date = "bilinmiyor"
  }



return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gray-400 ">
      <p className="text-white/50 italic font-bold ">{tweet.user.name}</p>
      <p className="text-sm text-white/40 italic ">{getUserName(tweet.user.name)}</p>
      <p className="text-sm  text-white/30 italic">{date}</p>
      
      {tweet.isEdited && (
       <p>
        <MdEdit className="md:hidden"/>
        <span className="max-md:hidden"> (düzenlendi)</span>
       </p>
  
      )}
    </div>
  )
}

export default UserInfo