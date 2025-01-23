import Image from "next/image";

export default function TeamCard() {
    return (
        <div>
            {/* squidgame */}


            {/* <div className="">
                <div className="h-[300px] w-[300px] rotate-[45deg] rounded-md overflow-hidden bg-squidPink">
                    <div className="h-[350px] w-[350px] rotate-[-45deg] top-[] left-[]">
                        <p className="relative z-10 text-white top-[225px] left-[110px] text-[35px] font-mono drop-shadow-2xl">Naruto</p>
                        <Image src={"/team/naruto.png"} alt="icon" fill className="absolute hover:scale-110 delay-200 ease-in-out" />
                    </div>
                </div>
            </div> */}


            {/* glass theme */}
            <div className="bg-black/5 rounded-xl border-[2px] dark:border-squidTeal/50 border-squidPink/50 hover:dark:border-squidPink/50 hover:border-squidTeal/50 transition-colors duration-300 backdrop-blur-lg border-squidPink dark:text-white text-black px-20 py-12">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-[180px] h-[180px] relative overflow-hidden rounded-full border-[1px] dark:border-squidTeal border-squidPink">
                        <Image src={"/team/naruto.png"} alt="logo" fill quality={100} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-medium text-[22px]">Ayush Anshu</h1>
                        <p className="font-light text-squidPink">Web Team Lead</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 