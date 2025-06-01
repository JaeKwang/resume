'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectName = params?.name;
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (projectName) {
      import(`@/data/projects/${projectName}.json`)
        .then((data) => setProjectData(data.default))
        .catch((err) => console.error("Failed to load project data:", err));
    }
  }, [projectName]);

  if (!projectData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const roleStackBadges = projectData.role
    .split(',')
    .map((tech: string) => tech.trim())
    .map((tech: string, index: number) => (
      <span
        key={index}
        className="inline-block bg-gray-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
      >
        {tech}
      </span>
    ));

  const techStackBadges = projectData.techStack
    .split(',')
    .map((tech: string) => tech.trim())
    .map((tech: string, index: number) => (
      <span
        key={index}
        className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
      >
        {tech}
      </span>
    ));

  return (
    <section id="hobby" className="px-6 py-24 bg-gray-100">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{projectData.title}</h1>
        <p className="text-md text-gray-600 mb-1">📅 기간: {projectData.duration}</p>
        <p className="text-md text-gray-600 mb-1">👥 인원: {projectData.members}</p>
        <p className="text-md text-gray-600 mb-1">🏢 발주처: {projectData.client}</p>
        <p className="text-md text-gray-600 mb-1">🎯 목표: {projectData.summary}</p>
        <div className="mt-2 mb-6 flex items-start">
          <span className="whitespace-nowrap mt-1">🔧 담당 역할:</span>
          <div className="ml-2 flex flex-col">{roleStackBadges}</div>
        </div>
        <div className="mt-2 mb-6 flex items-start">
          <span className="whitespace-nowrap mt-1">🛠️ 사용 기술:</span>
          <div className="ml-2 flex flex-wrap">{techStackBadges}</div>
        </div>
        
        <hr className="my-8 border-t border-gray-300" />

        <div className="space-y-3 flex flex-col">
          {projectData.data.map((item: any, index: number) => (
            <div key={index}>
              <p className="text-lg leading-relaxed" style={{ textIndent: '1em' }}>
                {item.text}
                <span className="text-sm text-gray-600">
                  {item.text_S}
                </span>
              </p>
              {item.image_L && (
                <div className="my-4 flex justify-center">
                  <Image
                    src={item.image_L}
                    alt={`project-image-${index}`}
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md prohibit-copy"
                  />
                </div>
              )}
              {item.image && (
                <div className="my-4 flex justify-center">
                  <Image
                    src={item.image}
                    alt={`project-image-${index}`}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md prohibit-copy"
                  />
                </div>
              )}
              {"list" in item && (
              <ul className="list-disc pl-6 space-y-1 ml-8">
                {item.list.map((li: string, liIdx: number) => (
                  <li key={liIdx} className="text-base text-gray-700">{li}</li>
                ))}
              </ul>
            )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
