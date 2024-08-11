import UserPages from "./UserPages";
import Idea from "./Idea";
import { useEffect, useState } from "react";
import { FaSpinner, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { Query } from "appwrite";
import db from "../../appwrite/databases";
import EmptyIdeas from "../../assets/Empty Ideas.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { toWords } from "number-to-words";
import EmptySearch from "../../assets/Empty search.svg";
import { useAuth } from "../../utils/AuthContext";

const Home = () => {
  const [ideasList, setIdeasList] = useState([]);
  const [filteredIdeasList, setFilteredIdeasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchWord, setSearchWord] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    loadIdeas();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchWord, ideasList]);

  const loadIdeas = async () => {
    try {
      const res = await db.ideas.list([Query.orderDesc("$createdAt")]);
      const ideas = res.documents;
      const userIdeas = ideas.filter((i) => i.ideaID === user.$id);
      setIdeasList(userIdeas);
      setFilteredIdeasList(userIdeas);
      setIsLoading(false);
    } catch (error) {
      console.error("Network server went down.", error);
      setIsLoading(false);
    }
  };

  // Initially the searchFilteredList contains all the ideas
  // But the moment the search changes
  const handleSearch = () => {
    const filtered = ideasList.filter((idea) =>
      idea.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredIdeasList(filtered);
  };

  return (
    <UserPages>
      {isLoading ? (
        <div className="p-4 text-blue-600 z-2 m-auto text-center">
          <div className="animate-spinner m-auto">
            <FaSpinner className="m-auto animate-scale" size={90} />
          </div>
          <h2 className="text-2xl font-bold m-5">Fetching ideas</h2>
        </div>
      ) : (
        <div>
          {ideasList.length === 0 ? (
            <div className="text-center grid gap-5 justify-center text-gray-800 p-10">
              <img
                src={EmptyIdeas}
                alt="Empty Ideas"
                className="w-2/5 m-auto"
              />
              <h2 className="text-3xl font-bold">
                {user.name}, Your ideas list is empty.
              </h2>
              <Link to="../dashboard/create">
                <Button text="Create Idea" styles="m-auto md:w-1/3" />
              </Link>
            </div>
          ) : (
            <div>
              <h2 className="text-4xl text-center font-bold">Ideas List</h2>
              <div className="py-5 mt-3">
                <div className="m-auto w-5/6 rounded-md overflow-hidden flex items-center bg-gray-100 shadw-sm border border-gray-100">
                  <div className="p-3 text-gray-400">
                    <FaMagnifyingGlass />
                  </div>
                  <input
                    type="text"
                    placeholder={`Search through ${toWords(ideasList.length)} ${
                      ideasList.length === 1 ? "idea" : "ideas"
                    } by title, ${user.name}`}
                    className="w-full bg-transparent p-3"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                  />
                  <div
                    className={`${
                      searchWord.trim() !== "" ? "p-3 text-gray-400" : "hidden"
                    } cursor-pointer`}
                    onClick={() => {
                      setSearchWord("");
                    }}
                  >
                    <FaX />
                  </div>
                </div>
              </div>
              <div className="py-2 px-5 mt-5 grid justify-center">
                {filteredIdeasList.length == 0 ? (
                  <div className="grid text-center justify-center gap-5">
                    <img src={EmptySearch} className="w-2/5 m-auto" />
                    <p>No result for search, {user.name}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 items-start md-custom-breakpoint:grid-cols-2 lg-custom-breakpoint:grid-cols-3 gap-5">
                    {filteredIdeasList.map((idea) => (
                      <Idea
                        key={idea.$id}
                        ideaData={idea}
                        setIdeas={setIdeasList}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </UserPages>
  );
};

export default Home;
