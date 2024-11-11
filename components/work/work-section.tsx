import Work from "@/components/work/work";
import Link from "next/link";

interface WorkProps {
  company: string;
  position: string;
  link: string;
  date: string;
  description: string;
}

const works: WorkProps[] = [
  {
    company: 'amazon web services',
    position: 'incoming swe',
    link: 'https://aws.amazon.com/sdk-for-python',
    date: '(feb 2025)',
    description: 'returning to aws sdk and tools',
  },
  {
    company: 'amazon web services',
    position: 'swe intern',
    link: 'https://aws.amazon.com/sdk-for-python',
    date: '(jun 2024 - aug 2024)',
    description: 'built an automation tool for paginator model generation and integrated it into the botocore ci/cd pipeline',
  },
  {
    company: 'amazon alexa',
    position: 'swe intern',
    link: 'https://alexa.amazon.com',
    date: '(may 2023 - aug 2023)',
    description: 'developed a text phrase generator and validator microservice for voice authentication on alexa devices',
  },
  {
    company: 'a² robotics lab',
    position: 'researcher',
    link: 'https://a2r-lab.org',
    date: '(sep 2022 - may 2023)',
    description: 'optimized robotic motion planning algorithms by 3-4x using parallel cuda c++ and nvidia gpus',
  },
];

const WorkSection = () => {
  return (
    <div className='flex flex-col gap-4 w-full sm:w-1/2 pr-6 pb-5 sm:pb-0'>
      <div>
        <span className='text-xl font-semibold'>work</span>
      </div>
      <div className='flex flex-col'>
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      <div className='flex flex-col'>
        <Link href={"/docs/resume.pdf"} className='font-medium underline underline-offset-4 decoration-wavy decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>view resume →</Link>
      </div>
      </div>
    </div>
  )
}

export default WorkSection;