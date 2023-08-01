function Footer(){
    return (
        <>
         <footer className=" bg-gray-900 text-white">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-2">
                <div>
                    <h3 className="text-lg font-bold mb-4">Company</h3>
                    <ul className="space-y-2">
                    <li><a href="index" className="text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Contact Us</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Categories</h3>
                    <ul className="space-y-2">
                    <li><a href="index" className="text-gray-300 hover:text-white">Electronics</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Home &amp; Furniture</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Beauty</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                    <li><a href="index" className="text-gray-300 hover:text-white">FAQ</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Shipping &amp; Delivery</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Returns</a></li>
                    <li><a href="index" className="text-gray-300 hover:text-white">Track Order</a></li>
                    </ul>
                </div>
                </div>
                <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">&copy; 2023 Your eCommerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;