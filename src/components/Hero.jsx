import heroImg from "../assets/heroImg.avif";
function Hero() {
 return (
  <section className="bg-gray-900 text-white py-20">
   <div className="flex justify-center">
    <img
     src={heroImg}
     alt="Hero Image"
     className="w-1/3 h-auto rounded-lg shadow-lg"
    />
    <div className="flex flex-col justify-center items-center ml-10">
     <h1 className="text-6xl font-bold text-center">Welcome to BooksCafe</h1>
     <p className="text-lg text-center mt-4 mb-10">
      Your one-stop destination for all your reading needs.
     </p>
   <button>Start Searching</button>
    </div>
    </div>
  </section>
 )
}

export default Hero
