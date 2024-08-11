import ideas from "../../assets/ideas.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
// import

const Hero = () => {
  const {user}  = useAuth()
  return (
    <div className="">
      <div className="m-auto bg-blue-40 items-center flex ">
        <main className="items-center bg-blue-70 sm:grid md:flex max-w-5xl mx-auto px-10 py-10">
          <div>
            <h1 className="text-slate-900 font-extrabold text-5xl lg:text-6xl text-center md:text-left">
              Manage every idea that comes to your mind.
            </h1>
            <p className="mt-2 text-slate-900 w-full md:w-1/2 tracking-tight text-center lg:text-left md:text-left">
              Save creative, inspiring and innovative thoughts at their instance
              with <b className="font-extrabold text-blue-600">StoreIdea</b>.
            </p>
            <div className="grid m-auto md:m-0 items-center md:flex justify-center gap-1 md:gap-3 md:justify-start">
              <Link to="/dashboard/ideas">
                <button className="py-2 w-full px-3 rounded-md border-2 border-blue-600 hover:border-blue-800 bg-blue-600 hover:bg-blue-800 mt-3 md:mt-5 text-white">
                  {user ?
                    `Back to Dashboard, ${user.name}`
                    :
                    'Get Started'
                  }
                </button>
              </Link>
            </div>
          </div>
          <img
            src={ideas}
            draggable={false}
            sizes="10"
            className="w-4/5 m-auto mt-20 sm:w-2/4 md:w-5/12 "
            alt=""
          />
        </main>
      </div>
    </div>
  );
};

export default Hero;
