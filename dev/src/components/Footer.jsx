import {
  FaRegCopyright,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ appTitle }) => {
  return (
    <>
      {/* <hr className="bg-gray-600 " /> */}
      <div className="px-10 md:px-20 py-2 items-center flex gap-10  justify-between md:justify-center border-top border-gray-500">
        <div className="p-2 gap-2 flex items-center">
          <h2 className="text-2xl md:text-3xl font-bold">{appTitle}</h2>
          <div className="flex items-center gap-1 ">
            <FaRegCopyright />
            <pre>{new Date().getFullYear()}</pre>
          </div>
        </div>
        <div className="p-2 flex gap-2 text-[1.1rem]">
          <Link to='https://github.com/fisayo-dev'><FaGithub /></Link>
        </div>
      </div>
      {/* <hr className="bg-gray-600 " /> */}
    </>
  );
};

export default Footer;
