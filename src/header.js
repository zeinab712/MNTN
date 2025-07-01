function Header() {
    return (
        <div className="header relative z-10 flex justify-between items-center pt-6 px-6 md:px-20">
        {/*Logo*/}
        <div className="logo">
            <img src="./images/Logo.svg" alt="MNTN-Logo" className="h-4 md:h-6" />
        </div>

        {/*Nav Links*/}
        <div className="nav-link hidden md:block">
            <ul className="flex gap-6 text-white font-sans text-sm md:text-base">
            <li className="cursor-pointer hover:text-amber-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-200 hover:after:w-full after:transition-all after:duration-400">
                Equipment
            </li>
            <li className="cursor-pointer hover:text-amber-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-200 hover:after:w-full after:transition-all after:duration-400">
                About us
            </li>
            <li className="cursor-pointer hover:text-amber-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-200 hover:after:w-full after:transition-all after:duration-400">
                Blog
            </li>
            </ul>
        </div>

        {/*Profile + Menu Icon */}
        <div className="profile flex items-center gap-4 text-white">
            <i className="fa-regular fa-user cursor-pointer text-xl"></i>
            <p className="font-sans cursor-pointer hidden md:block">Account</p>
            <i className="fa-solid fa-bars-staggered cursor-pointer text-xl"></i>
        </div>
        </div>
    );
}
export default Header;
