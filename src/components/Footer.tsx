import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-deep-plum text-soft-ivory pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-warm-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 pr-0 lg:pr-24">
            <Link href="/" className="inline-block group mb-6">
              <Image src="/images/footerlogo.png" alt="Sharlyte Footer Logo" width={240} height={80} className="h-12 md:h-16 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 font-light leading-relaxed max-w-md">
              A premium healthcare staffing agency dedicated to providing human-centered recruitment and connecting exceptional professionals with top facilities worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-8">Quick Links</h3>
            <ul className="space-y-4 text-slate-300 font-light">
              <li><Link href="/about" className="hover:text-warm-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-warm-gold transition-colors">Services</Link></li>
              <li><Link href="/find-talent" className="hover:text-warm-gold transition-colors">For Facilities</Link></li>
              <li><Link href="/find-job" className="hover:text-warm-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-[10px] font-bold text-warm-gold uppercase tracking-[0.4em] mb-8">Contact</h3>
            <ul className="space-y-4 text-slate-300 font-light">
              <li>1666 N Hampton Rd, <br />DeSoto, Texas 75115</li>
              <li><a href="mailto:support@sharlyte.com" className="hover:text-warm-gold transition-colors underline underline-offset-4 decoration-white/20">support@sharlyte.com</a></li>
              <li><a href="tel:+12145015651" className="hover:text-warm-gold transition-colors underline underline-offset-4 decoration-white/20">(214) 501-5651</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} Sharlyte Staffing Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-warm-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-warm-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
