import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGraduationCap,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Coaching */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xl">
                <FaGraduationCap />
              </div>

              <h2 className="text-2xl font-black text-white">
                Smart Ambition
              </h2>

            </div>

            <p className="mt-5 text-gray-300 leading-7">
              Smart Ambition Classes provides quality education for
              Classes 6–10 with experienced teachers, weekly tests,
              doubt sessions, and excellent academic results.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                +91 9801006339
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-400" />
                +91 9801006339
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                patanahi@email.com
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1" />
                Sadanadpur Baisa Kahalgaon,<br />
                Bhagalpur, Bihar - 813222
              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a href="#home" className="text-gray-300 hover:text-yellow-400">
                Home
              </a>

              <a href="#about" className="text-gray-300 hover:text-yellow-400">
                About
              </a>

              <a href="#contact" className="text-gray-300 hover:text-yellow-400">
                Contact
              </a>

            </div>

          </div>

          {/* Website Creator */}

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Website Creator
            </h3>

            <div className="mt-5">

              <h4 className="text-2xl font-bold text-white">
                Yuvraj Kumar
              </h4>

              <p className="mt-3 text-gray-300">
                Full Stack Web Developer
              </p>

              <div className="mt-5 space-y-3 text-gray-300">

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-yellow-400" />
                  +91 6203199910
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400" />
                  yuvrajkr7911@gmail.com
                </div>

              </div>
{/* 
              <div className="flex gap-4 mt-6 text-2xl">

                <a href="#">
                  <FaGithub className="hover:text-yellow-400 duration-300" />
                </a>

                <a href="#">
                  <FaInstagram className="hover:text-pink-500 duration-300" />
                </a>

                <a href="#">
                  <FaLinkedin className="hover:text-blue-500 duration-300" />
                </a>

              </div> */}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Smart Ambition Classes. All Rights Reserved.
          </p>

          <p className="text-gray-400 flex items-center gap-2 text-center">
            Made with <FaHeart className="text-red-500" />
            by <span className="text-yellow-400 font-semibold">Yuvraj Kumar</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;