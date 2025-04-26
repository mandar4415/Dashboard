const Navbar = () => {
  return (
    <header className="absolute left-[248px] top-0 w-[calc(100vw-248px)] h-20 border-b border-[#EAECF0] flex flex-col items-end px-8 bg-white z-10">
      <div className="flex flex-row items-center justify-end w-full h-20 py-5 gap-4">
        {/* Actions */}
        <div className="flex flex-row items-center gap-4 h-10">
          {/* Settings Button */}
          <button className="flex items-center justify-center w-10 h-9 p-0.2 bg-white rounded-[6px] hover:bg-gray-50 transition-colors">
            <img
              src="settings.png"
              alt="Settings"
              className="w-10 h-10 text-[#5E718D]"
            />
          </button>
          {/* Avatar Dropdown */}
          <div className="flex flex-col items-start w-10 h-10">
            <div className="relative w-10 h-10">
              <img
                src="profile.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="absolute inset-0 border-[0.75px] border-[rgba(0,0,0,0.08)] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 