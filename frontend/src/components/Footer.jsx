import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-[30] mt-24 bg-black border-t border-gray-800">

      {/* TOP FADE SEPARATOR */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">
              Team Vinidra
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md">
              A women-driven hands-on space engineering initiative from
              MKSSS’s Cummins College of Engineering for Women, Pune.
              Building satellites and empowering future aerospace leaders.
            </p>

            <div className="flex gap-5 mt-6">
              <a
                href="mailto:satellite@cumminscollege.in"
                className="text-gray-400 hover:text-white transition"
              >
                <Mail />
              </a>

              <a
                href="https://www.linkedin.com/company/team-vinidra"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/achievements" className="hover:text-white">Achievements</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/knowledge-hub" className="hover:text-white">Knowledge Hub</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={18} />
                Cummins College of Engineering for Women, Pune
              </p>

              <p>satellite@cumminscollege.in</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Team Vinidra. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}