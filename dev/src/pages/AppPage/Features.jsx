import { BoltIcon, UsersIcon, ServerIcon } from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className="p-5 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold">Features</h2>
      <div className="my-3">
        <div className="grid bg-red-00 p-10 m-auto grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="grid gap-1 text-center py-5 px-3 md:py-10 md:px-5 max-w-sm m-auto md:max-w-full items-center   rounded-lg border-2 border-gray-100">
            <div className="text-center w-full">
              <BoltIcon className="m-auto w-1/4 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">Fast Authentication.</h3>
            <p>
              Built it with sessions to aid swift authentication of user.
            </p>
          </div>
          <div className="grid gap-1 text-center py-5 px-3 md:py-10 md:px-5 max-w-sm m-auto md:max-w-full items-center  rounded-lg border-2 border-gray-100">
            <div className="text-center w-full">
              <ServerIcon className="m-auto w-1/4 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">Reliable Database</h3>
            <p>
              All ideas and users interaction with ideas are safe and only accessible by the user.
            </p>
          </div>
          <div className="grid gap-1 text-center py-5 px-3 md:py-10 md:px-5 max-w-sm m-auto md:max-w-full items-center  rounded-lg border-2 border-gray-100">
            <div className="text-center w-full">
              <UsersIcon className="m-auto w-1/4 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">User Friendly Interface</h3>
            <p>
              It helps increase user experience by providing them an elegant and precise look.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
