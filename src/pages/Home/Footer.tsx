const Footer = () => {
  return (
    <footer className="bg-[#0d9488] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-lg">
              <li>Geotechnical</li>
              <li>Concrete and Aggregate Testing</li>
              <li>Others</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-lg">
              <li>Glowac LTD</li>
              <li>info@glowac.rw</li>
              <li>+250 788 764 432</li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="/" className="hover:underline text-white">Home</a></li>
              <li><a href="#/about" className="hover:underline text-white">About Glowac</a></li>
              <li><a href="#/contact" className="hover:underline text-white">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <ul className="flex gap-6 ">
              {/* Facebook */}
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </li>

              {/* Twitter */}
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1 4.52 4.52 0 00-7.86 4.13A12.84 12.84 0 013 4.8a4.48 4.48 0 001.4 6.02 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.42 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.22 9.22 0 0023 3z" />
                  </svg>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()}. Glowac LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
