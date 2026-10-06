import { useOutletContext } from "react-router-dom";
import AppShell from "../../components/app-shell";

const Profile = () => {
  const user = useOutletContext();

  const displayName = user?.displayName || user?.email?.split("@")[0] || "Kullanıcı";
  const email = user?.email || "kullanici@example.com";
   const handleImageError = (event) => {
    event.target.src = "/avatar.png"
    event.target.onerror = null
  }

  return (
    <AppShell user={user} title="Profil">
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-zinc-800">
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURL || "/avatar.png" }
              alt={displayName}
              onError={handleImageError}
              className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700"
            />

            <div>
              <h1 className="text-2xl font-bold">{displayName}</h1>
              <p className="text-zinc-400">{email}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-400">Kullanıcı adı</p>
              <p className="text-lg font-semibold">{displayName}</p>
            </div>

            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-400">E-posta</p>
              <p className="text-lg font-semibold">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Profile;
