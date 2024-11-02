


import { TbCoinFilled } from "react-icons/tb";
import PropTypes from "prop-types";

const Header=({coin}) => {
    return (
          <nav className='w-[90%]  mx-auto flex justify-between z-40 h-[70px]  my-4'>
             <div className='w-[30%] h-[50px]'>
                <img src="./logo.png" className='w-[100px] h-[100%]  object-fill' alt=""  />
             </div>
            <ul className='flex justify-end gap-4 w-[60%] '>
              <li className='w-[100px] h-[50px] text-center leading-[50px]  text-gray-500  '>Home</li>
              <li className='w-[100px] h-[50px] text-center leading-[50px] text-gray-500 '>Fixture</li>
              <li className='w-[100px] h-[50px] text-center leading-[50px] text-gray-500 '>Teams</li>
              <li className='w-[100px] h-[50px] text-center leading-[50px] text-gray-500 '>Schedules</li>
            </ul>
            <button className='btn border rounded-lg h-[50px] flex justify-center text-xl font-medium items-center px-1'>{coin}<span className='text-yellow-400'><TbCoinFilled /></span></button>
         </nav>
      
    );
};
Header.propTypes={
   coin:PropTypes.number.isRequired,
   
}
export default Header;