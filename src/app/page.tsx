import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-deep-plum bg-soft-ivory transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-soft-ivory transition-colors duration-300">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-[55%] lg:pr-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-b border-deep-plum text-deep-plum text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
              Healthcare Staffing & Consulting
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight text-slate-900 mb-10 leading-[1.05]">
              Elevating Healthcare <br />
              <span className="text-warm-gold italic">Through Human</span> <br />
              <span className="font-extralight text-2xl md:text-3xl lg:text-4xl block mt-6 text-slate-700">
                Connection and Excellence
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-12 max-w-xl leading-relaxed font-light">
              Sharlyte is a premium healthcare staffing agency dedicated to matching exceptional medical professionals with leading healthcare facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/find-talent" className="inline-flex h-16 items-center justify-center gap-3 bg-deep-plum px-10 text-lg font-medium text-soft-ivory transition-all hover:bg-deep-plum/90 hover:shadow-xl rounded-none">
                Find Talent
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <Link href="/find-job" className="inline-flex h-16 items-center justify-center gap-3 border-2 border-slate-900 px-10 text-lg font-medium text-slate-900 transition-all hover:bg-slate-50 rounded-none">
                Find Opportunities
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[45%] flex flex-col items-center justify-center mt-12 lg:mt-0">
            <div className="w-full h-[400px] lg:h-[600px] lg:mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-warm-gold/20 to-deep-plum/20 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="relative w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Healthcare Professionals" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Agency Introduction */}
      <section className="py-32 bg-white border-y border-slate-200 overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">About Sharlyte</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1] mb-8">
                A New Standard in <br />
                <span className="text-warm-gold font-extralight italic">Healthcare Staffing.</span>
              </h3>
              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed mb-6 max-w-xl">
                We believe that the quality of care starts with the quality of the people providing it. Our rigorous selection process and personalized matching ensure that every placement is a perfect fit.
              </p>
              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
                Whether you're a healthcare facility looking for reliable staff or a medical professional seeking your next rewarding role, we are here to guide you every step of the way.
              </p>
              <div className="relative group self-center lg:self-start mt-4">
                <Link href="/about" className="inline-flex items-center gap-4 text-deep-plum font-medium text-base tracking-wide group">
                  Learn more about our agency
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 text-warm-gold"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-warm-gold transition-all duration-300 group-hover:w-full opacity-60"></div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[1.1/1] shadow-2xl bg-warm-beige">
                <Image 
                  src="/images/about.jpeg" 
                  alt="Professional Medical Setting" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-40 bg-deep-plum overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 md:mb-32 text-center">
            <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight tracking-tight max-w-3xl mx-auto">
              Comprehensive <br />
              <span className="text-warm-gold italic font-extralight">Staffing Solutions.</span>
            </h3>
            <p className="mt-8 text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
              We provide tailored staffing solutions to meet the dynamic needs of modern healthcare facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Per Diem Nursing", desc: "Flexible staffing to cover short-term gaps and seasonal fluctuations with highly qualified nurses." },
              { title: "Travel Nursing", desc: "Dedicated professionals ready to step in for extended assignments and bring expertise where it's needed most." },
              { title: "Allied Health", desc: "Exceptional allied health professionals to ensure comprehensive patient care across all departments." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 group">
                <h4 className="text-xl md:text-2xl font-heading font-light text-white mb-4 tracking-tight">{service.title}</h4>
                <p className="text-base text-slate-400 font-light leading-relaxed flex-grow">{service.desc}</p>
                <div className="relative group/link self-start mt-8">
                  <Link href="/services" className="inline-flex items-center gap-4 text-white font-medium text-base tracking-wide">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2 text-warm-gold"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </Link>
                  <div className="absolute -bottom-2 left-0 w-0 h-px bg-warm-gold transition-all duration-300 group-hover/link:w-full opacity-60"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-32 bg-soft-ivory relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-warm-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-[2.5rem] overflow-hidden aspect-[1.1/1] shadow-2xl bg-warm-beige">
              <Image 
                src="/images/partner.jpeg" 
                alt="Healthcare Partnership" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">The Sharlyte Difference</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1] mb-8">
                Why Partner <br />
                <span className="text-warm-gold font-extralight italic">With Us?</span>
              </h3>

              <div className="space-y-12 mt-12">
                {[
                  { title: "Rigorous Vetting", desc: "Every candidate undergoes a comprehensive background check, skills assessment, and credential verification." },
                  { title: "Personalized Matching", desc: "We don't just fill seats; we match personalities and work styles to ensure long-term success." },
                  { title: "24/7 Support", desc: "Our dedicated support team is available around the clock to address any needs or concerns." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg relative">
                      <div className="absolute inset-1 rounded-full opacity-10 bg-warm-gold"></div>
                      <span className="font-mono text-warm-gold font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-heading font-light text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-base text-slate-500 font-light leading-relaxed max-w-md">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nurse Journey / Process */}
      <section className="relative py-32 bg-white overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 text-center lg:text-left">
            <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">Our Process</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1]">
              Your Journey <br />
              <span className="text-warm-gold font-extralight italic">With Us.</span>
            </h3>
            <p className="mt-8 text-base text-slate-500 max-w-xl font-light leading-relaxed">
              A structured, transparent approach ensuring seamless talent acquisition from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            {[
              { step: "01", title: "Apply", desc: "Submit your application and credentials." },
              { step: "02", title: "Interview", desc: "Meet with our recruiters to discuss your goals." },
              { step: "03", title: "Match", desc: "Get matched with the perfect facility." },
              { step: "04", title: "Work", desc: "Start your assignment with our full support." }
            ].map((process, idx) => (
              <div key={idx} className="relative flex flex-col text-center lg:text-left">
                <div className="text-warm-gold font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">Step {process.step}</div>
                <h4 className="text-2xl font-heading font-light text-slate-900 mb-4">{process.title}</h4>
                <p className="text-base text-slate-500 font-light leading-relaxed">{process.desc}</p>
                <div className="mt-8 flex items-center lg:justify-start justify-center gap-4">
                  <div className="w-12 h-px bg-slate-200"></div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold">Phase {idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-32 bg-soft-ivory relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-6">VOICES OF TRUST</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-slate-900 leading-[1.1]">
                What They Say <span className="italic font-extralight text-slate-400">About Us</span>
              </h3>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 hide-scrollbar">
            {[
              { text: "Sharlyte has consistently provided us with top-tier nursing staff exactly when we needed them. Their professionalism is unmatched.", author: "Director of Nursing, City Hospital" },
              { text: "Working with Sharlyte feels like working with family. They truly care about finding the right placement for my career goals.", author: "Sarah T., Registered Nurse" }
            ].map((testimonial, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[450px]">
                <div className="h-full bg-white backdrop-blur-sm border border-slate-100 p-8 md:p-10 rounded-[2.5rem] flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="flex items-center gap-1 mb-8 text-warm-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    ))}
                    <div className="ml-auto opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-warm-gold"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 flex-grow italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <div className="w-12 h-12 rounded-full bg-deep-plum/5 flex items-center justify-center text-deep-plum font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">{testimonial.author.split(',')[0]}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{testimonial.author.split(',')[1] || 'Reviewer'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-soft-ivory transition-colors duration-300 border-t border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-tr from-warm-gold/20 to-deep-plum/20 opacity-50 rounded-[100px] blur-3xl transform -rotate-6 transition-colors duration-500"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-deep-plum rounded-[40px] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden border border-white/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-warm-gold"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Start Your Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-8 leading-tight">
              Ready to Elevate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-gold to-yellow-200 italic font-extralight lowercase">
                Standard of Care?
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-400/90 mb-12 max-w-2xl mx-auto transition-colors font-light leading-relaxed">
              Join the premier healthcare staffing network. Whether you are seeking exceptional talent or your next great opportunity, we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/find-talent" className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-warm-gold px-10 text-base font-semibold text-deep-plum transition-all hover:bg-yellow-500 hover:scale-[1.02] shadow-lg shadow-warm-gold/20">
                Hire Staff
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <Link href="/find-job" className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/20 hover:scale-[1.02]">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
