import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

const Project = (project: ProjectProps) => {
  return (
    <div className='flex flex-col gap-3 mb-6'>
      <div>
        <Link href={project.link} className='font-medium underline underline-offset-4 decoration-wavy decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>{project.name}</Link>
      </div>
      <div className='text-zinc-500 dark:text-zinc-400'>{project.date}</div>
      <div className='text-zinc-500 dark:text-zinc-400'>{project.description}</div>
    </div>
  )
}

export default Project;