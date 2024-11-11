import { MapPin, Laptop, GraduationCap } from "lucide-react"

const Info = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pt-6 pb-2">
      <div className="flex flex-row items-center">
        <MapPin className="h-5 w-5 mr-2" />
        new york city
      </div>
      <div className="flex flex-row items-center">
        <Laptop className="h-5 w-5 mr-2" />
        engineering @ aws
      </div>
      {/* <div className="flex flex-row items-center">
        <GraduationCap className="h-5 w-5 mr-2" />
        cs @ columbia
      </div> */}
    </div>
  )
}

export default Info;