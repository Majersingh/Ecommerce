import Nav from './navbar.js';
import Slide from './slide.js'
import Latest from './latest.js'
import AllProduct from './allproductlisting.js'
function Home(){
    return(
        <> 
          <Nav />
          <Slide/>
          <Latest/>
          <AllProduct/>
        </>
    )
}
export default Home;