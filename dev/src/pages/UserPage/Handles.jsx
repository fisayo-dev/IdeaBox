import UserPages from './UserPages'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaPlus,
  FaSnapchat
} from 'react-icons/fa'

const Handles = () => {
  return (
    <UserPages styleClass='pt-10'>
      <div className="m-4 mt-2 py-5 text-center m-auto max-w-3/4 md:max-w-lg">
        <h2 className="text-4xl text-center font-bold">Social Media Handles</h2>
        <p className="text-[0.72rem] md:text-[0.95rem]  mt-2 tracking-tight">Establish a connection between all your social media handles and manage all your posts easily.</p>
      </div>  

      {/* Handle List Section */}

      <div className="py-2 max-w-md m-auto">
        <div className="p-5 cursor-pointer my-3 rounded-lg shadow-sm flex items-center justify-between border-2 border-black-200 px-5">
          <div className="flex gap-3 items-center">
            <FaFacebook size={35} />
            <p className="text-[1.1rem] font-bold">Facebook</p>
          </div>
          <FaPlus size={40} className="p-2 rounded text-white bg-blue-600 hover:bg-blue-700"/>
        </div>
        <div className="p-5 cursor-pointer rounded-lg shadow-sm flex items-center justify-between border-2 border-black-200 px-5">
          <div className="flex gap-3 items-center">
            <FaInstagram size={35} />
            <p className="text-[1.1rem] font-bold">Instagram</p>
          </div>
          <FaPlus size={40} className="p-2 rounded text-white bg-blue-600 hover:bg-blue-700"/>
        </div>
        <div className="p-5 my-3 cursor-pointer  rounded-lg shadow-sm flex items-center justify-between border-2 border-black-200 px-5">
          <div className="flex gap-3 items-center">
            <FaTwitter size={35} />
            <p className="text-[1.1rem] font-bold">Twitter</p>
          </div>
          <FaPlus size={40} className="p-2 rounded text-white bg-blue-600 hover:bg-blue-700"/>
        </div>
        <div className="p-5 my-3 cursor-pointer  rounded-lg shadow-sm flex items-center justify-between border-2 border-black-200 px-5">
          <div className="flex gap-3 items-center">
            <FaTiktok size={35} />
            <p className="text-[1.1rem] font-bold">Tiktok</p>
          </div>
          <FaPlus size={40} className="p-2 rounded text-white bg-blue-600 hover:bg-blue-700"/>
        </div>
        <div className="p-5 my-3 cursor-pointer  rounded-lg shadow-sm flex items-center justify-between border-2 border-black-200 px-5">
          <div className="flex gap-3 items-center">
            <FaSnapchat size={35} />
            <p className="text-[1.1rem] font-bold">Snapchat</p>
          </div>
          <FaPlus size={40} className="p-2 rounded text-white bg-blue-600 hover:bg-blue-700"/>
        </div>
      </div>

    </UserPages>
  )
}

export default Handles