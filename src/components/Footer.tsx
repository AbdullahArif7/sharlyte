import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-plum text-soft-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-warm-gold">Sharlyte</h2>
            <p className="text-soft-ivory/80 max-w-md">
              A premium healthcare staffing agency dedicated to providing human-centered recruitment and connecting exceptional professionals with top facilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6 text-warm-gold">Quick Links</h3>
            <ul className="space-y-4 text-soft-ivory/80">
              <li><Link href="/about" className="hover:text-warm-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-warm-gold transition-colors">Services</Link></li>
              <li><Link href="/facilities" className="hover:text-warm-gold transition-colors">For Facilities</Link></li>
              <li><Link href="/careers" className="hover:text-warm-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6 text-warm-gold">Contact</h3>
            <ul className="space-y-4 text-soft-ivory/80">
              <li>123 Healthcare Ave, Suite 100</li>
              <li>contact@sharlyte.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-soft-ivory/20 mt-16 pt-8 text-center text-soft-ivory/60">
          <p>&copy; {new Date().getFullYear()} Sharlyte Staffing Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
