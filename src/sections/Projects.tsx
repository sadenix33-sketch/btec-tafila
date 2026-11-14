import { useState } from 'react';
import { ExternalLink, FolderOpen } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import Modal from '@/components/Modal';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { PROJECTS } from '@/data/projects';
import type { Project, ProjectFile } from '@/data/types';
import { toGooglePreviewUrl } from '@/lib/google';

interface ViewerState {
  project: Project;
  file: ProjectFile;
}

function FileViewer({ viewer }: { viewer: ViewerState }) {
  const { project, file } = viewer;
  const previewUrl = file.kind === 'pdf' ? file.url : toGooglePreviewUrl(file.url);

  return (
    <div className="flex flex-col gap-3">
      {previewUrl ? (
        <iframe
          src={previewUrl}
          title={project.title}
          loading="lazy"
          className="h-[75vh] w-full rounded-xl bg-mist ring-1 ring-navy/10"
        />
      ) : (
        <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-xl bg-mist text-center">
          <p className="text-sm text-ink/70">تعذّر عرض هذا الملف داخلياً.</p>
          <a
            href={file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-royal"
          >
            <ExternalLink className="h-4 w-4" />
            فتح في نافذة جديدة
          </a>
        </div>
      )}
      <div className="flex justify-center">
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-royal transition hover:text-navy"
        >
          <ExternalLink className="h-4 w-4" />
          فتح الملف في نافذة جديدة (Google)
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [viewer, setViewer] = useState<ViewerState | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 bg-mist py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="أعمال الطلبة"
          title="من أفكار طلابنا إلى مشاريع حقيقية"
          description="في تخصص إدارة الأعمال لا يكتفي طلبتنا بدراسة المفاهيم، بل يطبقون ما يتعلمونه من خلال مشاريع وأبحاث وتقارير عملية تساعدهم على فهم عالم الأعمال وتحليل المؤسسات واتخاذ القرارات. اضغط «عرض المستند» أو «عرض التقديمي» لتصفح الملف كاملاً هنا في الموقع."
        />

        {PROJECTS.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              icon={FolderOpen}
              title="المشاريع قيد الإضافة"
              text="ستظهر هنا أعمال الطلبة ومشاريعهم التطبيقية فور نشرها."
            />
          </div>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 100}>
                <ProjectCard
                  project={project}
                  onPreview={(item, file) => setViewer({ project: item, file })}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {viewer && (
        <Modal title={viewer.project.title} onClose={() => setViewer(null)} wide>
          <FileViewer viewer={viewer} />
        </Modal>
      )}
    </section>
  );
}
