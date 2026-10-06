import { trends, suggestions } from "../../utils/helpers"

const Aside = () => {
  return (
    <aside className="hidden lg:flex justify-start px-4 py-4">
      <div className="w-full max-w-[320px] space-y-4">
        {/* Arama Alanı */}
        <div className="bg-zinc-900 rounded-2xl border border-[var(--color-tw-gray)] px-4 py-3">
          <input
            type="text"
            placeholder="Ara"
            className="w-full bg-black text-white placeholder:text-zinc-500 border border-zinc-700 rounded-full px-4 py-2 outline-none focus:border-[var(--color-tw-blue)]"
          />
        </div>
             {/* Trendler Alanı */}
        <div className="bg-zinc-900 rounded-2xl border border-[var(--color-tw-gray)] overflow-hidden">
          <h2 className="px-4 py-3 border-b border-[var(--color-tw-gray)] font-bold text-lg">
            İlgini Çekebilecek Trendler
          </h2>
          <div className="divide-y divide-[var(--color-tw-gray)]">
            {trends.map((trend) => (
              <div key={trend.title} className="px-4 py-3 hover:bg-zinc-800 transition cursor-pointer">
                <p className="text-xs text-zinc-400">{trend.category}</p>
                <p className="font-bold mt-1">{trend.title}</p>
                <p className="text-xs text-zinc-400">{trend.posts} tweets</p>
              </div>
            ))}
          </div>
        </div>

{/* Kimi Takip Etmeli Alanı */}
        <div className="bg-zinc-900 rounded-2xl border border-[var(--color-tw-gray)] overflow-hidden">
          <h5 className="px-4 py-3 border-b border-[var(--color-tw-gray)] font-bold text-lg">
            Kimi takip etmeli?
          </h5>
          <div className="divide-y divide-[var(--color-tw-gray)]">
            {suggestions.map((user) => (
              <div key={user.handle} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-sm text-white">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-xs text-zinc-400">{user.handle}</p>
                  </div>
                </div>
                <button className="bg-white text-black rounded-full px-3 py-1 text-sm font-bold hover:bg-gray-200 transition cursor-pointer">
                  Takip et
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside