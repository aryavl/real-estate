// const images =["https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg","https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D","https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg","https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"]

// import  { useState, useEffect, useCallback } from 'react';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   },[]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 2000); 

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentIndex, nextSlide]);

//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         <div className="flex">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`w-full transition-transform duration-500 transform ${
//                 index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//               }`}
//             >
//               <img src={image} alt={`Image ${index + 1}`} className="block w-full" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={prevSlide}>
//         Previous
//       </button>
//       <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={nextSlide}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import  { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
    const images =["https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg","https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D","https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg","https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"]
  const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

  const nextSlide =useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  },[images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full transition-transform duration-500 transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <img src={image} alt={`Image ${index + 1}`} className="block w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full bg-gray-500 mx-1 ${
              index === currentIndex ? 'bg-gray-800' : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

