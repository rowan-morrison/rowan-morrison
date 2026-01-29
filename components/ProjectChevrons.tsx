// "use client";
// import { useRouter } from "next/navigation";

// type ProjectChevronsProps = {
//   prevProject: { id: string } | null;
//   nextProject: { id: string } | null;
//   hide: boolean;
// };

// export default function ProjectChevrons({ prevProject, nextProject, hide }: ProjectChevronsProps) {
//   const router = useRouter();

//   return (
//     <div
//       className={`fixed inset-x-0 bottom-6 flex justify-between px-4 transition-opacity ease-in-out duration-300 z-[9999] pointer-events-auto
//         ${hide ? "opacity-0" : "opacity-100"}
//       `}
//     >
//       {prevProject && (
//         <div className="relative backdrop-blur-sm rounded-full transition ease-in-out sm:opacity-100 md:opacity-70 md:hover-opacity-100">
//           <button
//             className="pointer-events-auto rounded-full p-3"
//             aria-label="Previous project"
//             onClick={() => router.push(`/projects/${prevProject.id}`)}
//           >
//             <svg className="mix-blend-difference" width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//           </button>
//         </div>
//       )}

//       {nextProject && (
//         <div className="relative backdrop-blur-sm rounded-full transition ease-in-out sm:opacity-100 md:opacity-70 md:hover-opacity-100">
//           <button
//             className="pointer-events-auto p-3"
//             aria-label="Next project"
//             onClick={() => router.push(`/projects/${nextProject.id}`)}
//           >
//             <svg className="mix-blend-difference" width="24px" height="24px" strokeWidth="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }