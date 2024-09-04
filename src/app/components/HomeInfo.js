import React from 'react';
import { TbMedicineSyrup } from "react-icons/tb";
import { FaMedal } from "react-icons/fa6";
import { TbFileDescription } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";

const HomeInfo = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* First Column - Big Text */}
                    <div className="flex items-center justify-center">
                        <p className="text-3xl font-semibold text-center px-5">
                            With more than <span className="text-green-500">25+</span> products for <span className="text-green-500">2000+</span> Employees
                        </p>
                    </div>

                    {/* Second Column - Hospital Info */}
                    <div className="flex flex-col space-y-6">
                        <div>
                        <TbMedicineSyrup size={53}/>
                            <h3 className="text-xl font-bold mb-4">Our Journey</h3>
                            <p className="text-gray-700">
                                Our hospital is equipped with state-of-the-art facilities and staffed by experienced professionals. We provide a wide range of medical services to ensure the well-being of our community.
                            </p>
                        </div>

                        <div>
                        <GiMedicines size={50}/>
                            <h3 className="text-xl font-bold mb-4">Beyond Medicines</h3>
                            <p className="text-gray-700">
                            Beyond medicine, we are committed to enhancing overall wellness. Our focus is on holistic care, offering resources and support to help you achieve a balanced and healthy lifestyle. We believe in nurturing both body and mind for a better quality of life.
                            </p>
                        </div>
                    </div>

                    {/* Third Column - Clinic Info */}
                    <div className="flex flex-col space-y-6">
                        <div>
                        <FaMedal size={50}/>
                            <h3 className="text-xl font-bold mb-4">Our Quality</h3>
                            <p className="text-gray-700">
                            Our medicine is sourced from trusted manufacturers, ensuring top quality. Each product undergoes rigorous testing to guarantee safety, efficacy, and purity. You can trust us for reliable and effective pharmaceuticals
                            </p>
                        </div>

                        <div>
                        <TbFileDescription size={50} />
                            <h3 className="text-xl font-bold mb-4">Description</h3>
                            <p className="text-gray-700">
                                Our clinic offers personalized healthcare with a focus on preventive medicine. We are committed to providing quality care and building lasting relationships with our patients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;
