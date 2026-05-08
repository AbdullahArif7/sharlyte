import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Our Services | Sharlyte Staffing Solutions",
  description: "Comprehensive healthcare staffing solutions including Per Diem, Travel Nursing, and Allied Health.",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-deep-plum bg-soft-ivory transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-b border-deep-plum text-deep-plum text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
              What We Do
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-light tracking-tight text-slate-900 mb-10 leading-[1.05]">
              Trusted Staffing <br />
              <span className="text-warm-gold italic">Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              At Sharlyte, we deliver a wide range of clinical and administrative healthcare professionals to meet the diverse staffing needs of facilities across the United States.
            </p>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-tr from-warm-gold/10 to-deep-plum/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        {/* Background Icon Watermarks */}
        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.20] pointer-events-none grayscale">
          <Image src="/images/icon.png" alt="" fill className="object-contain rotate-12" />
        </div>
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.20] pointer-events-none grayscale">
          <Image src="/images/icon.png" alt="" fill className="object-contain -rotate-12" />
        </div>
      </section>

      {/* 2. Core Service Offerings */}
      <section className="py-32 bg-soft-ivory relative">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Travel",
                desc: "Discover endless opportunities with the flexibility you deserve, competitive pay rates, weekly paychecks and scenic locations.",
                tags: ["Flexible", "High Pay", "Scenic Locations"]
              },
              {
                title: "Per Diem",
                desc: "Enjoy flexible per diem shifts with great pay, weekly checks, work-life balance, and the freedom to choose when and where to work.",
                tags: ["Freedom", "Work-Life Balance", "Weekly Pay"]
              },
              {
                title: "Allied Health",
                desc: "Explore rewarding Allied Health roles with top pay, weekly payouts, and opportunities across diverse healthcare settings.",
                tags: ["Rewarding", "Diverse Settings", "Allied Care"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-white border border-slate-100 p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-warm-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-3xl font-heading font-light text-slate-900 mb-6 group-hover:text-warm-gold transition-colors">{service.title}</h3>
                <p className="text-base text-slate-500 font-light leading-relaxed mb-10">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-deep-plum uppercase tracking-wider px-3 py-1 bg-soft-ivory rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-4 text-deep-plum font-medium text-sm tracking-wide group/btn">
                  Inquire Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-2 text-warm-gold"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Staffing Specialties List */}
      <section className="py-32 bg-deep-plum relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="mb-24">
            <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Staffing Specialties</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight">
              Clinical & <span className="text-warm-gold italic font-extralight">Administrative Experts.</span>
            </h3>
            <p className="mt-8 text-lg text-slate-400 max-w-2xl font-light">
              We provide reliable, qualified professionals committed to exceptional care across all healthcare disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {[
              "Registered Nurses (RNs)", "Licensed Practical Nurses (LPNs)", "Licensed Vocational Nurses (LVNs)",
              "Certified Nursing Assistants (CNAs)", "Nurse Practitioners (NPs)", "Physician Assistants (PAs)",
              "Travel Nurses & Professionals", "Medical Assistants (MAs)", "Therapists & Therapy Assistants",
              "Respiratory Therapists", "Radiology Technicians", "Laboratory Technicians",
              "Pharmacists", "Dental Hygienists & Assistants", "Administrative Healthcare Staff",
              "Rehabilitative & Allied Health", "Temp-to-Perm Placements"
            ].map((specialty, idx) => (
              <div key={idx} className="flex items-center gap-4 group border-b border-white/10 pb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-warm-gold group-hover:scale-150 transition-transform"></div>
                <span className="text-white/80 font-light text-lg group-hover:text-white transition-colors">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-warm-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* 4. Commitment Section */}
      <section className="py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-heading font-light text-slate-900 mb-8">
              Reliable, Qualified Professionals <br/>
              <span className="text-warm-gold italic">Committed to Care.</span>
            </h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
              Whether you need short-term coverage, per diem staff, or temp-to-perm placements, Sharlyte is your partner in excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto inline-flex h-16 items-center justify-center bg-deep-plum px-10 text-base font-medium text-white transition-all hover:bg-deep-plum/90 rounded-none shadow-xl">
                Partner With Us
              </Link>
              <Link href="/about" className="w-full sm:w-auto inline-flex h-16 items-center justify-center border border-slate-200 bg-white px-10 text-base font-medium text-slate-900 transition-all hover:bg-slate-50 rounded-none">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
