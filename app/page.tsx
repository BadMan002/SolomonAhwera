'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { profile, experience, projects, certifications } from './data';
import { 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  CheckCircle, 
  ChevronDown, 
  Mail, 
  Phone 
} from 'lucide-react';

function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-950 font-bold rounded hover:bg-teal-400 transition"
      >
        Contact Me
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 cursor-default" 
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 p-2 flex flex-col gap-1">
            <a 
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 p-3 text-slate-300 hover:bg-slate-800 hover:text-teal-400 rounded transition group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-slate-700 text-teal-500">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</span>
                <span className="text-sm font-medium">{profile.email}</span>
              </div>
            </a>

            <a 
              href={`tel:${profile.phone.replace(/\s/g, '')}`} 
              className="flex items-center gap-3 p-3 text-slate-300 hover:bg-slate-800 hover:text-teal-400 rounded transition group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-slate-700 text-teal-500">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</span>
                <span className="text-sm font-medium">{profile.phone}</span>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500 selection:text-teal-900">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header / Hero */}
        <header className="grid md:grid-cols-2 gap-8 items-center mb-16">
          
          {/* Left Column: Text & Buttons */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-6">
              {profile.title}
            </h2>
            <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-8">
              {profile.about}
            </p>

            {/* Action Buttons Area */}
            <div className="flex flex-wrap gap-4 relative z-10">
              <ContactDropdown />
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 text-slate-300 rounded hover:border-teal-500 hover:text-teal-400 transition flex items-center gap-2"
              >
                View Resume
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          {/* On mobile (default), it's order-1 (top). On desktop (md:), it's order-2 (right). */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-2xl">
              <Image
                src="/profile.JPG"
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </header>

        {/* Experience Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-teal-500 inline-block rounded"></span> Experience
          </h3>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="group relative grid md:grid-cols-4 gap-4 p-4 rounded-lg hover:bg-slate-900/50 transition">
                <div className="text-sm text-slate-500 uppercase tracking-wide mt-1">
                  {job.period}
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-lg font-medium text-slate-100 group-hover:text-teal-400 transition">
                    {job.role} · {job.company}
                  </h4>
                  <p className="text-slate-400 mt-2 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-teal-500 inline-block rounded"></span> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group block bg-slate-900 p-6 rounded-xl hover:ring-2 hover:ring-teal-500/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                    <Shield size={24} />
                  </div>
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-teal-400 transition" />
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {project.tagline}
                </p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0,3).map(t => (
                    <li key={t} className="text-xs px-3 py-1 bg-slate-800 text-teal-300 rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>

        {/* Certifications Grid */}
        <section>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-teal-500 inline-block rounded"></span> Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-slate-800 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition">
                <div className="relative w-12 h-12 shrink-0 bg-white/5 rounded-full p-1 overflow-hidden flex items-center justify-center">
                   {cert.badge ? (
                      <Image 
                        src={cert.badge} 
                        alt={cert.name} 
                        width={48} 
                        height={48} 
                        className="object-contain w-full h-full"
                      />
                   ) : (
                      <CheckCircle className="text-teal-500" />
                   )}
                </div>
                <span className="text-slate-300 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}     