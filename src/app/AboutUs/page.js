import AboutComp2 from "../components/AboutComp2";
import AboutXYZ from "../components/AboutComponent";
import AboutImage from "../components/AboutImage";
import AboutTeam from "../components/AboutTeam";
import VisionSection from "../components/AboutVision1";
import VisionSection2 from "../components/AboutVision2";
import IconColumns from "../components/IconColumns";

const AboutUs=()=>{
    return(
        <div>
            <AboutImage/>
            <AboutXYZ/>
            <AboutComp2/>
            <IconColumns/>
            <VisionSection/>
            <VisionSection2/>
            <AboutTeam/>
        </div>
    )
};
export default AboutUs;