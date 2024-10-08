/* eslint-disable react/no-unescaped-entities */
import profile from "../../assets/profile2.svg";
import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { SiDailydotdev } from "react-icons/si";
import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <div className="p-5 ">
      <h2 className="text-4xl md:text-6xl text-center font-extrabold">
        Developer
      </h2>
      <div className="mt-5 py-10 px-5 md:px-20 rounded-lg grid gap-10 w-full md:w-11/12 items-center lg:flex m-auto overflow-hidden ">
        <div className="grid gap-3 p-5 text-center lg:text-left">
          <h2 className="text-5xl font-bold my-4">Meet Fisayo Obadina</h2>
          <p className="">
            I am a FrontEnd Developer with over <b>four</b> years of experience.
            My programming skills are <b>HTML 5</b>, <b>CSS 3</b>,{" "}
            <b>JavaScript</b>, <b>Python</b>, <b>React Js</b>, <b>Django</b>,{" "}
            <b>Git</b>, <b>Tailwind</b> and more. I also
          </p>
          <div className="grid gap-1">
            <p className="font-bold">Follow me on social media:</p>
            <div className="flex gap-2 justify-center lg:justify-start text-[1.1rem]  items-center">
              <Link to="https://x.com/fisayocoder">
                <FaXTwitter className="hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link to="https://app.daily.dev/fisayodev">
                <SiDailydotdev className="hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link to="https://www.linkedin.com/in/olufisayo-obadina-a38614267/">
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link to="https://web.facebook.com/olufisayo.obadina/">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src={profile}
          className="m-auto w-2/4 md:w-5/12 lg:3/12"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Developer;
