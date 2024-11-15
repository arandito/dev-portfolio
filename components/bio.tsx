import Link from "next/link";

const Bio = () => {
  return (
    <div className='flex flex-col py-8 text-muted-foreground text-lg gap-5 max-w-[30rem]'>
      <div className='leading-6'>
        Software engineer based in NYC and recent CS grad from Columbia University.
      </div>
      <div className='leading-6'>
        Currently, I&apos;m an <span className='text-foreground'>incoming software engineer at AWS</span>.
      </div>
      <div className='leading-6'>
        Previously, I was a software engineer intern at <span className='text-foreground'>Amazon Alexa</span> and a robotics researcher at <span className='text-foreground'>A²R lab</span>.
      </div>
      <div className='leading-6'>
        Check out some of my <Link href="/projects" className='text-foreground underline underline-offset-4 decoration-muted-foreground decoration-1 hover:text-muted-foreground'>projects</Link> and past <Link href="/work" className='text-foreground underline underline-offset-4 decoration-muted-foreground decoration-1 hover:text-muted-foreground'>work</Link>.
      </div>
    </div>
  )
}

export default Bio;
