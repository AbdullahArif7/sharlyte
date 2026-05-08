import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Find Talent | Sharlyte Staffing Solutions",
  description: "Connect with the best healthcare professionals. Sharlyte provides tailored staffing plans for healthcare facilities.",
};

export default function FindTalent() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-deep-plum bg-soft-ivory transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-b border-deep-plum text-deep-plum text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
              Recruitment Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-light tracking-tight text-slate-900 mb-10 leading-[1.05]">
              Find Exceptional <br />
              <span className="text-warm-gold italic">Healthcare Talent.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Find top-tier healthcare talent with ease. Partner with Sharlyte to access qualified, dependable professionals ready to meet your facility's staffing needs—on time, every time.
            </p>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-tr from-warm-gold/10 to-deep-plum/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.15] pointer-events-none grayscale">
          <Image
            src="/images/icon.png"
            alt=""
            fill
            className="object-contain rotate-12"
          />
        </div>
      </section>

      {/* 2. Contact & Info Section */}
      <section className="py-24 bg-soft-ivory relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Address */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-slate-900 mb-4">Our Office</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                1666 N Hampton Rd, <br />DeSoto, Texas 75115, US
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-slate-900 mb-4">Email Us</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                support@sharlyte.com<br />hr@sharlyte.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-slate-900 mb-4">Call Us</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                (214) 501-5651<br />Available Mon-Fri, 9am-5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Start Your Journey</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1] mb-8">
              Connect with our <br />
              <span className="text-warm-gold font-extralight italic">Staffing Experts.</span>
            </h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Fill out the form to connect with Sharlyte. Our team will review your requirements and get back to you with a tailored staffing plan that fits your facility's unique needs.
            </p>
          </div>

          <div className="bg-[#F8F6FA] p-8 md:p-12 lg:p-16 rounded-[3rem] border border-deep-plum/5 shadow-sm max-w-5xl mx-auto">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Facility Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter facility name"
                    className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Representative Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="example@facility.com"
                    className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Facility Phone *</label>
                  <input 
                    type="tel" 
                    placeholder="(000) 000-0000"
                    className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Subject *</label>
                <input 
                  type="text" 
                  placeholder="Staffing inquiry"
                  className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-deep-plum uppercase tracking-widest ml-1">Comments / Questions *</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your staffing needs..."
                  className="w-full bg-white border border-slate-200 rounded-2xl p-6 text-deep-plum focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold transition-all resize-none"
                  required
                ></textarea>
              </div>

              <div className="p-6 bg-white/50 rounded-2xl border border-slate-100 text-xs text-slate-500 font-light leading-relaxed">
                Messaging frequency may vary, and message and data rates may apply. You can opt-out at any time by texting STOP. For assistance, text HELP or visit our website. Please review our <Link href="/privacy-policy" className="text-warm-gold underline">Privacy Policy</Link> for more details.
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="agree" 
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-warm-gold focus:ring-warm-gold transition-all"
                  required
                />
                <label htmlFor="agree" className="text-sm text-slate-600 font-light">
                  I agree to the terms and conditions and consent to be contacted regarding my inquiry.
                </label>
              </div>

              <button type="submit" className="w-full h-16 bg-deep-plum text-soft-ivory text-lg font-medium rounded-2xl hover:bg-deep-plum/90 transition-all hover:shadow-xl active:scale-[0.98]">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?q=1666%20N%20Hampton%20Rd%2C%20DeSoto%2C%20Texas%2075115&t=m&z=15&output=embed&iwloc=near"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </section>

      {/* 5. Final CTA */}
      <section className="py-32 bg-deep-plum relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="text-3xl md:text-5xl font-heading font-light text-white mb-10">
            Let's build a better <br />
            <span className="italic font-extralight text-warm-gold">healthcare future together.</span>
          </h3>
          <p className="text-lg text-slate-400 font-light mb-12">
            Whether you need immediate coverage or a long-term staffing partner, Sharlyte is here to provide the excellence you deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/services" className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-10 text-base font-medium text-white transition-all hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-warm-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
    </div>
  );
}
