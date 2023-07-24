import { useState, useEffect, useContext, memo  } from "react";
import { Link  , useNavigate ,  useLocation} from 'react-router-dom';
import Mcard from './mobilecard.js'
import { UserContext } from '../App';

const MemoizedMcard = memo(Mcard);

function Searchsuggestion() {
 
  const navigate = useNavigate();
  const { newItem , allItems ,apiUrl} = useContext(UserContext);
  const [items, setItems] = useState();
  const [intent, setIntent] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const location = useLocation();

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  
  const handleSorting = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    let sorteditem =filteredArray.length > 0 ?[...filteredArray]: [...items];
    if (selectedValue === 'highLow') {
      sorteditem.sort((a, b) => b.price - a.price);
    } else if (selectedValue === 'lowHigh') {
      sorteditem.sort((a, b) => a.price - b.price);
    } else if (selectedValue === 'rating') {
      sorteditem.sort((a, b) => b.rating - a.rating);
    }

    if(filteredArray.length >0)
    setFilteredArray(sorteditem);
    else
    setItems(sorteditem);
  };

  const handleMinInputChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleApplyFilter = () => {

    const filtered =items.filter((item) => item.price>= parseInt(minValue) && item.price <= parseInt(maxValue));
    toggleFilter();
    setFilteredArray(filtered);
    setSelectedOption('');
  };

  const handleRemoveFilter = () => {
    setSelectedOption('');
    toggleFilter();
    setFilteredArray([]);
    setMinValue('');
    setMaxValue('');
  };
  useEffect(()=>{
    const targetTitle = location.state.q;
    // console.log(allItems)
    const targetProduct = allItems.find((item) =>item.title.toLowerCase().includes(targetTitle.toLowerCase()));

    if (targetProduct) {
      const similarProducts = allItems.filter((item) =>
      (( item.price <= targetProduct.price+5000 && item.category.includes(targetProduct.category))&& item._id!==targetProduct._id)) 
      
      console.log("Target Product: found");
      console.log("Similar Products: found");
      setItems([targetProduct , ...similarProducts]);
    } 
    else if (intent){
      var range = intent.range?intent.range[0]/80:10000000;
      const similarProducts = allItems.filter((item) =>((item.category.includes(intent.intent) && item.price <=range ) || item.brand.includes(intent.brand))) 
      console.log("Similar Products found");
      setItems(similarProducts);
    }
    else  {
      console.log("exact Product not found!");
    }
  },[intent ,allItems , location.state.q]);
  
  useEffect(() => {
     (async ()=>{
      try {
        const response = await fetch(`${apiUrl}/parsedquery?query=${location.state.q}`);
        const data = await response.json();
        setItems(allItems)
        if (Object.keys(data).length !== 0|| true) {
          console.log(data);
          setIntent(data);
          setSearching(true);
        }
      } catch (error) {
        console.error("Error while parsing query", error);
      }
   })();
        
  }, [location.state.q  ,apiUrl ,allItems]);

    if(isSearching)
    return (
      <>
        <div className="flex fixed w-screen flex-wrap items-center p-2 bg-white shadow-xl">
          <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>navigate(-1)}></i>
          <Link to={'/'}>
           <i className="fa-brands fa-shopify fa-xl ml-4"></i>
          </Link> 
          <div className="w-[75vw] lg:[95vw] flex justify-end">
            <Link to={'/search'} className="pl-4 text-center">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </Link> 
            <Link to={'/categories'} className="pl-4 text-center">
              <i className="fa-solid fa-store fa-lg"></i>
            </Link>
            <Link to={'/cart'} className="relative pl-4 text-center">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              {newItem.length > 0 ? (
                <span className="h-4 w-4 absolute  right-[1px] bottom-[15px] bg-red-600 text-white rounded-full text-xs">
                  {newItem.length}
                </span>
              ) : (
                <></>
              )}
            </Link>
          </div>
          <div className="mt-2 border w-full flex divide-x p-1 ">
            <select
              className="w-1/2 font-medium text-center"
              value={selectedOption}
              onChange={handleSorting}
            >
              <option value="">Sort</option>
              <option value="highLow">High - Low</option>
              <option value="lowHigh">Low - High</option>
              <option value="rating">Rating</option>
            </select>
            <div className="w-1/2 text-center">
              <button
                onClick={toggleFilter}
                className=" w-full transition-colors duration-300"
              >
                <i className="fa-solid fa-filter"></i>
                Filter
              </button>
              <div className={`fixed shadow-lg bg-white w-full right-0 overflow-hidden transition-max-h duration-300 ${showFilter ? 'max-h-96 border  p-2' : 'max-h-0'}`}>
                <div className="flex flex-col items-start text-black">
                  <label htmlFor="minInput">Min:</label>
                  <input id="minInput" className="border shadow-inner" value={minValue}  onChange={handleMinInputChange} type='number' />
                  <label htmlFor="maxInput">Max:</label>
                  <input id="maxInput" className="border shadow-inner" value={maxValue} onChange={handleMaxInputChange} type='number' />
                  <div className="w-[15vh] flex mt-2 px-2 justify-between text-xs text-white ">
                    <button className="p-1 bg-[#848187]" onClick={handleRemoveFilter} >Remove</button>
                    <button className="p-1 bg-[#5e11c2]" onClick={handleApplyFilter}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <List items={filteredArray.length > 0 ? filteredArray : items} />
      </>
    );
    else
    return(<>Loading...</>)
  }

function List({ items }) {
  return (
    <div className='mt-16 mb-16'>
      <p className='font-semibold ml-2'>Showing {items.length} results:</p>
      <div className="justify-items-center grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          return (
            <MemoizedMcard item={{...item ,}} key={item._id} />
          )
        })}
      </div>
    </div>
  )
}

export default Searchsuggestion;
