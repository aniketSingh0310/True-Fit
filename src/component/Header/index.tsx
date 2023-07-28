import Link from "next/link";

const Header = () => {
  return (
    <div
      id="mainhead"
      className="flex justify-between md:flex-row items-center"
    >
      <div className="flex flex-row mt-7  gap-11 ml-5 ">
        <div className="text-white font-bold  text-base hover:bg-[#A9FF1C]  p-2 hover:text-black">
          Home
        </div>
        <div className="text-white font-bold text-base hover:bg-[#A9FF1C]  p-2 hover:text-black">
          Trainers
        </div>
        <div className="text-white font-bold text-base hover:bg-[#A9FF1C]  p-2 hover:text-black">
          Plans
        </div>
      </div>
      <div className="flex flex-col -ml-[92px]">
        <p className="text-white text-[80px] font-bold">
          True<span className="text-[#A9FF1C]">Fit</span>
        </p>
        <p className="text-white font-semibold text-base text-center -mt-4">
          Your true fitness buddy
        </p>
      </div>
      <div id="SignLog" className="flex mr-5 mt-7 gap-7 mr-10">
        <Link href="#">
          <button className=" bg-[#A9FF1C] p-2 border-solid  hover:bg-[#8cdb15] text-black  font-bold">
            Log In
          </button>
        </Link>
        <Link href="#">
          <button className=" bg-[#A9FF1C] p-2  hover:bg-[#8cdb15] text-black  font-bold">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
