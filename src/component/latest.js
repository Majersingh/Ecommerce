import myImage from './banr.jpg';
function Latest(){
    return(
        <> 
        <p className='font-bold ml-4 mt-2'>Latest:</p>
         <div className="flex justify-center overflow-x-scroll scroll-snap-x-mandatory card-slider">
            <div className="w-72 h-36 flex-none scroll-snap-align-start transition-transform duration-300 transform hover:translate-x-4 bg-gray-100 p-4"><img className="w-full" src={myImage} alt=""/></div>
            <div className="w-72 h-32 flex-none scroll-snap-align-start transition-transform duration-300 transform hover:translate-x-4 bg-gray-100 p-4"><img className="w-full" src={myImage} alt=""/></div>
            <div className="w-72 h-32 flex-none scroll-snap-align-start transition-transform duration-300 transform hover:translate-x-4 bg-gray-100 p-4"><img className="w-full" src={myImage} alt=""/></div>
            <div className="w-72 h-32 flex-none scroll-snap-align-start transition-transform duration-300 transform hover:translate-x-4 bg-gray-100 p-4"><img className="w-full" src={myImage} alt=""/></div>
            <div className="w-72 h-32 flex-none scroll-snap-align-start transition-transform duration-300 transform hover:translate-x-4 bg-gray-100 p-4"><img className="w-full" src={myImage} alt=""/></div>
            
        </div>
        </>
    )
}
export default Latest;