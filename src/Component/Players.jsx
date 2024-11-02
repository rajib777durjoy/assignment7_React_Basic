
import { BsPersonFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Players = ({crickterData,ChoosePlayer}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=crickterData;

    return(<>
       
         <div className='w-[100%] min-h-[450px] border-2 rounded-lg'>
            <div className='w-[90%] mx-auto h-[250px]  mt-4'><img src={image} alt="" className='w-[100%] h-[100%] rounded-lg'/></div>

            <div className='w-[90%] mx-auto my-2'>

            <li className='flex my-2 items-center gap-2'><span className='text-2xl border-2 rounded-full flex w-[30px] h-[30px] items-center justify-center'><BsPersonFill /></span>{name}</li>

            <div className='flex justify-between w-[100%] '>
            <li className='flex items-center gap-2 text-xl'><FaFlag />{country}</li>
            <button className='text-xl'>{role}</button>
            </div>
             <hr />
            <li className='list-none'>Rating</li>
            <li className='flex justify-between items-center my-2'>
                <span>{battingType}</span>
                <span>{bowlingType}</span>
            </li>
            <li className='list-none flex justify-between items-center'>
                <h2>Price:${biddingPrice}</h2>
                <button onClick={()=>ChoosePlayer(crickterData,biddingPrice)} className='btn border-2 px-1 rounded-md hover:bg-[#E7FE29]'>Choose Player</button>
            </li>
          </div>
        </div>
 
        </>
    );
};

Players.propTypes={
    crickterData:PropTypes.object.isRequired,
    ChoosePlayer:PropTypes.func.isRequired,
      
}
export default Players;