import Link from 'next/link';
import { projects } from '../../data'; // Imports data from app/data.ts
import { ArrowLeft, User, Shield, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

// 1. Define Props with params as a Promise (Required for Next.js 15+)
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  // 2. Await the params
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">{project.title}</h1>
        <p className="text-xl text-slate-400 mb-8">{project.client}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-teal-900/30 border border-teal-900 text-teal-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">The Challenge</h3>
            <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">The Solution</h3>
            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">The Impact</h3>
            <p className="text-slate-300 leading-relaxed">{project.impact}</p>
          </div>

          {/* Reference */}
          {project.reference && (
            <div className="border-t border-slate-700 pt-8 mt-8">
               <h3 className="text-sm font-bold uppercase tracking-wider text-teal-500 mb-4">Verification</h3>
               <div className="flex items-start gap-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="bg-slate-800 p-3 rounded-full">
                    <User className="text-slate-300" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 text-lg">{project.reference.name}</p>
                    <div className="text-slate-400 text-sm mt-1">
                       <span className="text-teal-400 font-mono">{project.reference.contact}</span>
                    </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// 3. Generate static paths for faster loading
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}