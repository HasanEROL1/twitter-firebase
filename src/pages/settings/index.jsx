import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AppShell from "../../components/app-shell";
import { settingsItems } from "../../utils/constants";

const Settings = () => {
  const user = useOutletContext();
  const [selected, setSelected] = useState(settingsItems[0]);

  return (
    <AppShell user={user} title="Ayarlar">
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto bg-[#1f1f1f] rounded-2xl p-6 shadow-lg border border-zinc-800">
          <div className="space-y-3 text-zinc-300">
            {settingsItems.map((item) => {
              const isActive = selected.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`w-full rounded-xl p-4 text-left transition ${
                    isActive
                      ? "bg-zinc-800 text-white border border-zinc-700"
                      : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl bg-zinc-900 p-5 text-zinc-200 border border-zinc-800">
            <h2 className="text-xl font-semibold text-white">{selected.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{selected.description}</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;
