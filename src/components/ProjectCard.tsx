import { Download, Eye, FileText, Lock, Presentation } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Project, ProjectFile } from '@/data/types';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project, file: ProjectFile) => void;
}

interface FileAction {
  label: string;
  icon: LucideIcon;
  viewable: boolean;
}

function fileAction(kind: ProjectFile['kind']): FileAction {
  switch (kind) {
    case 'pdf':
      return { label: 'مشاهدة المشروع', icon: Eye, viewable: true };
    case 'gdoc':
      return { label: 'عرض المستند', icon: FileText, viewable: true };
    case 'gslides':
      return { label: 'عرض التقديمي', icon: Presentation, viewable: true };
    case 'docx':
      return { label: 'تحميل DOCX', icon: Download, viewable: false };
  }
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const files = project.files ?? (project.file ? [project.file] : []);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
      <div className="relative flex h-44 flex-col justify-between bg-gradient-to-br from-navy to-royal p-6 text-white">
        <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {project.type}
        </span>
        <FileText className="h-12 w-12 text-sky transition duration-500 group-hover:scale-110" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold leading-[1.2] text-navy">{project.title}</h3>
        <p className="flex-1 text-sm leading-[1.5] text-ink/75">{project.summary}</p>

        <dl className="flex flex-wrap gap-2 text-xs">
          <div className="rounded-full bg-mist px-3 py-1.5 text-navy">
            <dt className="sr-only">المجال</dt>
            <dd>{project.field}</dd>
          </div>
          {project.level && (
            <div className="rounded-full bg-mist px-3 py-1.5 text-navy">
              <dt className="sr-only">المستوى الدراسي</dt>
              <dd>{project.level}</dd>
            </div>
          )}
        </dl>

        <div className="mt-2 flex flex-wrap gap-2.5 border-t border-navy/10 pt-5">
          {files.length > 0 ? (
            files.map((file, index) => {
              const action = fileAction(file.kind);
              const Icon = action.icon;

              if (!action.viewable) {
                return (
                  <a
                    key={`${file.kind}-${index}`}
                    href={file.url}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy transition hover:border-royal hover:text-royal"
                  >
                    <Icon className="h-4 w-4" />
                    {action.label}
                  </a>
                );
              }

              return (
                <button
                  key={`${file.kind}-${index}`}
                  type="button"
                  onClick={() => onPreview(project, file)}
                  className={
                    index === 0
                      ? 'inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-royal active:scale-[0.98]'
                      : 'inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy transition hover:border-royal hover:text-royal active:scale-[0.98]'
                  }
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </button>
              );
            })
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-sm text-ink/60">
              <Lock className="h-4 w-4" />
              الملف قيد الإضافة
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
