
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiDotsThreeCircle } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export const navSections = [
    {
        title: "Anasayfa",
        icon: <BiHomeCircle />,
        path: "/feed",
    },
    {
        title: "Bildirimler",
        icon: <AiOutlineBell />,
        path: "/notifications",
    },
    {
        title: "Mesajlar",
        icon: <AiOutlineMail />,
        path: "/messages",
    },
    {
        title: "Listeler",
        icon: <CiViewList />,
        path: "/lists",
    },
    {
        title: "Yer İşaretleri",
        icon: <BsBookmark />,
        path: "/bookmarks",
    },
    {
        title: "Onaylanmış",
        icon: <AiOutlineCheckCircle />,
        path: "/verified",
    },
    {
        title: "Profil",
        icon: <CgProfile />,
        path: "/profile",
    },
    {
        title: "Ayarlar",
        icon: <IoSettingsOutline />,
        path: "/settings",
    },
    {
        title: "Daha Fazla",
        icon: <PiDotsThreeCircle />,
        path: "/more",
    },
];

export const settingsItems = [
    {
        id: "account",
        title: "Hesap",
        description: "Profil bilgileri, kullanıcı adı ve hesap tercihleriniz burada görünür.",
    },
    {
        id: "security",
        title: "Güvenlik",
        description: "Şifre, oturumlar ve güvenlik ayarlarınızı yönetebilirsiniz.",
    },
    {
        id: "notifications",
        title: "Bildirimler",
        description: "E-posta ve uygulama bildirim tercihlerinizi düzenleyin.",
    },
    {
        id: "language",
        title: "Dil",
        description: "Arayüz dilini ve içerik tercihlerinizi değiştirebilirsiniz.",
    },
];
