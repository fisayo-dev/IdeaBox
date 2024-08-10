import db from "../../appwrite/databases";
import UserPages from "./UserPages";
import InputField from "../../components/InputField/";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Create = () => {
  const navigate = useNavigate();
  const [greyBtn, setGreyBtn] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    const ideaTitle = e.target.title.value;
    const ideaDate = new Date();
    const ideaCategory = e.target.category.value;
    const ideaContent = e.target.content.value;

    if (
      ideaTitle.trim() == "" ||
      ideaCategory.trim() == "" ||
      ideaContent.trim() == ""
    ) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Fill all fields",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
      });
    } else if (`${ideaTitle} `.split(" ").length < 2) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Idea Title must contain at least 2 words",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      try {
        await db.ideas.create({
          title: ideaTitle,
          content: ideaContent,
          category: ideaCategory,
          date: ideaDate,
        });
        setGreyBtn(true);
        await Swal.fire({
          title: "Success",
          text: "Idea just created",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          showCancelButton: false,
        });
        navigate("../dashboard/ideas");
      } catch (error) {
        Swal.fire({
          title: "Unable to connect to database. ",
          text: "Try again",
          position: "center",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    }
  };

  return (
    <UserPages styleClass="pt-10">
      <h2 className="text-4xl text-center font-bold">Create</h2>
      <div className="py-5 px-3 w-full md:w-5/6 m-auto">
        <form onSubmit={handleCreate} className="w-full grid">
          <InputField>
            <label className="text-2xl font-bold">Idea Title</label>
            <input
              type="text"
              placeholder="Name your idea anything"
              className="p-4 border-2 rounded-lg border-gray-400"
              name="title"
            />
          </InputField>
          <InputField>
            <label className="text-2xl font-bold">Idea Category</label>
            <select
              name="category"
              id=""
              className="p-4 border-2 rounded-lg border-gray-400"
            >
              <option value="--Select--">--Select--</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="Artistic / Creative ">Artistic / Creative</option>
              <option value="Education">Education</option>
              <option value="Political and Legal">Political and Legal</option>
              <option value="Social and Cultural">Social and Cultural</option>
              <option value="Business and Economic">
                Business and Economic
              </option>
              <option value="Health and Medical">Health and Medical</option>
              <option value="Philosophical and Ethical">
                Philosophical and Ethical
              </option>
              <option value="Environmental and Sustainability">
                Environmental and Sustainability
              </option>
            </select>
          </InputField>
          <InputField>
            <label className="text-2xl font-bold">Idea Content</label>
            <textarea
              name="content"
              id=""
              cols="30"
              rows="17"
              placeholder="Pour out the idea as it comes to yoour mind."
              className="p-4 border-2 rounded-lg border-gray-400"
            />
          </InputField>
          <Button styles="my-1" disabled={greyBtn} text="Create" />
        </form>
      </div>
    </UserPages>
  );
};

export default Create;
