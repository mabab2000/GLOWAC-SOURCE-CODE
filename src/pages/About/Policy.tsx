import serviceIcon from "../../assets/service.png"; // adjust path if needed

export default function QualityPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="container p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-[#0d9488] text-3xl font-bold mb-6 text-center">
          Company Quality Policy
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
              <img src={serviceIcon} alt="service icon" className="w-12 h-12 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
