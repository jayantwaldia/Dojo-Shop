import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="text-white w-[100%] h-screen font-bold font-sgRegular">
      <div className="top-0 left-0 w-[100%] h-[100%] bg-heroMobi md:bg-hero bg-cover bg-no-repeat md:pl-10">
        <div className="absolute w-[100%] top-0 mt-[400px] md:ml-10 m-5 text-left flex flex-col gap-8 items-start justify-center">
          <Link to="/collections">
            <button className="bg-transparent tracking-wider hover:bg-black text-white-900 font-bold hover:text-white py-4 px-6 border-[2px] border-white-500 hover:border-transparent rounded-3xl text-l md:text-xl">
              New Collection
            </button>
          </Link>

          <p className="text-2xl md:text-4xl sm:text-2xl p-2 font-light tracking-widest leading-10 font-optivenus">
            <span className="text-[gray]">GET</span> 30% OFF
            <br></br>
            <br></br>
            <span className="text-[gray]">USE CODE: </span>DOJO30
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
