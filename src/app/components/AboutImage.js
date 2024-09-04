import Image from 'next/image';

const AboutImage = () => {
  return (
    <div className="relative about-image-container  my-8 w-full  h-96">
      <Image 
        src="/about.jpeg"
        alt="About Us" 
        layout="fill" // Use layout fill for better positioning with absolute
        objectFit="cover" // Ensure the image covers the container
        priority // Prioritize loading
        className="rounded-sm border-1 border-black shadow-2xl " // Optionally round the image corners
      />

      {/* Text overlay */}
      <div className="absolute left-6 bottom-10 w-full flex ">
        <h2 className="text-white  font-bold text-2xl lg:text-4xl px-4 bg-opacity-50">
          About Us
        </h2>
      </div>
    </div>
  );
};

export default AboutImage;
