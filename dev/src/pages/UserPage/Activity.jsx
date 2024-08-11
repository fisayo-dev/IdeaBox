import UserPages from "./UserPages";
import profile from "../../assets/profile.svg";
import { useAuth } from "../../utils/AuthContext";

const Activity = () => {
  const { user } = useAuth();
  return (
    <UserPages styleClass="pt-10">
      <h2 className="text-4xl text-center font-bold">Activity</h2>
      <div className="mt-5">
        {/* Porfile Card */}
        <div className="p-5 border border-gray-300 rounded-lg w-full md:w-2/4 m-auto">
          <div className="grid items-center gap-3">
            <img
              src={profile}
              className="w-1/5 md:2/5 m-auto"
              alt=""
              draggable={false}
            />
            <div className="text-center text-2xl">
              <p>You are current online</p>
              <small className="text-[0.9rem]">You joined 7/12/2024</small>
            </div>
          </div>
        </div>
      </div>
    </UserPages>
  );
};

export default Activity;
