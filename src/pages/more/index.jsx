import { useOutletContext } from "react-router-dom";
import AppShell from "../../components/app-shell";

const More = () => {
  const user = useOutletContext();

  return (
    <AppShell user={user} title="Daha Fazla">
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-zinc-800">
          <div className="space-y-3 text-zinc-300">
            <div className="rounded-xl bg-zinc-900 p-4">Topluluklar</div>
            <div className="rounded-xl bg-zinc-900 p-4">Sponsorlu İçerik</div>
            <div className="rounded-xl bg-zinc-900 p-4">İletişim</div>
            <div className="rounded-xl bg-zinc-900 p-4">Yardım</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default More;
