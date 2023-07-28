const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-600/70 mt-7 h-72  justify-between px-5">
      <div className="flex flex-col ">
        <p className="text-white text-[80px] font-bold">
          True<span className="text-[#A9FF1C]">Fit</span>
        </p>
        <p className="text-white font-semibold text-base -mt-4 pl-11">
          Your true fitness buddy
        </p>
      </div>
      <div className="flex flex-col text-white text-sm font-semibold">
        <p>Join Our Socials</p>
      </div>
    </div>
  );
};

export default Footer;
