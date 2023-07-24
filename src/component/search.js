import { useState, useEffect, useRef } from "react";
import { useNavigate , Navigate} from 'react-router-dom';

function SearchInput() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(true);
  const [isVisible, setVisible] = useState();
  const searchInput = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.key === "Enter") {
          setSearching(false);
          searchInput.current.blur();
        };
      } 

  const handleClear = () => {
    setSearchTerm("");
  };
  
  useEffect(() => {
    setVisible(true);
    searchInput.current.focus();
  }, []);

  if (searching) {
    return (
      <div className={`h-0 w-0 overflow-y-auto flex flex-col items-center bg-slate-100 opacity-100 transition-all ${isVisible ? "opacity-100 h-screen w-screen left-0" : "left-1/2"}`}>
        <div className="flex fixed w-screen justify-between divide-x-2 bg-white border-b-2 border-slate-300">
          <button className="text-red-black w-16">
          <i className="fa-solid fa-arrow-left" onClick={()=>{navigate(-1)}}></i>
          </button>
          <div className="relative">
            <input
              ref={searchInput}
              type="text"
              placeholder=" Search 'Iphone' "
              value={searchTerm}
              onKeyDown={handleSearch}
              onChange={handleSearch}//this causes multiple render
              className="pl-2 w-[80vw] text-black bg-slate-100 pr-8 py-2 outline-none border-transparent"
            />
            {searchTerm ?
              <button
                onClick={handleClear}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              :
              <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            }
          </div>
        </div>
      </div>
    );
  } 
  else {
    return <Navigate to="/searchsuggestion" state={{q:searchTerm}} />;
  }
}
export default SearchInput;