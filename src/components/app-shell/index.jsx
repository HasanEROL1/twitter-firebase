import Nav from "../../pages/feed/Nav";
import Aside from "../../pages/feed/Aside";

const AppShell = ({ user, title, children }) => {
  return (
    <div className="h-screen bg-[var(--color-primary)] overflow-hidden text-[var(--color-secondary)] grid grid-cols-[1fr_minmax(0,600px)_1fr] max-w-[1280px] mx-auto">
      <div className="h-screen overflow-y-auto">
        <Nav user={user} />
      </div>

      <main className="border border-[var(--color-tw-gray)] overflow-y-auto">
        {title && (
          <header className="border-b border-[var(--color-tw-gray)] p-4 font-bold text-lg">
            {title}
          </header>
        )}
        {children}
      </main>

      <div className="h-screen overflow-y-auto">
        <Aside />
      </div>
    </div>
  );
};

export default AppShell;
