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
    date: "sep 2024",
    description:
      "web app that recommends restaurants based on user cravings and location, ending the 'where to eat' debate",
  },
  {
    name: "travel-buds",
    link: "https://github.com/aarandaa/travel-buds",
    date: "jan 2024",
    description:
      "ios chat app that matches travelers according to location, interests, and trip dates",
  },
  {
    name: "air-quality-alert",
    link: "https://x.com/airquality_usa",
    date: "jun 2023",
    description:
      "automated twitter bot that posts air quality alerts for the 75 most populous cities in the us",
  },
  {
    name: "international-wordle",
    link: "https://wordle.antonioaranda.dev/",
    date: "aug 2022",
    description:
      "expansion of wordle game with unlimited retries, multiple languages, and varying difficulties",
  },
];

const ProjectSection = () => {
  return (
    <div className='flex flex-col gap-4 w-full sm:w-1/2 pr-6 pb-1 sm:pb-0'>
      <div>
        <span className='text-xl font-semibold'>
          projects
        </span>
      </div>
      <div className='flex flex-col'>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
        <div className='flex flex-col'>
          <Link href={"https://github.com/arandito"} className='font-medium underline underline-offset-4 decoration-wavy decoration-zinc-400 hover:text-zinc-400 dark:decoration-zinc-400 dark:hover:text-zinc-400 dark:hover:text-foreground'>all projects →</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;