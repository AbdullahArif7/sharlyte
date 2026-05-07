import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-colors duration-300 bg-soft-ivory/90 backdrop-blur-sm border-b border-muted-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-deep-plum">
              Sharlyte
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="text-muted-gray hover:text-deep-plum transition-colors font-semibold">About Us</Link>
            <Link href="/services" className="text-muted-gray hover:text-deep-plum transition-colors font-semibold">Services</Link>
            <Link href="/facilities" className="text-muted-gray hover:text-deep-plum transition-colors font-semibold">For Facilities</Link>
            <Link href="/careers" className="text-muted-gray hover:text-deep-plum transition-colors font-semibold">Careers</Link>
            <Link href="/contact" className="btn-primary ml-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
