import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, X, Send, UserPlus } from 'lucide-react';
import SplitText from './SplitText';
import { SparklesCore } from './ui/SparklesCore';
import { Button } from './ui/moving-border';
import useIsMobile from '../utils/useMobile';

const subsystems = [
  'Avionics',
  'Mechanical',
  'Software',
  'Payload',
  'Electrical',
];

// ── Google Apps Script Web App URL ──
// Replace this with your deployed Apps Script URL (see setup instructions)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBW-gRW7OZkPbkp_GOG-BiQLZgVMtD8cvUHaPIHKvJbAW3zQ3igrWCxLDj01QgthEHeA/exec';

const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-sky-400/60 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(56,189,248,0.15)] text-sm tracking-wide';

const labelClasses =
  'block text-[11px] font-medium tracking-[0.25em] uppercase text-sky-300/70 mb-1.5';

const Hero = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    unc: '',
    branch: '',
    email: '',
    subsystem: '',
    questions: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // no-cors returns opaque response, so we treat it as success
      setSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
        setFormData({ name: '', unc: '', branch: '', email: '', subsystem: '', questions: '' });
      }, 2200);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start pt-44 overflow-hidden">

      {/* Title */}

      <div
        className={`max-w-5xl ${isMobile ? '' : 'float-container'} text-center relative z-20 transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(56,189,248,1)] cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SplitText
          tag="h1"
          text="TEAM VINIDRA"
          className={`font-thin tracking-[0.32em] text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-4 whitespace-nowrap transition-all duration-300 ${isHovered ? 'text-glowing-sparkle' : ''}`}
          startDelay={0}
          delay={80}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      {/* Sparkle shower container — inverted triangle, full-width top, fades at globe */}
      <div
        className="w-full max-w-3xl relative mx-auto"
        style={{
          height: '55vh',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >

        {/* Gradients — top blue glow line, ensured perfect centering */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm z-10" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px z-10" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm z-10" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 z-10" />

        {/* Sparkle canvas — semi-circle container */}
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1.5}
          particleDensity={isMobile ? 80 : 400}
          className="absolute inset-x-0 top-0 w-full h-full z-0"
          particleColors={["#FFFFFF", "#E2E8F0", "#CBD5E1"]}
        />

        {/* ── Tagline with heavy animations ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 z-20 pointer-events-none gap-4 px-6">

          {/* Main tagline */}
          <div className={isMobile ? '' : 'float-container'} style={{ animationDelay: '0.5s' }}>
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="text-center font-thin tracking-[0.35em] text-lg md:text-2xl lg:text-3xl text-white/90"
              style={{
                textShadow: '0 0 20px rgba(100, 160, 255, 0.9), 0 0 50px rgba(100, 160, 255, 0.5)',
              }}
            >
              Scripting the Unknown
            </motion.p>
          </div>

          {/* Recruitment Button — replaces ContainerTextFlip */}
          <div className={`${isMobile ? '' : 'float-container'} pointer-events-auto`} style={{ animationDelay: '1s' }}>
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 0.9, letterSpacing: '0.25em' }}
              transition={{ delay: 0.5, duration: 1.0, ease: 'easeOut' }}
              className="mt-2"
            >
              <Button
                borderRadius="2rem"
                className="bg-black/20 border-slate-800/40 backdrop-blur-sm px-6 py-3 font-thin tracking-[0.15em] text-white/80 text-xs md:text-sm leading-relaxed cursor-pointer"
                containerClassName="h-auto w-auto"
                onClick={() => setShowForm(true)}
              >
                <span className="flex items-center gap-2 font-semibold text-center mt-1">
                  <UserPlus size={18} strokeWidth={1.5} className="shrink-0" />
                  <span className="uppercase">Recruitments are now open!<br className="md:hidden" /> Click here to register</span>
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Animated Rocket Icon */}
          <motion.div
            className="text-sky-400 mt--2"
            animate={{
              scale: [1, 1, 1],
              opacity: [0.8, 0.4, 0.8],
              filter: [
                'drop-shadow(0 0 2px rgba(56, 189, 248, 0.4))',
                'drop-shadow(0 0 20px rgba(56, 189, 248, 0.9))',
                'drop-shadow(0 0 2px rgba(56, 189, 248, 0.4))',
              ],
            }}
            transition={{ delay: 2.0, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Rocket size={32} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      {/* ── Recruitment Form Modal ── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-lg rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(10,15,30,0.98))',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                boxShadow:
                  '0 0 60px rgba(56, 189, 248, 0.12), 0 0 120px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Glow accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-200 z-10 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8 pt-7">
                {/* Header */}
                <div className="text-center mb-7">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-3"
                  >
                    <Rocket size={22} className="text-sky-400" />
                  </motion.div>
                  <h2
                    className="text-2xl font-thin tracking-[0.25em] text-white uppercase"
                    style={{ textShadow: '0 0 30px rgba(56,189,248,0.4)' }}
                  >
                    Recruitment
                  </h2>
                  <p className="text-white/30 text-xs tracking-[0.2em] mt-1 uppercase">
                    Apply to Team Vinidra
                  </p>
                </div>

                {!submitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {/* Row: Name + UNC */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className={labelClasses}>Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>UNC (Roll No.)</label>
                        <input
                          type="text"
                          name="unc"
                          value={formData.unc}
                          onChange={handleChange}
                          placeholder="e.g. UCE2024123"
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Row: Branch + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className={labelClasses}>Branch</label>
                        <input
                          type="text"
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          placeholder="e.g. CSE, ECE"
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Subsystem select */}
                    <div>
                      <label className={labelClasses}>Subsystem</label>
                      <select
                        name="subsystem"
                        value={formData.subsystem}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2338bdf8' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled className="bg-slate-900 text-white/40">
                          Select a subsystem
                        </option>
                        {subsystems.map((s) => (
                          <option key={s} value={s} className="bg-slate-900 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Questions */}
                    <div>
                      <label className={labelClasses}>Any Questions?</label>
                      <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleChange}
                        placeholder="Ask us anything..."
                        rows={3}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {/* Error message */}
                    {submitError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400/90 text-xs tracking-wider text-center"
                      >
                        {submitError}
                      </motion.p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                      className={`w-full mt-2 py-3.5 rounded-xl font-medium tracking-[0.2em] uppercase text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-60 cursor-wait' : 'cursor-pointer'}`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(99,102,241,0.25))',
                        border: '1px solid rgba(56,189,248,0.3)',
                        boxShadow: '0 0 30px rgba(56,189,248,0.15)',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} strokeWidth={1.5} />
                          Submit Application
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12 gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                    >
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-white/80 text-lg tracking-[0.15em] font-thin">Application Sent!</p>
                    <p className="text-white/30 text-xs tracking-wider">We'll reach out to you soon ✨</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
