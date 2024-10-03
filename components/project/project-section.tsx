import Project from "@/components/project/project";
import { Card } from "@/components/ui/card";

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
  {
    name: "all projects →",
    link: "https://github.com/arandito",
    date: "",
    description: "",
  },
];

const ProjectSection = () => {
  return (
    <Card className='flex flex-col gap-4 w-full sm:w-1/2 mb-10 sm:mt-10 pt-6 pb-2 px-6'>
      <div className='text-2xl font-bold text-blue-700 dark:text-blue-600'>projects</div>
      <div className='flex flex-col'>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </Card>
  )
}

export default ProjectSection;