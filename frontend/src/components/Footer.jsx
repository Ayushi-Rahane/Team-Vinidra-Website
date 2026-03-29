import { Mail, Linkedin, MapPin, Instagram, Phone } from "lucide-react";
import ShootingStars from "./ui/ShootingStars";

export default function Footer() {
  return (
    <footer className="relative z-[30] mt-24 bg-black border-t border-gray-800 overflow-hidden">

      {/* SHOOTING STARS */}
      <ShootingStars starCount={15} />

      {/* TOP FADE SEPARATOR */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-thin tracking-widest mb-4">
              TEAM VINIDRA
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-sm xl:max-w-md mb-4">
              A premier women-led aerospace innovation team at MKSSS’s Cummins College of Engineering for Women, Pune.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-sm xl:max-w-md">
              We bridge the gap between theoretical academia and practical space engineering. From designing functional CubeSats to executing advanced Model Rocketry systems, our mission is to empower the next generation of female aerospace leaders.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase">
              Follow Us
            </h3>

            <div className="flex gap-4 mt-2 relative z-20">
              <a
                href="mailto:satellite@cumminscollege.in"
                className="bg-gray-900 p-3 rounded-full text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all hover:scale-110 border border-gray-800 hover:border-sky-400/50 shadow-lg"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/vinidra-ccew?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 p-3 rounded-full text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all hover:scale-110 border border-gray-800 hover:border-sky-400/50 shadow-lg"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/teamvinidra?igsh=MXN4b2NvNWQ5NmtuZQ=="
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 p-3 rounded-full text-gray-400 hover:text-pink-400 hover:bg-pink-400/10 transition-all hover:scale-110 border border-gray-800 hover:border-pink-400/50 shadow-lg"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 relative z-20">
              <li><a href="/#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="/#team" className="hover:text-sky-400 transition-colors">Team</a></li>
              <li><a href="/#achievements" className="hover:text-sky-400 transition-colors">Achievements</a></li>
              <li><a href="/#gallery" className="hover:text-sky-400 transition-colors">Gallery</a></li>
              <li><a href="/#knowledge-hub" className="hover:text-sky-400 transition-colors">Knowledge Hub</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase">
              Reach Out
            </h3>

            <div className="space-y-5 text-gray-400 text-sm relative z-20">
              {/* Location */}
              <p className="flex items-start gap-3 leading-relaxed w-full">
                <MapPin size={24} className="text-sky-400 shrink-0 mt-0.5" />
                <span>
                  MKSSS's Cummins College of Engineering for Women, <br />
                  Pune, Maharashtra 411052
                </span>
              </p>

              {/* Email */}
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-sky-400 shrink-0" />
                <a href="mailto:satellite@cumminscollege.in" className="hover:text-sky-400 transition-colors">
                  satellite@cumminscollege.in
                </a>
              </p>


            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800/60 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Team Vinidra. All Rights Reserved.
          </p>
          <p className="mt-4 md:mt-0 tracking-[0.2em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white uppercase text-xs">
            Ad Astra Per Aspera
          </p>
        </div>

      </div>
    </footer>
  );
}
