
import Bookmark from "./Component/Bookmark";
import PropTypes from "prop-types";

const Selected=({getPlayer,removefun,addMorePlayer}) => {
  
    return (
        <div >
           {
            getPlayer.map((b,i)=><Bookmark key={i} bookmark={b} removefun={removefun}></Bookmark>)
           }
           <div>
            <button onClick={()=>addMorePlayer(true)} className="btn border-2 w-[150px] h-[35px] rounded-lg hover:bg-[#E7FE29]">Add more player</button>
           </div>
        </div>
    );
};
Selected.propTypes={
    getPlayer:PropTypes.array.isRequired,
    removefun:PropTypes.func.isRequired
}

export default Selected;