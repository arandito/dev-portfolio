import Link from "next/link";

interface WorkProps {
  company: string;
  position: string;
  link: string;
  date: string;
  description: string;
}

const Work = (work: WorkProps) => {
  return (
    <div className='flex flex-col gap-3 mb-6 text-lg'>
      <Link href={work.link} className='underline underline-offset-8 text-blue-500 dark:text-blue-300 hover:text-foreground dark:hover:text-foreground'>{work.company}</Link>
      <div>{work.position} {work.date}</div>
      <div>{work.description}</div>
    </div>
  )
}

export default Work;