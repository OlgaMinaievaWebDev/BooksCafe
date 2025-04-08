function Footer() {
 return (
  <footer className="bg-gray-800 text-white text-center py-4">
   <div className="flex justify-center space-x-4 mt-2">
    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
    <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
   <p className="text-sm">Created by Your Name</p>
    <a href="#" className="text-gray-400 hover:text-white">Careers</a>
    <a href="#" className="text-gray-400 hover:text-white">About Us</a>

   </div>
   <p className="text-sm">© {} Book Store. All rights reserved.</p>
   <div className="flex justify-center space-x-4 mt-2">
    <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
    <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
   </div>
 
  </footer>
 )
}

export default Footer
