import AboutComp2 from "../components/AboutComp2";
import AboutXYZ from "../components/AboutComponent";
//import AboutFounders from "../components/AboutFounders";
import AboutImage from "../components/AboutImage";
import AboutTeam from "../components/AboutTeam";
import VisionSection from "../components/AboutVision1";
import VisionSection2 from "../components/AboutVision2";
import IconColumns from "../components/IconColumns";
import AboutFounder from "../components/AboutFounder";
//import { AboutCardData1 } from "../constants/appdata";

const AboutUs=()=>{
    return(
        <div className="px-2">
            <AboutImage/>
            <AboutXYZ/>
            <AboutComp2/>
            <IconColumns/>
            <VisionSection/>
            <VisionSection2/>
            <AboutTeam/>
            <AboutFounder/>
          
        </div>
    )
};
export default AboutUs;