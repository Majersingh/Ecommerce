import { useState, createContext , memo , useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate , Link } from "react-router-dom";
import Cart from './component/cart.js'
import Home from './component/home.js'
import Login from './component/login.js'
import Search from './component/search.js'
import Navbtn from './component/navigation.js'
import Product from './component/product.js'
import Footer from './component/footer.js'
import Signup from './component/signup.js'
import Profile from './component/profile.js'
import Checkout from './component/checkout.js'
import Searchsuggestion from './component/searchsuggestion.js'
export const UserContext = createContext();
 
 const MemoizedHome = memo(Home);//// This is to avoid re-rendering on parent's component state changes
 const apiUrl=process.env.REACT_APP_API_URL;

  const App = () => {
  const [user, setUser] = useState();
  const [isAuthenticated, setAuthentication] = useState(false);
  const [newItem, addTocart] = useState([]); //newitem i.e added in cart
  const [allItems, setallItems] = useState([]);
  
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const handleLogin = (user) => {
    setAuthentication(user.isAuthenticated);
    setUser(user.newUser);
  };
  const handleLogout = () => {
    setAuthentication(false);
    setUser(null);
  };

  const updateCart = async (item) => {
    const itemExists = newItem.some(itm => itm._id === item._id);
    if(itemExists) // if include then remove
    {
      newItem.splice(newItem.indexOf(item), 1);
      if(isAuthenticated)
      postCart(user , newItem , apiUrl);
      addTocart([...newItem]);
      console.log("Deleted from cart");
    }
    else
    {
      if(isAuthenticated)
      postCart(user , [...newItem ,{...item , quantity:1}],apiUrl)
      addTocart([...newItem ,{...item , quantity:1}]);//quantity fiels added this to ensure only item to be add in cart by adding field quantity means if they want but two do not select two just add ome more
      console.log("Added to newItem Cart");
    }
  };

  const updateCartafterlogin =  async (email) => {  //this to get if alredy anything in cart   of db , if any  then bring to client from server and also sent to server from client and checking to not add duplicate agter login
    var temp= await getUser(email , apiUrl);
    if(temp)
    {
      for (let obj of temp.cart) {
        if (!newItem.some((item) => JSON.stringify(item) === JSON.stringify(obj))) {
          newItem.push(obj);
        }
      }
      addTocart([...newItem]);
    }
    postCart({email: email} ,newItem,apiUrl);
  }
  const updateCartitemquantity =  async () => {  
   await postCart(user , [] , apiUrl);//this to  first clear cart 
   await postCart(user , newItem , apiUrl);//then reset db cart as per updated cart to set current quantity
  }
  
  useEffect(() => {
    fetch(`${apiUrl}/getallproduct`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data)
        setallItems(data); // Update the state with fetched items
        else
        console.error("NO Item Recieved");
      });
      (async () => {
        const result = await checkAuthentication(updateUser , addTocart , apiUrl);
        setAuthentication(result);
      })();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{apiUrl, user,updateCartitemquantity ,updateCartafterlogin, updateUser, handleLogout ,handleLogin  , updateCart , newItem , allItems , isAuthenticated}}>
        <Routes>
          <Route exact path="/" element={<><MemoizedHome/><Navbtn/><Footer/></>}  replace={true}/>
          <Route exact path="/login" element={<Login />}  />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/search" element={<><Search/> <Footer/></>} />
          <Route exact path="/product/:requiredItemid" element={<><Product/><Footer/></>} />
          <Route exact path="/searchsuggestion" element={<><Searchsuggestion/><Footer/></>} />
          < Route exact path="/categories" element={<>404</>} />
          <Route
            path="/account"
            element={isAuthenticated ?<><Profile></Profile><Footer/><Navbtn/></> : <Navigate to="/login"  />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/login"  />}
          />
          <Route
            path="/checkout"
            element={isAuthenticated ? <Checkout /> : <Navigate to="/login"  />}
          />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};



//  *********************************these are independent funtions*******************************
  async function checkAuthentication(updateUser , addTocart , apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ email:email , password:password}),
        credentials: 'include'
      });
      var  tempUser ;
      if (!response.ok) {
        console.log(" Access Denied ");
        return false;
      }
      else // if authenticated retrieving user name and thheir data as weell
      { tempUser = await response.json(); //retrieving email and other data of user from jwt token
        console.log('Server Response isLoggedIn:',response.ok);
        updateUser(tempUser);
        const tempUserdata = await getUser(tempUser.email , apiUrl);
        addTocart([...tempUserdata.cart]);
        return true;
      }

    } catch (error) {
      console.error('Error: to Check Authentication', error);
      return false;
    }
  }

  async function postCart(user , newItem , apiUrl){
    try {
      const response = await fetch(`${apiUrl}/addtocart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email ,item:newItem}),
        credentials: 'include' 
      });
      console.log('updated cart :' ,response.ok , newItem );
    } 
    catch (error) {
      console.error('Error: to Post Cart', error);
    }
  }

  async function getUser(email , apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/getuser?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' ,
      });
      var  tempUser ;
      if (!response.ok) {
        console.log(" Access Denied to get cart ");
        return false;
      }
      else
      { tempUser = await response.json();// retrieving all data like name their cart
        return  tempUser;
      }

    } catch (error) {
      console.error('Error: to Get User Function', error);
      return false;
    }
  }

    const ErrorPage = () => {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Error</h1>
            <p className="text-lg mb-6">Oops! This Page Not Found</p>
            <Link to="/" className="text-blue-500 underline">
              Go back to Home
            </Link>
          </div>
        </div>
      );
    };

export default App;
