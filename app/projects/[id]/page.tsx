'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { profile, projects } from '../../data';
import {
  ExternalLink,
  ChevronDown,
  Mail,
  Phone,
  Shield,
  CheckCircle,
} from 'lucide-react';

// Simple contact dropdown reused from the home page
function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-950 font-bold rounded hover:bg-teal-400 transition"
      >
        Contact Me
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
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
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Email
                </span>
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
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Phone
                </span>
                <span className="text-sm font-medium">{profile.phone}</span>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

type ProjectPageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500 selection:text-teal-900">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-400 hover:text-teal-400 transition mb-4"
        >
          ← Back to projects
        </Link>

        {/* Project header */}
        <header className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-teal-400 mb-2">
              {project.client}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              {project.title}
            </h1>
            <p className="text-slate-400 text-lg mb-6">{project.tagline}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-slate-800 text-teal-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
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

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-2xl">
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

        {/* Details */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">
              Challenge
            </h2>
            <p className="text-slate-400 leading-relaxed">{project.challenge}</p>

            <h2 className="text-xl font-semibold text-slate-100 mt-6">
              Solution
            </h2>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>

            <h2 className="text-xl font-semibold text-slate-100 mt-6">Impact</h2>
            <p className="text-slate-400 leading-relaxed">{project.impact}</p>
          </div>

          <aside className="space-y-4">
            <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/40">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-teal-400" size={20} />
                <h3 className="text-sm font-semibold text-slate-100">
                  Client Reference
                </h3>
              </div>
              <p className="text-sm text-slate-300 font-medium">
                {project.reference.name}
              </p>
              <p className="text-xs text-slate-400">{project.reference.contact}</p>
            </div>

            <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/40 flex items-center gap-3">
              <CheckCircle className="text-teal-400" size={20} />
              <span className="text-sm text-slate-300">
                Project delivered by {profile.name}, {profile.title}.
              </span>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}     