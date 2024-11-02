
import PropTypes from "prop-types";
const Banner =({getcoin}) => {
  
    return (
        <div className="w-[90%] h-[500px] mx-auto border-2 bg-bannerImage bg-black">
            <div className="w-[50%] mx-auto my-4"><img src="./banner-main.png" alt=""  className="w-[50%] mx-auto"/></div>
            <p className="text-center text-white my-2 text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</p>
             <p className="text-gray-300 text-center text-2xl mb-2">Beyond Boundaries Beyond Limits</p>
           <div className="w-[180px] h-[50px] border-2 border-yellow-300 rounded-lg mx-auto">
           <button onClick={()=>getcoin(4000000)} className="w-[100%] h-[100%] bg-[#E7FE29] border-4 border-black rounded-lg">Claim Free Credit</button>
           </div>
        </div>
    );
};
Banner.propTypes={
    getcoin:PropTypes.number.isRequired,
    
 }
export default Banner;