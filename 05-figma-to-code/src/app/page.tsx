

import Image from 'next/image';

const imgIphoneImage = "/Iphone.png"; 

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#211c24] flex justify-center items-center py-16 md:py-0">
      {/* Main container for the hero section */}
        <div className="container max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-2 px-4 md:px-8 lg:px-20">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left md:w-1/2">
            <div className="flex flex-col gap-4 text-white">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-40 text-lg md:text-xl">
                Pro.Beyond.
              </p>
              {/* Responsive font size for the main title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-wide">
                <span>IPhone 14</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">Pro</span>
              </h1>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal text-[#909090] text-base md:text-lg max-w-md">
              Created to change everything for the better. For everyone
            </p>
            {/* Button with hover effect */}
            <button className="border border-solid border-white rounded-md px-8 sm:px-14 py-4 text-white font-medium transition-colors duration-300 hover:bg-white hover:text-[#211c24]">
                Shop Now
            </button>
          </div>

          {/* Image Content - Using Next.js Image for optimization */}
          <div className="relative w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-1/2 md:h-[600px] lg-w-[600px] lg:h-[430px]">
            <Image 
              src={imgIphoneImage} 
              alt="iPhone 14 Pro"
              fill
              style={{ objectFit: 'contain' }}
              priority // Prioritize loading this image as it's above the fold
            />
          </div>
        </div>
      
      

      </main>
      
    </>
  );
}