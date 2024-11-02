
import './App.css'
import Header from './Component/Header'
import Banner from './Component/Banner'
import Players from './Component/Players'
import Selected from './Selected'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState,useEffect } from 'react'

function App() {
  const [datas,setdatas]=useState([])

    useEffect(()=>{
    fetch('./FakeJson.json')
    .then(res=>res.json())
    .then(data=> setdatas(data))
   },[])
   
   const [coin,setcoin]=useState(0)
   const getcoin=(value)=>{
     setcoin(value+coin)
     toast.success(`You Get Free ${value} Coin`)
   }
   
   const [toggleBtn,setToggleBtn]=useState(true)
   const [strs,setstr]=useState("")
   const toggleSection=(event,str)=>{
       setToggleBtn(event)
       setstr(str)
   }
   const [getPlayer,setPlayer]=useState([])

   const ChoosePlayer=(player,price)=>{
     const findcheck=getPlayer.find(pro=>pro.playerId === player.playerId)
     if(findcheck ){
      toast.error("Player already Selected!")
     }
     else if(getPlayer.length<6) {
      const newArr =[...getPlayer,player];
      setPlayer(newArr)
      toast.success(`${player.name} is selected`)
     }
     else{
      toast.warn("Player Selected Off")
     }
     setcoin(coin-price)
   }
   
   const removefun=(id,biddingPrice)=>{
    let chacking=getPlayer.filter(bookmark=>bookmark.playerId !==id);
     setPlayer(chacking)
     setcoin(coin+biddingPrice)
     toast.warn(`Player removed`)
   }
   const addMorePlayer=(boolen)=>{
    setToggleBtn(boolen)
   }
  return (
    <>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <div className='max-w-[100%]'>
     <Header coin={coin}></Header>
     <Banner getcoin={getcoin}></Banner>
    </div>
     
    <section className='max-w-[100%] min-h-[500px] my-2'>
       <div className='w-[90%] mx-auto border-2 h-[70px] flex justify-between items-center'>
         <h1>{strs==="Selected Players"?`Selected Players${getPlayer.length}/${6}`:"Available Players"}</h1>
         <div className='btn flex justify-between rounded-lg border-2 h-[50px] leading-[50px]'>
          <button onClick={()=>toggleSection(true,"Available Players")} className={`${toggleBtn?"btn bg-yellow-300 rounded-lg px-1 w-[130px]":"btn rounded-lg px-1 w-[130px]"}`}>Available</button>
          <button onClick={()=>toggleSection(false,"Selected Players")} className={`${!toggleBtn?"btn px-1 rounded-lg bg-yellow-300 w-[130px]":"btn px-1 rounded-lg w-[130px]"}`}>Selected({getPlayer.length<=6?getPlayer.length:`${0}`})</button>
         </div>
       </div>
      <div className='w-[90%] mx-auto grid grid-cols-3 gap-2 border-0 mt-2'>
      {
      toggleBtn?datas.map((crickter,ind)=><Players key={ind} crickterData={crickter} ChoosePlayer={ChoosePlayer}></Players>):<Selected getPlayer={getPlayer} removefun={removefun} addMorePlayer={addMorePlayer}></Selected>
     }
      </div>
    </section>
     <section className='w-[100%] h-[300px] relative'>
        <div className='w-[90%] mx-auto left-0 right-0 h-[350px] border-0 rounded-xl absolute top-24 bg-[#ffffffad]'>
          <div className='w-[95%] h-[300px] mx-auto rounded-xl bg-gradient-to-r from-slate-100 to-yellow-100  absolute top-4 left-0 right-0'>
            <p className='text-center text-4xl mt-10 font-bold'>Subscribe to our Newsletter</p>
            <p className='text-center text-xl font-medium my-2'>Get the latest updates and news right in your inbox!</p>
            <div className='w-[50%] mx-auto'>
            <input className='w-[70%] h-[50px] rounded-xl mx-1 border-2 px-3' type="email" placeholder='Enter your email'/>
            <button className='btn w-[25%] h-[50px] rounded-xl border-2 bg-gradient-to-r from-yellow-300 to-pink-300 '>Subscribe</button> 
            </div>
         </div>
         </div>
     </section>
     <footer className='w-[100%] h-[600px] border-2 bg-blue-950'>
         <div className='w-[50%] mx-auto mt-48'><img src="./logo-footer.png" alt="" className='w-[20%] mx-auto'/></div>
         <div className='w-[90%] mx-auto grid grid-cols-3 gap-4 mt-5 '>
            <div className='w-[300px]'>
               <li className='text-white text-xl list-none '>About Us</li>
               <p className='text-gray-400 my-3'>We are a passionale team <br/>
               dedicated to providingthe best <br />services to our customers.
               </p>
            </div>
            <div className='w-[300px]'>
               <li className='text-white text-xl list-none '>Quick Links</li>
               <li className='text-gray-400 my-1'>Home</li>
               <li className='text-gray-400 my-1'>Services</li>
               <li className='text-gray-400 my-1'>About</li>
               <li className='text-gray-400 my-1'>Contact</li>
            </div>
            <div className='w-[300px]'>
               <li className='text-white text-xl list-none'>Subscribe</li>
                <p className='text-gray-400 my-3'>Subscribe to our newsletter for the latest updates</p> 
                <div className='flex w-[100%]  h-[35px]'>
                  <input type="text" placeholder='Enter your email' className='w-[65%] h-[100%]border-2 rounded-l-lg text-gray-200 text-sm px-2 '/>
                  <button className='btn w-[35%] h-[100%] font-bold bg-gradient-to-r from-yellow-500 to-pink-300  border-0  rounded-r-lg'>Subscribe</button>
                </div>     
            </div>
         </div>
         <hr />
         <p className='text-center text-gray-500 mt-10'>@2024 Your Company All Rights Reserved.</p>
     </footer>
    </>
  )
}


export default App
