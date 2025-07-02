function Section({secNum, header1 , header2, textContent, dir, src, id, title, value}) {
    return (
        <div
        class={`relative flex justify-center px-4 mb-[200px] sm:px-10 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 ${
            dir === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
        id={id}
        >
        <h1
            className={`absolute top-[-60px] sm:${dir}-[50px] md:${dir}-[80px] lg:${dir}-[${value}] font-bold z-[50] text-[120px] md:text-[130px] lg:text-[150px] text-white opacity-[0.1] pointer-events-none select-none ${dir}-[20px]`}
        >
            {secNum}
        </h1>
        <div class="left relative z-10">
            <img src="./images/Rectangle 2.1.png" alt="" class="inline" />
            <p class="pl-6 text-amber-200 inline tracking-[4px] text-[15px] font-sans uppercase">
            {title}
            </p>
            <h1 class="text-3xl md:text-5xl text-amber-50 tracking-[1px] font-['Abhaya_Libre'] font-bold pt-[30px]">
            {header1}
            </h1>
            <h1 class="text-3xl md:text-5xl text-amber-50 tracking-[1px] font-['Abhaya_Libre'] font-bold">
            {header2}
            </h1>
            <p class="max-w-[500px] w-full break-words text-white pt-[30px]">
            {textContent}
            </p>
            <div class="more-sec flex flex-row items-center gap-5 mt-[30px] cursor-pointer">
            <p class="text-amber-200 text-sm capitalize">read more</p>
            <img
                src="images/arrow_downward_24px.png"
                alt=""
                class="w-50 h-50 object-contain"
            />
            </div>
        </div>
        <div class="right relative z-10">
            <img
            src={src}
            alt=""
            class="w-[300px] h-[400px] object-contain"
            />
        </div>
        </div>
    );
}
export default Section;
