/* eslint-disable react/prop-types */
import {
  FaPaintBrush,
  FaUsers,
  FaBriefcase,
  FaFlask,
  FaLaptopCode,
  FaBook,
  FaBalanceScale,
  FaHeart,
  FaBrain,
  FaLeaf,
  FaTrash,
} from "react-icons/fa";
import db from "../../appwrite/databases";
import Swal from "sweetalert2";

const Idea = ({ ideaData, setIdeas }) => {
  const currentDate = (date) => {
    return new Date(date);
  };

  const getIcons = (category) => {
    switch (category) {
      case "Artistic / Creative":
        return <FaPaintBrush />;
      case "Social and Cultural":
        return <FaUsers />;
      case "Business and Economic":
        return <FaBriefcase />;
      case "Science":
        return <FaFlask />;
      case "Technology":
        return <FaLaptopCode />;
      case "Education":
        return <FaBook />;
      case "Political and Legal":
        return <FaBalanceScale />;
      case "Health and Medical":
        return <FaHeart />;
      case "Philosophical and Ethical":
        return <FaBrain />;
      case "Environmental and Sustainability":
        return <FaLeaf />;
      default:
        return null;
    }
  };

  const handleDelete = async () => {
    await Swal.fire({
      icon: "warning",
      title: "Delete file ?",
      text: "Are you sure you want to delete the file",
      confirmButtonText: "Yes, delete it",
      confirmButtonColor: "#2563eb",
      cancelButtonText: "No",
      cancelButtonColor: "#d33",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        db.ideas.delete(ideaData.$id);
        setIdeas((prevIdeas) =>
          prevIdeas.filter((i) => i.$id !== ideaData.$id)
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });
      }
    });
  };

  return (
    <div
      key={ideaData.$id}
      className="grid gap-4 items-center border-2 border-gray-200 cursor-pointer p-4 rounded-md w-[18rem] overflow-hidden animate-fadeIn"
    >
      <div className="flex justify-between gap-6 items-top">
        <div className="w-1/3">
          <h3 className="text-2xl text-blue-800 font-bold">
            {ideaData.title.length > 10
              ? `${ideaData.title.substring(0, 10)}...`
              : ideaData.title}
          </h3>
        </div>
        <div className="text-[0.8rem]">
          <pre>{`${currentDate(ideaData.date).getDate()}/${
            currentDate(ideaData.date).getMonth() + 1
          }/${currentDate(ideaData.date).getFullYear()}`}</pre>
          <pre>{`${currentDate(ideaData.date).toLocaleTimeString("default", {
            hour: "2-digit",
            minute: "2-digit",
          })}`}</pre>
        </div>
      </div>
      <div className="text-[#4f4e4e] text-[0.8rem]">
        <p className="w-[16rem] h-auto overflow-y-scroll h-full">
          {ideaData.content.length > 90
            ? `${ideaData.content.substring(0, 90)}... `
            : ideaData.content}
        </p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <div className="text-[0.8rem] text-blue-600 font-bold flex items-center gap-2 p-2 rounded-md  hover:bg-gray-50 w-100">
          {getIcons(ideaData.category)}
          {ideaData.category}
        </div>
        <button
          type="submit"
          className="hover:text-red-600 px-3 text-[1.3rem] font-bold text-gray-800 rounded-md "
          onClick={handleDelete}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Idea;
