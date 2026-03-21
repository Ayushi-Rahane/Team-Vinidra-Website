import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="font-[family-name:--font-heading] text-4xl text-center mb-12 tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-full">
        <div>
          <h3 className="font-[family-name:--font-heading] text-[#4a90e2] text-3xl mb-4">Get In Touch</h3>
          <p className="text-[#a0a5b8] mb-2">Email: <a href="mailto:satellite@cumminscollege.in" className="text-white underline decoration-[#4a90e2] hover:text-[#4a90e2] transition-colors">satellite@cumminscollege.in</a></p>
          <p className="text-[#a0a5b8] mb-6">LinkedIn: <a href="#" target="_blank" rel="noreferrer" className="text-white underline decoration-[#4a90e2] hover:text-[#4a90e2] transition-colors">Team Vinidra</a></p>
          
          <div className="my-6">
            <h4 className="font-[family-name:--font-subheading] text-[#a0a5b8] text-lg mb-2">📍 Location</h4>
            <p className="text-white">MKSSS’s Cummins College of Engineering for Women<br/>Karvenagar, Pune</p>
          </div>
          
          <div className="mt-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5042861619864!2d73.8123284751912!3d18.490538982637295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbbfc42013f%3A0xc3f7a18bbab032!2sMKSSS's%20Cummins%20College%20of%20Engineering%20for%20Women!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              className="border-0 filter invert-[90%] hue-rotate-180" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MKSSS Cummins College"
            ></iframe>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[family-name:--font-subheading] text-[#a0a5b8]">Name</label>
            <input type="text" id="name" placeholder="Your Name" required className="bg-black/30 border border-white/20 px-4 py-3 rounded-lg text-white font-[family-name:--font-body] outline-none transition-all duration-300 focus:border-[#4a90e2] focus:shadow-[0_0_10px_rgba(74,144,226,0.3)]" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-[family-name:--font-subheading] text-[#a0a5b8]">Email</label>
            <input type="email" id="email" placeholder="Your Email" required className="bg-black/30 border border-white/20 px-4 py-3 rounded-lg text-white font-[family-name:--font-body] outline-none transition-all duration-300 focus:border-[#4a90e2] focus:shadow-[0_0_10px_rgba(74,144,226,0.3)]" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-[family-name:--font-subheading] text-[#a0a5b8]">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required className="bg-black/30 border border-white/20 px-4 py-3 rounded-lg text-white font-[family-name:--font-body] outline-none transition-all duration-300 focus:border-[#4a90e2] focus:shadow-[0_0_10px_rgba(74,144,226,0.3)]"></textarea>
          </div>
          <button type="submit" className="bg-[#4a90e2] text-white py-3 rounded-lg font-[family-name:--font-subheading] uppercase tracking-widest shadow-[0_0_15px_rgba(74,144,226,0.6)] transition-all duration-300 hover:bg-[#357abd] hover:shadow-[0_0_25px_rgba(74,144,226,0.8)] mt-2">
            Send Message
          </button>
        </form>
      </div>

      <footer className="text-center mt-16 pt-8 border-t border-white/10 text-[#a0a5b8] text-sm font-[family-name:--font-subheading]">
        <p>&copy; {new Date().getFullYear()} Team Vinidra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
