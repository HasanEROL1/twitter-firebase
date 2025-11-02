import { MdEdit } from "react-icons/md"
import { getUserName } from "../../utils/helpers"
import moment from "moment"

const UserInfo = ({tweet}) => {

let date

if(tweet?.createdAt) {
  // tarih date veri formatına çevrildi
  date = tweet.createdAt.toDate()
  // gönderi ne zaman gönderildi
  date = moment(date).fromNow(true)
} else {
  date ="bilinmiyor"
}

return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gray-400 ">
      <p className="text-white/50 italic font-bold ">{tweet.user.name}</p>
      <p className="text-sm text-white/40 italic ">{getUserName(tweet.user.name)}</p>
      <p className="text-sm  text-white/30 italic">{date}</p>
      
      {tweet.isEdited && (
       <p>
        <MdEdit className="md:hidden"/>
        <span className="max-md:hidden"> * düzenlendi</span>
       </p>
  
      )}
    </div>
  )
}

export default UserInfo