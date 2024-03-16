import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/free-photo/beautiful-landscape-with-clear-sky_23-2149721820.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710547200&semt=ais",
    "https://img.freepik.com/free-photo/land-plot-with-nature-landscape-location-pin_23-2149937913.jpg",
    "https://tiger-shree.com/wp-content/uploads/2022/11/istockphoto-1205274326-612x612-1.jpg",
  ];
  
  const [currentImage, setCurrentImage] = useState<number>(0);
  const autoSlde:boolean = true;
  const autoSlideInterval:number = 3000
  const prev = useCallback(() => {
    setCurrentImage(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrentImage(curr => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);
useEffect(()=>{
if(!autoSlde) return
const slideInterval = setInterval(next,autoSlideInterval)
return ()=> clearInterval(slideInterval)
},[autoSlde, autoSlideInterval, next])
  return (
    <div className='sm:w-[250px] sm:h-[150px] relative'>
      <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {slides.map((imgs, index) => (
            <img key={index} src={imgs} alt="" className='sm:w-[250px] sm:h-[150px] rounded-lg' />
          ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button onClick={prev} className='sm:p-[0.15rem] p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            <ChevronLeft />
          </button>
          <button onClick={next} className='z-10 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            <ChevronRight />
          </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i)=>(
                  <div className={` transition-all w-3 h-3 sm:w-2 sm:h-2 bg-white rounded-full ${currentImage === i ? "p-[0.45rem]":"bg-opacity-50"}`}>

                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
