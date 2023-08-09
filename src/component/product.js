import { Link, useParams  , useNavigate} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';

const ProductDescription = () => {
  const { newItem, allItems, updateCart } = useContext(UserContext);
  const { requiredItemid } = useParams();

  const [desiredItem, setDesiredItem] = useState();
  const [removeOrAdd, setRemoveOrAdd] = useState('Add to Cart');
  
  const navigate = useNavigate();
//   console.log('requiredItemid:', desiredItem , "n",newItem.includes(desiredItem) , newItem[0]);

  useEffect(() => {
    var temp=newItem.find((obj) => obj._id === parseInt(requiredItemid)); // this to check if item already is available in cart or not
    if(temp)
    setDesiredItem(temp);
    else
    setDesiredItem(allItems.find((obj) => obj._id === parseInt(requiredItemid)));
    if (newItem.some(item => item._id === parseInt(requiredItemid))) {
        setRemoveOrAdd("Remove");
      }
  }, [allItems, requiredItemid , newItem]);

  if (desiredItem)
    return (
      <div className="bg-slate-100">
        <div className="flex fixed w-screen items-center p-2 bg-white shadow-xl">
        <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>navigate(-1)}></i>
        <Link to={'/'}>
           <i className="fa-brands fa-shopify fa-xl ml-4"></i>
        </Link> 
          <div className="w-full flex justify-end">
            <Link to={'/search'} className="font-medium pl-4">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </Link>
            <Link to={'/categories'} className="pl-4 text-center">
              <i className="fa-solid fa-store fa-lg"></i>
            </Link>
            <Link to={'/cart'} className="pl-4 text-center">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              {newItem.length > 0 ? (
                <span className="h-4 w-4 absolute right-2 -top-[1px] bg-red-600 text-white rounded-full text-xs">
                  {newItem.length}
                </span>
              ) : (
                <></>
              )}
            </Link>
          </div>
        </div>
        <br />
        <div className="mt-5 bg-gray-100  overflow-hidden shadow-lg">
          <img src={`${desiredItem.images[0]}`} alt="Product" className="w-full h-auto object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{desiredItem.title}</h2>
            <p className="text-gray-700">{desiredItem.description}</p>
            <div className="mt-4">
              <p className="text-lg font-bold text-[#5e11c2]">
                Price: &#8377;{desiredItem.price}
              </p>
              <p className="text-gray-600">Brand: {desiredItem.brand}</p>
              <p className="text-gray-600">Rating: {desiredItem.rating}</p>
              <p className="text-green-600">Discount: {desiredItem.discountPercentage}% OFF</p>
              <div className="border-t border-gray-400 mt-4"></div>
              <h3 className="text-xl font-semibold mt-4">Specifications:</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>4 GB RAM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-black">
          <button
            className="w-1/2 bg-[#8b8492] font-semibold text-white p-2"
            onClick={() => {
              updateCart(desiredItem);
              setRemoveOrAdd(removeOrAdd === "Remove" ? "Add to Cart":'Remove');
            }}
          >
            {removeOrAdd}
          </button>
          <Link to='/buynow' state={desiredItem} >
            <button className="w-1/2 bg-[#5e11c2] text-white font-semibold p-2">Buy Now</button>
          </Link>
        </div>
      </div>
    );
  else return <>Loading...</>;
};

export default (ProductDescription);
