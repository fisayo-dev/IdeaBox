import Sidebar from "../../components/SideBar";

const UserPages = ({ children, styleClass }) => {
  return (
    <div className="relative flex justify-between ">
      <Sidebar />
      <div
        className={`grid px-5 py-5 h-full dashboardContent w-full max-w-[84rem] pt-[4rem] overflow-x-hidden ${styleClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default UserPages;
