import { PiBuildingLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri"
const IconColumns = () => {
  const icons = [
    { icon: <PiBuildingLight size={48} />, title: 'Manufacturing Unit' },
    { icon: <FaRegUser size={48} />, title: '1000+ Employees' },
    { icon: <RiMedicineBottleLine size={48} />, title: '20+ Products' },
  ];

  return (
    <div className="icon-columns-container p-8">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {icons.map((item, index) => (
          <div key={index} className="text-center">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconColumns;
