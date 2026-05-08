'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 pointer-events-none py-6 transition-all duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pointer-events-auto">
        <nav className="flex items-center justify-between rounded-[2rem] px-8 py-5 shadow-2xl border bg-soft-ivory/90 backdrop-blur-md border-deep-plum/5">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <Image src="/images/logo.png" alt="Sharlyte Logo" width={200} height={60} className="h-10 md:h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 lg:space-x-12 items-center">
            <Link href="/" className="text-sm font-medium tracking-wide text-slate-500 hover:text-warm-gold transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium tracking-wide text-slate-500 hover:text-warm-gold transition-colors">About Us</Link>
            <Link href="/services" className="text-sm font-medium tracking-wide text-slate-500 hover:text-warm-gold transition-colors">Services</Link>
            
            {/* Join Us Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-slate-500 group-hover:text-warm-gold transition-colors">
                Join Us
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link href="/find-talent" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-warm-gold hover:bg-soft-ivory transition-colors">Find Talent</Link>
                <Link href="/find-job" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-warm-gold hover:bg-soft-ivory transition-colors">Find a Job</Link>
              </div>
            </div>
          </div>

          {/* Right side CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-medium tracking-wide transition-all hover:scale-105 bg-warm-gold text-deep-plum hover:bg-yellow-500 shadow-lg shadow-warm-gold/20">
              Contact Us 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-deep-plum"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">About Us</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900">Services</Link>
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm-gold">Join Us</span>
                <Link href="/find-talent" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-slate-600">Find Talent</Link>
                <Link href="/find-job" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-slate-600">Find a Job</Link>
              </div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex h-14 items-center justify-center rounded-full bg-deep-plum text-white text-base font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
