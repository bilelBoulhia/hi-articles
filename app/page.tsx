
import WordTransform from "@/components/ui/animated-headingV2";


export default async function Home() {
  return (

      <div className="flex justify-center items-center h-screen w-full relative flex-row px-4">

          <div className=' text-xl flex-col items-start justify-center    relative  w-[60%]'>
              <span className='text-4xl md:text-7xl tracking-[0.60rem] font-bold  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>Welcome to </span>
              <WordTransform className='text-4xl md:text-7xl font-bold ' initialWord="SECRETARIAT" transformedWord="HI-EJOURNAL"/>
          </div>
          <div className=' flex flex-col justify-center items-center h-full  w-[40%]'>

          </div>

      </div>

  );
}
