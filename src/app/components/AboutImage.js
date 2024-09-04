import Image from 'next/image';


const AboutImage = () => {
  return (
    <div className="about-image-container mx-auto my-8">
      <Image 
        src="/about.jpeg"
        alt="About Us" 
        width={377} // Replace with your desired width
        height={1200} // Replace with your desired height
        layout="responsive" // Use responsive layout for better scaling
        priority // Use this if the image is important and should load quickly
      />
    </div>
  );
};

export default AboutImage;
