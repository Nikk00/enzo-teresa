import Image from 'next/image'
import { useState , useEffect, useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
const featuredImages = ['/images/carusel-1.jpeg', '/images/carusel-2.jpeg', '/images/carusel-3.jpeg', '/images/carusel-4.jpeg', '/images/carusel-5.jpeg', '/images/carusel-6.jpeg'];
let count = 0;
export default function Carousel(){
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
    console.log(featuredImages.length)
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    //slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    //slideRef.current.classList.add("fade-anim");
  };
  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 4000);
  };
  const removeAnimation = () => {
    //slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    startSlider();
    //slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);
  
return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full lg:w-1/2 lg:h-1/2 md:w-3/4 md:h-3/4 sm:w-3/4 sm:h-3/4 relative select-none">
        <Image src={featuredImages[currentIndex]} className={`rounded-xl`} alt="" width={1800} height={1200}/>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
            <AiFillCaretLeft size={36}/>
          </button>
          <button onClick={handleOnNextClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
            <AiFillCaretRight size={36}/>
          </button>
        </div>
      </div>
    </div>
  );
}


