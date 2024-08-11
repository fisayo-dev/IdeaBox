import UserPages from "./UserPages";
import profile from "../../assets/profile.svg";
import { useAuth } from "../../utils/AuthContext";
const Profile = () => {
  const { user } = useAuth()
  const userDate = `${new Date(user.registration).getDay()}/${new Date(user.registration).getMonth() + 1}/${new Date(user.registration).getFullYear()} `
 
  return (
    <UserPages styleClass="pt-10">
      <h2 className="text-4xl text-center font-bold">Profile</h2>
      <div className="m-3">
        {/* Porfile Card */}
        <div className="p-5 border border-gray-300 rounded-lg w-full md:w-3/4 m-auto">
          <div className="grid md:flex items-center gap-3">
            <img
              src={profile}
              className="w-1/5 md:2/5 m-auto"
              alt=""
              draggable={false}
            />
            <div className="p-2 text-[0.8rem] w-full">
              <pre>
                <t className="font-bold">ID:</t> {user.$id}
              </pre>
              <pre>
                <t className="font-bold">Username:</t> {user.name}
              </pre>
              <pre>
                <t className="font-bold">Email Address:</t>{" "}
                {user.email}
              </pre>
              <pre>
                <t className="font-bold">Password:</t> ************
              </pre>
              <pre>
                <t className="font-bold">Date Joined:</t> {userDate}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </UserPages>
  );
};

export default Profile;
