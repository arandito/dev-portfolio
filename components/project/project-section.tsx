import Project from "@/components/project/project";
import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

const projects: ProjectProps[] = [
  {
    name: "foodie-radar",
    link: "https://foodieradar.antonioaranda.dev",
    date: "Sep 2024",
    description:
      "Web app that recommends restaurants based on user cravings and location",
  },
  {
    name: "travel-buds",
    link: "https://github.com/aarandaa/travel-buds",
    date: "Jan 2024",
    description:
      "iOS chat app that matches travelers by destination, interests, and trip dates",
  },
  {
    name: "air-quality-alert",
    link: "https://x.com/airquality_usa",
    date: "Jun 2023",
    description:
      "Automated twitter bot that posts air quality alerts for 75 US cities",
  },
  {
    name: "international-wordle",
    link: "https://international-wordle.antonioaranda.dev",
    date: "Sep 2022",
    description:
      "Wordle clone with multiple languages and unlimited retries",
  },
];

const ProjectSection = () => {
  return (
    <div className='flex flex-col gap-4 w-1/2 pr-6'>
      <div className='text-xl pb-2'>
        projects
      </div>
      <div className='flex flex-col'>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
        <div className='flex flex-col'>
          <Link href={"https://github.com/arandito"} className='font-medium underline underline-offset-4 decoration-1 decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>all projects →</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;