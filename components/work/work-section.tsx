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
    company: 'Amazon Web Services',
    position: 'Incoming SWE',
    link: 'https://aws.amazon.com/sdk-for-python',
    date: 'Feb 2025',
    description: 'Returning to AWS SDK and Tools',
  },
  {
    company: 'Amazon Web Services',
    position: 'SWE Intern',
    link: 'https://aws.amazon.com/sdk-for-python',
    date: 'Jun 2024 - Aug 2024',
    description: 'Built an automation tool for paginator model generation and integrated it into the Botocore CI/CD pipeline',
  },
  {
    company: 'Amazon Alexa',
    position: 'SWE Intern',
    link: 'https://alexa.amazon.com',
    date: 'May 2023 - Aug 2023',
    description: 'Deployed a phrase generator microservice for user voice authentication on Alexa devices',
  },
  {
    company: 'A² Robotics Lab',
    position: 'Researcher',
    link: 'https://a2r-lab.org',
    date: 'Sep 2022 - May 2023',
    description: 'Optimized robotic motion planning algorithms using parallel CUDA C++ and NVIDIA GPUs',
  },
];

const WorkSection = () => {
  return (
    <div className='flex flex-col gap-4 w-1/2 pr-6'>
      <div className='text-xl pb-2'>
        work
      </div>
      <div className='flex flex-col'>
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      <div className='flex flex-col'>
        <Link href={"/docs/resume.pdf"} className='font-medium underline underline-offset-4 decoration-1 decoration-muted-foreground hover:text-muted-foreground'>view resume →</Link>
      </div>
      </div>
    </div>
  )
}

export default WorkSection;