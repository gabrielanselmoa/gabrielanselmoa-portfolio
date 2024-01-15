import { BsHourglassSplit } from "react-icons/bs"

const Loading = () => {
  return (
    <section className="container flexbox-row items-center justify-center gap-4">
        <p className="text-sm font-normal italic mb-4 flex flex-row items-center gap-2">
            Loading 
            <span className="animate-spin duration-1000"><BsHourglassSplit size={20}/></span>
        </p>    
    </section>
  )
}
export default Loading