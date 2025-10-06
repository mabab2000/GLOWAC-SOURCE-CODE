
import Navbar from "../pages/Home/Navbar";
import Footer from "./Home/Footer";
import Contact from "./Contact/Contact";
import Location from "./Contact/OurLocation";
import Chat from "./Home/Chat";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar at top */}
      <Navbar />

     
        <Contact/>
         <Location/>
        <Footer/>
        <Chat/>
    </div>
  );
}
