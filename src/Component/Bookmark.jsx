
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
const Bookmark = ({bookmark,removefun}) => {
   const {playerId,name,image,battingType,bowlingType,biddingPrice}=bookmark
    return (
        <div className="w-[1200px]">
            <div className="flex justify-between items-center gap-4 my-2 h-[100px] border-2 rounded-lg">
               <img src={image} alt="" className="w-[100px] h-[100%]"/>
              <div className="flex gap-10">
               <h1>Name:{name}</h1>
               <p>battingType:{battingType}</p>
               <p>bowlingType:{bowlingType}</p> 
                </div>
               <button onClick={()=>removefun(playerId,biddingPrice)} className="text-4xl me-3 btn">
               <MdDelete />
               </button>
            </div>
            
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired,
    removefun:PropTypes.func.isRequired
}
export default Bookmark;