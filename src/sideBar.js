function Sider() {
    return (

    <div className="sider side-nav flex flex-row fixed top-1/2 right-10 transform -translate-y-1/2 z-20 text-amber-50 p-4 items-center text-right">
            {/* Column containing links*/}
            <div className="links flex flex-col gap-0">
                <a href="#start" className="text-lg font-semibold p-5 border-r-2 border-white hover:border-amber-200 hover:text-amber-200 transition-all duration-300">Start</a>
                <a href="#1" className="text-lg font-semibold p-5 border-r-2 border-white hover:border-amber-200 hover:text-amber-200 transition-all duration-300">01</a>
                <a href="#2" className="text-lg font-semibold p-5 border-r-2 border-white hover:border-amber-200 hover:text-amber-200 transition-all duration-300">02</a>
                <a href="#3" className="text-lg font-semibold p-5 border-r-2 border-white hover:border-amber-200 hover:text-amber-200 transition-all duration-300">03</a>
            </div>
    </div>


    );

}
export default Sider;