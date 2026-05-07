import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 bg-warm-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-deep-plum mb-6 leading-tight">
              Elevating Healthcare Through Human Connection
            </h1>
            <p className="text-lg md:text-xl text-muted-gray mb-10 max-w-2xl">
              Sharlyte is a premium healthcare staffing agency dedicated to matching exceptional medical professionals with leading healthcare facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Find Talent
              </Link>
              <Link href="/careers" className="btn-secondary text-center">
                Find Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Agency Introduction */}
      <section className="py-24 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-warm-gold tracking-wider uppercase mb-3">About Sharlyte</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-deep-plum mb-6">A New Standard in Healthcare Staffing</h3>
              <p className="text-muted-gray mb-6 text-lg">
                We believe that the quality of care starts with the quality of the people providing it. Our rigorous selection process and personalized matching ensure that every placement is a perfect fit.
              </p>
              <p className="text-muted-gray mb-8 text-lg">
                Whether you're a healthcare facility looking for reliable staff or a medical professional seeking your next rewarding role, we are here to guide you every step of the way.
              </p>
              <Link href="/about" className="text-deep-plum font-semibold hover:text-warm-gold transition-colors inline-flex items-center">
                Learn more about our agency 
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-warm-beige h-96 rounded-[14px] shadow-sm border border-white/20 flex items-center justify-center">
              <span className="text-muted-gray">Placeholder Image: Professional Medical Setting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 bg-deep-plum text-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-warm-gold tracking-wider uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Staffing Solutions</h3>
            <p className="text-soft-ivory/80 text-lg">
              We provide tailored staffing solutions to meet the dynamic needs of modern healthcare facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Per Diem Nursing", desc: "Flexible staffing to cover short-term gaps and seasonal fluctuations with highly qualified nurses." },
              { title: "Travel Nursing", desc: "Dedicated professionals ready to step in for extended assignments and bring expertise where it's needed most." },
              { title: "Allied Health", desc: "Exceptional allied health professionals to ensure comprehensive patient care across all departments." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[14px] p-8 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold text-warm-gold mb-4">{service.title}</h4>
                <p className="text-soft-ivory/80">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block bg-warm-gold text-deep-plum hover:bg-white transition-colors duration-300 rounded-[14px] px-6 py-3 font-semibold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-warm-beige h-[500px] rounded-[14px] shadow-sm border border-white/20 flex items-center justify-center">
              <span className="text-muted-gray">Placeholder Image: Nurse and Patient</span>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-warm-gold tracking-wider uppercase mb-3">The Sharlyte Difference</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-deep-plum mb-8">Why Partner With Us?</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Rigorous Vetting", desc: "Every candidate undergoes a comprehensive background check, skills assessment, and credential verification." },
                  { title: "Personalized Matching", desc: "We don't just fill seats; we match personalities and work styles to ensure long-term success." },
                  { title: "24/7 Support", desc: "Our dedicated support team is available around the clock to address any needs or concerns." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-warm-beige rounded-full flex items-center justify-center text-warm-gold font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-deep-plum mb-2">{feature.title}</h4>
                      <p className="text-muted-gray">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nurse Journey / Process */}
      <section className="py-24 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-warm-gold tracking-wider uppercase mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-deep-plum mb-16">Your Journey With Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Submit your application and credentials." },
              { step: "02", title: "Interview", desc: "Meet with our recruiters to discuss your goals." },
              { step: "03", title: "Match", desc: "Get matched with the perfect facility." },
              { step: "04", title: "Work", desc: "Start your assignment with our full support." }
            ].map((process, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-bold text-deep-plum/10 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-deep-plum mb-3">{process.title}</h4>
                <p className="text-muted-gray">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-warm-gold tracking-wider uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-plum">What They Say About Us</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Sharlyte has consistently provided us with top-tier nursing staff exactly when we needed them. Their professionalism is unmatched.", author: "Director of Nursing, City Hospital" },
              { text: "Working with Sharlyte feels like working with family. They truly care about finding the right placement for my career goals.", author: "Sarah T., Registered Nurse" }
            ].map((testimonial, idx) => (
              <div key={idx} className="premium-card">
                <p className="text-lg text-muted-gray italic mb-6">"{testimonial.text}"</p>
                <p className="font-bold text-deep-plum">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-24 bg-deep-plum text-soft-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Elevate Your Standard of Care?</h2>
          <p className="text-xl text-soft-ivory/80 mb-10 max-w-2xl mx-auto">
            Join the premier healthcare staffing network. Whether you are seeking exceptional talent or your next great opportunity, we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/facilities" className="bg-warm-gold text-deep-plum hover:bg-white transition-colors duration-300 rounded-[14px] px-8 py-4 font-bold text-lg">
              Hire Staff
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-deep-plum transition-colors duration-300 rounded-[14px] px-8 py-4 font-bold text-lg">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
