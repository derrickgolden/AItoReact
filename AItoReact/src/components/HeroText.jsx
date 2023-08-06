
const HeroText = () =>(
    <div className="absolute top-[5%] right-[5%] w-[60%] sm:w-[50%] font-sans">
        <h1 className="uppercase text-right underline underline-offset-8 text-xl 
        sm:text-2xl md:text-4xl font-bold h-10">
            yoga time
        </h1>
        <div className="flex flex-row gap-2 py-3 h-full ">
            <p className="text-right text-base text-blueyy">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, 
                praesentium totam nihil magnam ipsam qui. Accusantium 
            </p>
            <pre className="bg-black w-1 "> 
            </pre>
        </div>
        <div className="text-right">
            <a href="https://nyarangiportfolio.netlify.app/" target="_blank"
            className="uppercase text-white w-28 h-5 rounded bg-[#de6342] py-1 
            px-3 hover:font-bold tracking-wide">
                read more
            </a>
        </div>
    </div>
)

export default HeroText;
