import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

const Project = (project: ProjectProps) => {
  return (
    <div className='flex flex-col gap-3 mb-6 text-lg'>
      <Link href={project.link} className='underline underline-offset-8 text-blue-500 dark:text-blue-300 hover:text-foreground dark:hover:text-foreground'>{project.name}</Link>
      <div>{project.date}</div>
      <div>{project.description}</div>
    </div>
  )
}

export default Project;