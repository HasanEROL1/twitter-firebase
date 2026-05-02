import React from "react"


const UserAvatar = ({ photo, name, designs }) => {
  return (
    <img src={photo || "/avatar.png"}
      alt={name || "User Avatar"}
      className={`size-[35px] md:size-[45px] rounded-full object-cover ${designs}`}
    />

  )
}

export default React.memo(UserAvatar)