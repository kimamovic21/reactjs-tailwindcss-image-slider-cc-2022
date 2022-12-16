import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  console.log(slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">

        <h1 className="text-5xl font-bold text-center mb-4">ReactJS Image Slider</h1>

        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

          {/* Left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] left-5 bg-black/60 text-[#f5f5f5] rounded-2xl text-4xl cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={40}/>
          </div>

          {/* Right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] right-5 bg-black/60 text-[#f5f5f5] rounded-2xl text-4xl cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={40}/>
          </div>
        </div>

        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick= {() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                <RxDotFilled />
              </div>
            ))}
        </div>

    </div>
  );
};

export default App;
