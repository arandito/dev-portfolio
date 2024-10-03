import Work from "@/components/work/work";
import { Card } from "@/components/ui/card";

interface WorkProps {
  company: string;
  position: string;
  link: string;
  date: string;
  description: string;
}

const works: WorkProps[] = [
  {
    company:'amazon web services',
    position:'sde intern',
    link:'https://aws.amazon.com/sdk-for-python',
    date:'(jun 2024 - aug 2024)',
    description:'built an automation tool for paginator model generation and integrated it into the botocore ci/cd pipeline',
  },
  {
    company:'amazon alexa',
    position:'sde intern',
    link:'https://alexa.amazon.com',
    date:'(may 2023 - aug 2023)',
    description:'developed a text phrase generator and validator microservice for voice authentication on alexa devices',
  },
  {
    company: 'accessible and accelerated robotics lab',
    position:'researcher',
    link:'https://a2r-lab.org',
    date:'(sep 2022 - may 2023)',
    description:'optimized robotic motion planning algorithms by 3-4x using parallel cuda c++ and nvidia gpus',
  },
  {
    company: 'columbia university',
    position:'course assistant',
    link:'https://bulletin.columbia.edu/columbia-college/departments-instruction/computer-science/',
    date:'(aug 2022 - dec 2022)',
    description:'assisted professor brian borowski in teaching coms 3134 data structures in java for over 400 students',
  },
  {
    company: 'view resume →',
    position:'',
    link:'/docs/resume.pdf',
    date:'',
    description:'',
  },
];

const WorkSection = () => {
  return (
    <Card className='flex flex-col gap-4 w-full sm:w-1/2 my-10 pt-6 pb-2 px-6'>
      <div className='text-2xl font-bold text-blue-700 dark:text-blue-600'>work</div>
      <div className='flex flex-col'>
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </Card>
  )
}

export default WorkSection;