
import Navbar from "../pages/Home/Navbar";
import Policy from "./About/Policy";
import Footer from "./Home/Footer";
import Mission from "./About/Mission";
import Chat from "./Home/Chat";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar at top */}
      <Navbar />
     
     <Mission/>
     <Policy/>
      <Footer/>
        <Chat/>
    </div>
  );
}
