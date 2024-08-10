/* eslint-disable react/no-unescaped-entities */
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAppwrite } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="p-5 ">
      <h2 className="text-4xl md:text-6xl text-center font-extrabold">
        Technologies
      </h2>
      <div className="mt-2 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center py-5 px-10">
          <div className="grid border-2 rounded-lg w-3/4 md:w-5/6 m-auto border-gray-100 gap-5 p-5 items-center text-center">
            <FaReact className="text-[8rem] text-blue-600 m-auto" />
            <pre className="font-bold">React Js</pre>
          </div>
          <div className="grid border-2 rounded-lg w-3/4 md:w-5/6 m-auto border-gray-100 gap-5 p-5 items-center text-center">
            <SiAppwrite className="text-[8rem] text-[#DB1A5A] m-auto"/>
            <pre className="font-bold">Appwrite</pre>
          </div>
          <div className="grid border-2 rounded-lg w-3/4 md:w-5/6 m-auto border-gray-100 gap-5 p-5 items-center text-center">
            <SiTailwindcss className="text-[8rem] text-blue-500 m-auto" />
            <pre className="font-bold">Taliwind css</pre>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Technologies;
