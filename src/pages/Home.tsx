
import Navbar from "../pages/Home/Navbar";
import Banner from "../pages/Home/Banner";
import Sec from "./Home/Sec";
import Footer from "./Home/Footer";
import Impact from "./Home/Impact";
import Chat from "./Home/Chat";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar at top */}
      <Navbar />

      {/* Banner section */}
      <Banner />
      <Sec/>
        <Impact/>
      <Footer/>
        <Chat/>
    </div>
  );
}
