
import Navbar from "../pages/Home/Navbar";
import Service from "./Service/OurService";
import Footer from "./Home/Footer";
import Gallery from "./Service/Gallery";
import Chat from "./Home/Chat";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar at top */}
      <Navbar />

     
        <Service/>
       <Gallery/>
        <Footer/>
        <Chat/>
    </div>
  );
}
