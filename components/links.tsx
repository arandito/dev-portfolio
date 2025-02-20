import { Icons } from "@/components/icons";
import Link from "next/link";

const Links = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className="flex flex-row gap-4">
        <a 
          href="mailto:aranda-dev@proton.me" 
          target="_blank" 
          className="group flex flex-row items-center mr-2 text-muted-foreground"
        >
          <Icons.mail className="h-5 w-5 mr-2 group-hover:text-foreground hover:text-foreground" />
          <span className="group-hover:text-foreground hover:text-foreground">email</span>
        </a>
        <Link 
          href="https://github.com/arandito" 
          target="_blank" 
          className="group flex flex-row items-center mr-2 text-muted-foreground"
        >
          <Icons.gitHub className="h-5 w-5 mr-2 group-hover:text-foreground hover:text-foreground" />
          <span className="group-hover:text-foreground hover:text-foreground">github</span>
        </Link>
        <Link 
          href="https://linkedin.com/in/antonio-aranda1" 
          target="_blank" 
          className="group flex flex-row items-center mr-2 text-muted-foreground"
        >
          <Icons.linkedin className="h-4 w-4 mr-2 group-hover:text-foreground hover:text-foreground" />
          <span className="group-hover:text-foreground hover:text-foreground">linkedin</span>
        </Link>
      </div>
    </div>
  )
}

export default Links;