import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Sharlyte Staffing Solutions",
  description: "Learn about Sharlyte's mission to elevate healthcare through human connection and excellence.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-deep-plum bg-soft-ivory transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-b border-deep-plum text-deep-plum text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
              Our Identity
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-light tracking-tight text-slate-900 mb-10 leading-[1.05]">
              The Heart of <br />
              <span className="text-warm-gold italic">Healthcare Staffing.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Connecting healthcare facilities with exceptional talent through trust, reliability, and a passion for quality care.
            </p>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-tr from-warm-gold/10 to-deep-plum/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

        {/* Background Icon Watermarks */}
        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.20] pointer-events-none grayscale">
          <Image
            src="/images/icon.png"
            alt=""
            fill
            className="object-contain rotate-12"
          />
        </div>
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.20] pointer-events-none grayscale">
          <Image
            src="/images/icon.png"
            alt=""
            fill
            className="object-contain -rotate-12"
          />
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-32 bg-soft-ivory relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl bg-warm-beige">
                <Image
                  src="/images/aboutus.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/20 to-transparent pointer-events-none"></div>
              </div>
              {/* Abstract element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-warm-gold/20 rounded-[2.5rem] blur-2xl z-0"></div>
            </div>
            <div>
              <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1] mb-8">
                A Dedicated <br />
                <span className="text-warm-gold font-extralight italic">Healthcare Partner.</span>
              </h3>
              <div className="space-y-6 text-base md:text-lg text-slate-500 font-light leading-relaxed">
                <p>
                  Sharlyte is a premier healthcare staffing partner committed to connecting skilled professionals with leading healthcare facilities across the United States. Established with a mission to bridge the gap in quality care, we proudly serve clients across Texas, Florida, New Jersey, Georgia, and beyond.
                </p>
                <p>
                  We specialize in providing qualified healthcare professionals—including nurses, medical assistants, and administrative staff—to hospitals, clinics, and long-term care facilities. Whether you need short-term coverage or long-term hires, our tailored services include temporary, temp-to-hire, and direct placement options.
                </p>
                <p>
                  At Sharlyte, we understand that every patient matters—and so does every hire. That's why we focus on delivering staffing solutions that are fast, flexible, and aligned with your standards of care.
                </p>
              </div>
              <div className="mt-12">
                <Link href="/contact" className="inline-flex h-16 items-center justify-center gap-3 bg-deep-plum px-10 text-lg font-medium text-soft-ivory transition-all hover:bg-deep-plum/90 hover:shadow-xl rounded-none">
                  Start a Partnership
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="py-32 bg-deep-plum relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Our Foundation</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight">
              Values That <span className="text-warm-gold italic font-extralight">Drive Us.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mission",
                desc: "To deliver a competent and diverse blend of healthcare professionals, driven by excellence, to fulfill the unique staffing needs of our clients across the U.S.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                )
              },
              {
                title: "Vision",
                desc: "To provide professional and personalized staffing services tailored to each client’s unique needs, upholding their values and delivering care worth recommending.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                )
              },
              {
                title: "Ethics",
                desc: "We strictly adhere to professional codes of conduct, never compromising on integrity. We build lasting relationships because there are no shortcuts to excellence.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-warm-gold/20 flex items-center justify-center text-warm-gold mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-heading font-light text-white mb-6 tracking-tight">{value.title}</h4>
                <p className="text-base text-slate-400 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-warm-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* 4. Core Pillars */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Our DNA</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1]">
                Excellence <span className="text-warm-gold italic font-extralight">Built on Trust.</span>
              </h3>
            </div>
            <p className="text-base text-slate-500 max-w-sm font-light leading-relaxed">
              Driven by excellence, built on trust, backed by reliability, and powered by innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { title: "Excellence", desc: "Setting the standard in quality care and staffing solutions." },
              { title: "Reliability", desc: "Consistently delivering trusted professionals when and where you need them." },
              { title: "Trust", desc: "Building long-term relationships with clients and caregivers." },
              { title: "Innovation", desc: "Advancing healthcare staffing with smart, flexible, and future-ready solutions." }
            ].map((pillar, idx) => (
              <div key={idx} className="relative flex flex-col group">
                <div className="text-warm-gold font-mono text-[10px] mb-6 uppercase tracking-[0.3em]">Pillar 0{idx + 1}</div>
                <h4 className="text-2xl font-heading font-light text-slate-900 mb-4 group-hover:text-warm-gold transition-colors">{pillar.title}</h4>
                <p className="text-base text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
                <div className="mt-8 w-12 h-px bg-slate-200 group-hover:w-full group-hover:bg-warm-gold transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-32 bg-soft-ivory border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 mb-10">
            Ready to <span className="italic font-extralight text-warm-gold">Join Us?</span>
          </h3>
          <p className="text-lg text-slate-500 font-light mb-12">
            Whether you're a healthcare organization or a professional looking for your next career move, let Sharlyte be your partner in success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-8 rounded-full bg-deep-plum px-10 text-base font-medium text-white transition-all hover:scale-105 shadow-xl">
              Contact Our Team
            </Link>
            <Link href="/services" className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-8 rounded-full border border-slate-200 bg-white px-10 text-base font-medium text-slate-900 transition-all hover:bg-slate-50">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
