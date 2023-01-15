import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const dataList = [
   { id: 1, URL: "/img/slider_1.jpg", alt: "orange" },
   { id: 2, URL: "/img/slider_2.jpg", alt: "cupcake" }
 ];

function HeaderSwiper(props) {
   const path = process.env.PUBLIC_URL;
   return (
      <>
         <Swiper
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper"
            loop={true}
         >
            {dataList.map(item => 
               <SwiperSlide key={item.id}>
                  <img src={path + item.URL} alt={item.alt} />
               </SwiperSlide>
            )}
            
         </Swiper>
      </>
   );
}

export default HeaderSwiper;