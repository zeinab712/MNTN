function Footer(Props) {
    return (
        <div className="relative flex flex-col md:flex-row flex-wrap justify-between items-start px-4 sm:px-10 md:px-20 lg:px-[250px] max-w-[1600px] mx-auto w-full mt-[250px] mb-[60px]">
        <div className="col self-start mt-1 mb-20">
            <img src="./images/Logo.svg" alt="MNTN-Logo" className="h-6" />
            <p className="text-white pt-5 pb-10 text-sm leading-relaxed">
            {" "}
            Get out there & discover your next <br /> slope, mountain &
            destination!
            </p>
            <span className="text-white text-xs opacity-60">
            © 2025 MNTN. All rights reserved. <br /> Made by Zeinab Hassan.
            </span>
        </div>

        <div className="col self-start mb-10">
            <p className="text-amber-200 text-lg font-bold pb-2">
            More on The Blog
            </p>
            <ul className="text-white text-sm space-y-2">
            <li>About MNTN</li>
            <li>Contributors & Writers</li>
            <li>Write For Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="col self-start mr-[80px]">
            <p className="text-amber-200 text-lg font-bold pb-2">More on MNTN</p>
            <ul className="text-white text-sm space-y-2">
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
            </ul>
        </div>
        </div>
    );
}
export default Footer;
