import { useState, useEffect } from "react";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.jpg";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.jpg";
import image5 from "../../assets/gallery/image5.jpg";
import image6 from "../../assets/gallery/image6.jpg";

export default function Gallery() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [startIndex, setStartIndex] = useState(0);

  // Auto-slide one image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Get the 3 visible images (wrap around)
  const visibleImages = [
    images[startIndex % images.length],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-[#0d9488] mb-8 text-center">
        Our Laboratory Gallery
      </h2>

      {/* Gallery Container */}
      <div className="w-4/5 mx-auto overflow-hidden">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-700 ease-in-out">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={img}
                alt={`Laboratory ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
