const AboutGlowac = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-20 bg-[#f0f4f8] px-4 sm:px-6"> {/* Added padding for small screens */}
      <h1 className="text-4xl text-[#0d9488] font-bold mb-8 text-center">About Glowac</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Responsive grid layout */}
        <div className="flex flex-col justify-between">
          <h2 className="text-lg text-[#0d9488] font-bold mb-4">Geotechnical and Concrete Services</h2>
          <p className="text-black text-lg text-justify  mb-4">
            GLOWAC Laboratory provides laboratory testing of soil, rock, concrete, and other materials for site
            characterization, geotechnical design, quality control, and performance assessment purposes.
            Geotechnical investigations are performed to obtain information on the physical properties of soil,
            earthworks, and foundations for proposed structures.
          </p>
          <p className="mt-4 text-green-700 text-lg text-justify">
            Our goal is to provide our clients with fast turnaround and accurate test results. Output from
            laboratory tests is individually reviewed by geotechnical engineering staff.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <table className="min-w-full bg-[#0d9488] border border-gray-300 text-white text-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-lg font-semibold">Day</th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-lg font-semibold">Working Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Monday</td>
                <td className="py-2 px-4 border-b border-gray-300">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Tuesday</td>
                <td className="py-2 px-4 border-b border-gray-300">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Wednesday</td>
                <td className="py-2 px-4 border-b border-gray-300">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Thursday</td>
                <td className="py-2 px-4 border-b border-gray-300">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Friday</td>
                <td className="py-2 px-4 border-b border-gray-300">9 AM - 5 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Saturday</td>
                <td className="py-2 px-4 border-b border-gray-300">Closed</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Sunday</td>
                <td className="py-2 px-4 border-b border-gray-300">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl text-[#0d9488] font-bold mb-4">Background</h2>
        <p className='text-justify text-black text-lg'>
          GLOWAC Laboratory provides laboratory testing of soil, rock, concrete, and other materials for site
          characterization, geotechnical design, quality control, and performance assessment purposes.
          Geotechnical investigations are performed to obtain information on the physical properties of soil,
          earthworks, and foundations for proposed structures. Our goal is to provide our clients with fast
          turnaround and accurate test results. Output from laboratory tests is individually reviewed by
          geotechnical engineering staff.
        </p>
      </div>
    </div>
  );
};

export default AboutGlowac;
