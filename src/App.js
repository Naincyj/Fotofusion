
import logoimg from './logo.png';
import React, { useState } from 'react';
import splitcross from './split-cross.png'
import './App.css';


function App() {


  const [loading, setLoading] = useState(false);

  const handleGenerateClick = () => {
    setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(true);
  };

  return (
    <div className=" h-[100%] w-[100%] flex flex-col  bg-[#0e0615]">
      <div className=' flex justify-between px-[2vw] md:items-center md:justify-center md:gap-[8vw] text-white  pt-5'>
        <div className='flex items-center justify-center'>
          <img className='h-[5vmin]' src={logoimg} alt="" />
          <div className='font-extrabold text-[3vw]'>FotoFusion</div>
        </div>

        <div className=' hidden md:flex md:gap-[3vw] text-[#3e4456] font-semibold items-center '>
          <div className='text-white font-bold hover:cursor-pointer'>Home</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Generate</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Gallery</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Pricing</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>About Us</div>
        </div>
        <div className='navbar hidden font-semibold  md:flex md:gap-[3vw] items-center'>
          <div>Log in</div>
          <div className='signup'>
            <div className='px-[1.5vw] py-[0.5vw] hover:cursor-pointer'>Signup</div>
          </div>
        </div>
        <div className=' md:hidden block items-center justify-center cursor-pointer bg-transparent'>
          
        <div className="">
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen && (
          <ion-icon class="icon" name="menu" onClick={toggleMenu}></ion-icon>
          
          
        ) 
            
            
        }
      </button>

      {!isOpen && (
        <div className='sidebar'>
          <div className='flex justify-end pt-5 px-[2vw]'>
          <ion-icon class="icon" name="close" onClick={closeMenu}></ion-icon>
          </div>
         <div className='flex flex-col gap-[3vw] text-[#3e4456] font-semibold mt-[8vw]'>
          <div className='text-white font-bold hover:cursor-pointer'>Home</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Generate</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Gallery</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>Pricing</div>
          <div className='hover:cursor-pointer hover:font-bold hover:text-white hover:transform hover:scale-108 transition-all duration-300'>About Us</div>
        </div>
        <div className=' font-semibold flex flex-col gap-[3vw] mt-[3vw]'>
          <div>Log in</div>
          <div className='signup w-fit'>
            <div className='px-[1.5vw] py-[0.5vw] hover:cursor-pointer'>Signup</div>
          </div>
        </div>
        </div>
      )}
    </div>
        </div>

      </div>


      <div className='flex flex-col items-center justify-center text-center pt-[3.5rem]'>
        <div className='flex items-center justify-center'>
          <div className='signup'>
            <div className='px-4 py-2 inline-block font-semibold text-white'>AI Image Generator</div>
          </div>
        </div>
        <div>


          <div className='font-bold text-white text-[4vw] pt-[1.8rem] '>
            Create&nbsp;
            <span className='fotofusion inline'>Image</span>&nbsp;with AI-Powered&nbsp;<span className='fotofusion w-[100%] inline-block'>FotoFusion</span>
          </div>


          <div className='text-[#7a9499] flex flex-wrap items-center justify-center'>Revolutionize your design process with our AI image generator. Say goodbye to stock photos and <span className='w-[100%] inline-block'>hello to endless possibilities.</span></div>
        </div>
        <div className='bg-[#22102a] w-[40%] flex  md:justify-between p-[0.5rem] rounded-2xl mt-[7rem] shadow-[#2b2430] shadow'>
          <input className='bg-[#22102a] caret text-[3vmin]  pl-[1rem] text-white placeholder-white w-full focus:outline-none' type="text" placeholder='Enter your idea . . .'></input>
          <button onClick={handleGenerateClick} className='hidden md:block h-[3rem] w-[8rem]  font-medium rounded-lg text-white bg-gradient-to-r from-[#d319fa] to-[#ea00a3]'>Generate</button>
        </div>
        <button onClick={handleGenerateClick} className='md:hidden h-[8vmin] w-[16vmin] mt-[2rem] text-[3vw] font-medium rounded-lg text-white bg-gradient-to-r from-[#d319fa] to-[#ea00a3]'>Generate</button>
        
        {loading && <div className="text-[8vw] font-normal text-black mt-28">LOADING...</div>}

      </div>

      <div className='flex flex-col items-center justify-center text-center mt-[16rem]'>
        <div className='flex items-center justify-center'>
          <div className='signup'>
            <div className='px-4 py-2 inline-block font-semibold text-white'>Features</div>
          </div>
        </div>
        <div>


          <div className='font-bold text-white text-[4vw] pt-[1.8rem] '>
            Explore the&nbsp;
            <span className='fotofusion inline'>features</span>&nbsp;of out <span className='w-[100%] inline-block'>AI-Powered&nbsp;<span className='fotofusion'>FotoFusion</span></span>
          </div>


          <div className='text-[#7a9499] flex flex-wrap items-center justify-center'>Unlease the full potential of your creativity as you explore the capabilities of FotoFusion</div>
        </div>

      </div>
      <div className='flex flex-wrap items-center justify-center mt-10 mb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  place-content-center w-[70%] ' >

          <div className='flex flex-col items-center justify-center text-center gap-8 p-8   shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>
          <div className='flex flex-col items-center justify-center text-center gap-8 p-8   shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>
          <div className='flex flex-col items-center justify-center text-center gap-8 p-8   shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>
          <div className='flex flex-col items-center justify-center text-center gap-8 p-8   shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>
          <div className='flex flex-col items-center justify-center text-center gap-8 p-8   shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>
          <div className='flex flex-col items-center justify-center text-center gap-8 p-8  shadow-[#2b2430] shadow rounded-2xl bg-[#22102a]'>
            <div className='w-10 h-10'>
              <img src={splitcross} alt="" />
            </div>
            <div className='text-white font-bold text-2xl'> AI-Enhanced imagery</div>
            <div className='text-[#3e4456]'>Our ai enhanced imaginary algorithm to generate high quality image</div>
          </div>

        </div>

      </div>



    </div>
  );
}

export default App;
