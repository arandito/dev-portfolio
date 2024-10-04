import { Icons } from "@/components/icons";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const Links = () => {
  return (
    <Card className='flex flex-col gap-4 w-full p-6 mb-2'>
      <div>
        <span className='text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-sky-500'>
          links
        </span>
      </div>
      <div className="flex flex-col sm:flex-row text-lg gap-8">
        <a href="mailto:me@antonioaranda.dev" target="_blank" className="flex flex-row items-center mr-2 hover:text-blue-500 dark:hover:text-blue-300">
          <Icons.mail className="h-6 w-6 mr-2" />
          email
        </a>
        <Link href="https://github.com/arandito" target="_blank" className="flex flex-row items-center mr-2 hover:text-blue-500 dark:hover:text-blue-300">
          <Icons.gitHub className="h-6 w-6 mr-2" />
          github
        </Link>
        <Link href="https://linkedin.com/in/antonio-aranda1" target="_blank" className="flex flex-row items-center mr-2 hover:text-blue-500 dark:hover:text-blue-300">
          <Icons.linkedin className="h-5 w-5 mr-2" />
          linkedin
        </Link>
      </div>
    </Card>
  )
}

export default Links;