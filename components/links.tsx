import { Icons } from "@/components/icons";
import Link from "next/link";

const Links = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <span className='text-xl font-semibold'>
          contact
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <a href="mailto:me@antonioaranda.dev" target="_blank" className="flex flex-row items-center mr-2 hover:text-zinc-400 dark:hover:text-zinc-400">
          <Icons.mail className="h-5 w-5 mr-2" />
          email
        </a>
        <Link href="https://github.com/arandito" target="_blank" className="flex flex-row items-center mr-2 hover:text-zinc-400 dark:hover:text-zinc-400">
          <Icons.gitHub className="h-5 w-5 mr-2" />
          github
        </Link>
        <Link href="https://linkedin.com/in/antonio-aranda1" target="_blank" className="flex flex-row items-center mr-2 hover:text-zinc-400 dark:hover:text-zinc-400">
          <Icons.linkedin className="h-4 w-4 mr-2" />
          linkedin
        </Link>
      </div>
    </div>
  )
}

export default Links;