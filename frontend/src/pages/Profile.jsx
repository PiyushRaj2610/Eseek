import { Sidebar } from "../components/Dashboard/Sidebar";

export const Profile = () => {
  return (
      <div className="h-screen w-full flex flex-col bg-gray-900 text-white">
  
        {/* Navbar */}
        <nav className="bg-[#000000] border-[#282929] border-b-[0.5px] h-20 flex items-center justify-between px-10">
          <div className="text-3xl font-bold tracking-widest cursor-pointer">
            E-SEEK
          </div>
          <img
            src="./src/assets/dum.jpeg"
            className="h-10 w-10 object-cover rounded-full border-[0.5px] border-white cursor-pointer"
            alt="Profile"
          />
        </nav>
  
        {/*Sidebar and Main Content */}
        <div className="flex flex-1 bg-black">
          <aside className="w-64 border-white border-r-[0.5px] bg-black p-2 text-white">
            <Sidebar />
          </aside>

          <div>
              <div className="profile-container">
          {/* Header and Navbar already included elsewhere */}
          
          {/* Profile Section */}
          <div className="profile-header">
            <div className="profile-pic"></div>
            <div className="profile-info"></div>
            <div className="chat-icon">💬</div>
          </div>
          
          {/* Red/Pink Bar */}
          <div className="profile-bar"></div>
          
          {/* Main Content Area */}
          <div className="profile-content"></div>
        </div>
          </div>
  
        </div>
      </div>
    );
}