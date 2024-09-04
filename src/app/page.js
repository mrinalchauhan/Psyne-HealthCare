// main home page
"use client";

import HomeInfo from "./components/HomeInfo";
import HomeProduct from "./components/HomeProduct";
import Events from "./components/Events";
import FullScreenVideo from "./components/FrontVedio";
import HomeAbout from "./components/HomeAbout";
import HomeReview from "./components/HomeReveiw";
import HomeExpert from "./components/HomeExpextsSection";
//import Marquee from "@/components/magicui/marquee";
export default function Home() {
  return (
    <>
    <div className="bg-white ">
      <FullScreenVideo/>
       <HomeAbout/>
       <HomeInfo/>
       <HomeProduct/>
       <HomeReview/>
       <HomeExpert/>
       <Events/>

     </div>
    </>
  );
}
