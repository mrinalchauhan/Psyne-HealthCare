import Image from 'next/image';

const VisionSection1 = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">       
        {/* First Column */}      
        <div className="flex-1 bg-white border border-gray-400 shadow-2xl p-6 flex flex-col justify-between">
          <div>
          <h2 className="lg:text-4xl text-3xl text-center font-mono font-bold mb-4">Our Vision</h2>
           
            <p className='lg:text-2xl font-serif '>
              Our vision is to be a leader in providing innovative solutions that 
              drive progress and improve lives. We strive to create an environment 
              where creativity and excellence thrive, empowering individuals and 
              organizations to reach their full potential. Through our commitment 
              to quality and integrity, we aim to make a positive impact on the 
              world around us.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex-1 flex items-center justify-center relative">
          <Image 
            src="/about1.jpg"
            alt="Vision Image" 
            width={500} 
            height={300} 
            layout="responsive" 
            priority 
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection1;
