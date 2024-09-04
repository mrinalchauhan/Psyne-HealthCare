import Image from 'next/image';

const AboutXYZ = () => {
  return (
    <div className="about-xyz-container p-8">
      <h2 className="md:text-4xl lg:text-5xl text-center font-bold mb-6 font-mono">About Pysne Group</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* First Column */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xl font-serif lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam sed sapien venenatis tincidunt. Sed ultricies eros ut turpis aliquam, a suscipit massa sollicitudin.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro cumque tempora animi, iste cupiditate libero et. Ullam, molestias quibusdam?
          </p>
          <p className="text-xl font-serif lg:text-2xl">
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
          </p>
          <p className="text-xl font-serif lg:text-2xl">
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
            Donec ac metus non elit fermentum fermentum. Maecenas eget nibh auctor, pharetra lacus non, convallis libero. Vestibulum suscipit facilisis erat, at interdum nisl venenatis a.
          </p>
        </div>
        {/* Second Column */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-lg font-serif lg:text-2xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien a risus condimentum porttitor.
          </p>
          <div className="mt-auto max-w-2xl mx-auto">
            <Image 
              src="/about2.jpeg"
              alt="Sample Image" 
              width={300} 
              height={300} 
              layout="responsive" 
              priority 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutXYZ;
