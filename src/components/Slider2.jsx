import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the Autoplay module

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import UserContext from './UserContext';

export default function Slider2() {

  const {color}=useContext(UserContext);
  return (
    <div className={`p-3  ${ color ? "bg-[#353b48] text-white" :"bg-[#ced6e0]"}`}>
        <h1 className='text-3xl font-semibold mb-2'>Trending Now..</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000, // Set the autoplay delay in milliseconds (e.g., 3000 for 3 seconds)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay in the modules array
        className="mySwiper"
      >




<SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>



        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>


        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>


        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>


        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>


        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>

        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>


        
        <SwiperSlide>
            <div className="relative bg-[url('https://images.news18.com/ibnlive/uploads/2023/09/manoj-jarange-patil-maratha-jalna-2-16939002853x2.jpg?impolicy=website&width=510&height=356')] p-32 bg-cover text-black overflow-hidden" >   
<h1 className='text-black text-lg font-semibold absolute bottom-2 left-3 w-full'>मनोज जरांगे पाटील यांची मोठी घोषणा, “आज मुंबईतल्या आझाद...</h1>
             </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
