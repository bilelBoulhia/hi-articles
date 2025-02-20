
import WordTransform from "@/components/ui/animated-headingV2";


export default async function Home() {
  return (

      <div className="flex justify-center items-center h-screen w-full relative flex-row px-4">
          <div className=' text-xl flex-col items-start justify-center    relative  w-[60%]'>
              <WordTransform className="font-bold text-8xl" initialWord="WELCOME TO  " transformedWord="HI E-JOURNAL" />
          </div>
          <div className=' flex flex-col justify-center items-center h-full  w-[40%]'>

          </div>

      </div>

  );
}
