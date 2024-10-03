import { MapPin, Briefcase, GraduationCap } from "lucide-react"

const Info = () => {
  return(
    <div className="flex flex-col py-2 gap-2 mt-8">
      <div className="flex flex-row items-center text-xl">
        <MapPin className="h-6 w-6 mr-2" />
        new york city
      </div>
      <div className="flex flex-row items-center text-xl">
        <Briefcase className="h-6 w-6 mr-2" />
        ex-sde intern @ aws
      </div>
      <div className="flex flex-row items-center text-xl">
        <GraduationCap className="h-6 w-6 mr-2" />
        b.a. in cs @ columbia 
      </div>
    </div>
  )
}

export default Info;