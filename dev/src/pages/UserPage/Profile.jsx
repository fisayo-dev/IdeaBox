import UserPages from "./UserPages";
import profile from "../../assets/profile.svg";
const Profile = () => {
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
                <t className="font-bold">ID:</t> 23243121327690934
              </pre>
              <pre>
                <t className="font-bold">Username:</t> Fizzydev
              </pre>
              <pre>
                <t className="font-bold">Email Address:</t>{" "}
                fisayobadina@gmail.com
              </pre>
              <pre>
                <t className="font-bold">Password:</t> ************
              </pre>
              <pre>
                <t className="font-bold">Date Joined:</t> 23rd June, 2024
              </pre>
            </div>
          </div>
        </div>
      </div>
    </UserPages>
  );
};

export default Profile;
