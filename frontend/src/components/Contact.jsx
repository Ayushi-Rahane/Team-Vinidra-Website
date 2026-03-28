import React from "react";
import {
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-28 md:py-32 px-[8%] text-white">
      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="font-sans text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text">
          CONTACT US
        </h2>
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
        {/* GET IN TOUCH */}
        <div
          className="relative h-full rounded-3xl border border-white/20 p-8
          bg-gradient-to-br from-white/5 via-sky-300/10 to-white/5
          backdrop-blur-md shadow-[0_8px_30px_rgba(0,242,254,0.2)]
          animate-float hover:scale-102 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.3)]"
        >
          <h3 className="font-sans text-2xl font-semibold mb-6 tracking-wider text-white">
            Get In Touch
          </h3>

          {/* EMAIL */}
          <div className="flex flex-col mb-4">
            <label className="font-sans text-[#a0a5b8] font-medium flex items-center gap-2">
              <Mail className="w-5 h-5 text-sky-300" /> Email
            </label>
            <a
              href="mailto:satellite@cumminscollege.in"
              className="text-white hover:text-sky-100 transition-colors ml-7 mt-1"
            >
              satellite@cumminscollege.in
            </a>
          </div>

          {/* PHONE */}
          <div className="flex flex-col mb-4">
            <label className="font-sans text-[#a0a5b8] font-medium flex items-center gap-2">
              <Phone className="w-5 h-5 text-sky-300" /> Phone
            </label>
            <span className="ml-7 mt-1 text-white/90">
              Arshia Singh : +91 9594656463
            </span>
            <span className="ml-7 text-white/90">
              Nandini Pathak : +91 7875743020
            </span>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col mb-4">
            <label className="font-sans text-[#a0a5b8] font-medium flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-300" /> Location
            </label>
            <p className="font-sans ml-7 mt-1 text-white mb-3">
              MKSSS's Cummins College of Engineering,
              <br />
              Pune, Maharashtra 411052, IN
            </p>
            <div className="rounded-lg overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(0,242,254,0.2)] ml-7">
              <iframe
                src="https://www.google.com/maps?q=MKSSS%20Cummins%20College%20of%20Engineering%20for%20Women%20Pune&output=embed"
                className="w-full h-[180px] md:h-[250px] border-0"
                loading="lazy"
                title="Cummins College Location"
              />
            </div>
          </div>

          {/* FOLLOW US */}
          <h3 className="font-sans text-2xl font-semibold mb-4 tracking-wider text-white">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {/* EMAIL */}
            <a
              href="mailto:satellite@cumminscollege.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-cyan-400 to-sky-300 p-3 rounded-full hover:scale-110 hover:animate-pulse transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.5)]"
              title="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vinidra-ccew?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-blue-500 to-sky-400 p-3 rounded-full hover:scale-110 hover:animate-pulse transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,100,255,0.5)]"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/teamvinidra?igsh=MXN4b2NvNWQ5NmtuZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-pink-400 to-purple-400 p-3 rounded-full hover:scale-110 hover:animate-pulse transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          className="relative h-full rounded-3xl border border-white/20 p-8
          bg-gradient-to-br from-white/5 via-sky-300/10 to-white/5
          backdrop-blur-md shadow-[0_8px_30px_rgba(0,242,254,0.2)]
          animate-float hover:scale-102 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(0,242,254,0.4)]"
        >
          <h3 className="font-sans text-2xl font-semibold mb-6 tracking-wider text-white">
            Send a Message
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-sans text-[#a0a5b8] font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="font-sans placeholder-white/60 bg-transparent border border-white/20 px-4 py-3 rounded-2xl text-white outline-none focus:border-sky-300 focus:shadow-[0_0_15px_rgba(0,242,254,0.5)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-sans text-[#a0a5b8] font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="font-sans placeholder-white/60 bg-transparent border border-white/20 px-4 py-3 rounded-2xl text-white outline-none focus:border-sky-300 focus:shadow-[0_0_15px_rgba(0,242,254,0.5)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-sans text-[#a0a5b8] font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                className="font-sans placeholder-white/60 bg-transparent border border-white/20 px-4 py-3 rounded-2xl text-white outline-none focus:border-sky-300 focus:shadow-[0_0_15px_rgba(0,242,254,0.5)] transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="font-sans bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black py-3 rounded-2xl font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FLOAT ANIMATION CSS */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
