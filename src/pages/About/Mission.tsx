export default function Timeline() {
  return (
    <div className="flex justify-center mt-20 items-center min-h-screen bg-gray-50">
      <div className="container p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-[#0d9488] text-3xl font-bold mb-6 text-center">
          Our Mission
        </h1>

        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
          
          {/* Stage 1 */}
          <li className="relative -ms-1.5 flex items-start gap-4">
            <span className="size-3 shrink-0 rounded-full bg-blue-600 w-3 h-3 mt-2"></span>

            <div className="-mt-2">
              <time className="text-xs font-medium text-gray-700">01/01/2025</time>

              <h3 className="text-lg font-bold text-gray-900">Project Initiation</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Establish our geotechnical laboratory for soil testing, foundation analysis, and material characterization. This step ensures a solid base for quality engineering services.
              </p>
            </div>
          </li>

          {/* Stage 2 */}
          <li className="relative -ms-1.5 flex items-start gap-4">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <time className="text-xs font-medium text-gray-700">15/03/2025</time>

              <h3 className="text-lg font-bold text-gray-900">Laboratory Setup & Accreditation</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Install advanced testing equipment for soil, concrete, and aggregate analysis. Obtain necessary accreditations to guarantee reliable and internationally recognized results.
              </p>
            </div>
          </li>

          {/* Stage 3 */}
          <li className="relative -ms-1.5 flex items-start gap-4">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <time className="text-xs font-medium text-gray-700">24/04/2025</time>

              <h3 className="text-lg font-bold text-gray-900">Operational Excellence</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Begin full-scale geotechnical investigations and testing for civil projects, ensuring every result meets the highest quality standards for safety and sustainability.
              </p>
            </div>
          </li>

        </ol>
      </div>
    </div>
  );
}
