function Content() {
    return (

        <div className="content relative z-10 flex items-center px-4 md:px-0 mt-[100px] md:mt-[150px] flex-col h-full" id="start">
                <div className="laligned flex flex-col text-left gap-4 w-fit">

                    <div className="secondary ">
                        <img src="./images/Rectangle 2.1.png" alt="" className=" inline"/>
                        <p className=" pl-6 text-amber-200 inline tracking-[4px] text-[15px] font-sans">A HIKING GUID</p>
                    </div>
                    <div className="main">
                        <h1 className="text-3xl md:text-6xl  text-amber-50 tracking-[1px] font-['Abhaya_Libre'] font-bold ">Be prepared for the</h1>
                        <h1 className="text-3xl md:text-6xl  text-amber-50 tracking-[1px] font-['Abhaya_Libre'] font-bold "> Mountains and beyond!</h1>
                    </div>
                    <div className="tip flex items-center text-amber-50 ">
                        <p className="mr-3">scroll down</p>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>

                </div>
            </div>


    );

}
export default Content;