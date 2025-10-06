import { useLocation } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg";
import serviceIcon from "../../assets/service.png";

export default function Banner() {
  const location = useLocation();

  // Extract 'name' from query params
  const params = new URLSearchParams(location.search);
  const serviceName = params.get("name") || "Company Quality Policy";

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-10 mt-10">
      {/* Banner Image */}
      <div className="relative w-full lg:w-4/5">
        <div
          className="w-full h-[150px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
            filter: "blur(0px)",
          }}
        ></div>
      </div>

      {/* Container below banner */}
      <div className="flex justify-center items-start mt-8 w-full">
        <div className="container p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl">
          {/* ✅ Dynamic Title from URL */}
          <h1 className="text-[#0d9488] text-3xl font-bold mb-6 text-center capitalize">
            {serviceName}
          </h1>

          <p className="text-lg text-gray-700 mb-6 text-center">
            Our company is committed to delivering exceptional quality in every
            project we undertake. We believe in continuous improvement, meeting
            customer expectations, and adhering to the highest standards of
            excellence. Our quality policy is the foundation of our mission and
            guides our operations daily.
          </p>

          <ul className="space-y-4 text-gray-700">
            {[
              "Deliver services that meet or exceed customer expectations.",
              "Continuously improve our processes, products, and services.",
              "Ensure compliance with all applicable regulations and standards.",
              "Promote a culture of quality and accountability within the team.",
              "Maintain transparent communication with clients and stakeholders.",
              "Invest in employee training and development for quality excellence.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <img
                  src={serviceIcon}
                  alt="service icon"
                  className="w-12 h-12 mt-1"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
