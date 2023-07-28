const Stats = () => {
  return (
    <>
      <div
        id="MainCont"
        className=" flex flex-col bg-slate-600/30  space-y-6 mt-2 "
      >
        <div className="text-[#A9FF1C] font-semibold text-lg   mt-28 ml-4">
          Our track record
        </div>
        <div className="text-4xl text-white font-bold ml-4">
          Trusted by thousands of <br /> members Worldwide
        </div>
        <p className="leading-relaxed ml-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          modi non sed in officiis
          <br /> perferendis tempore amet rerum nesciunt veniam, consectetur
          tenetur. <br />
          Asperiores consectetur voluptatum ex eveniet{" "}
        </p>
        <div id="numbers" className="flex text-[#A9FF1C] justify-between pb-9">
          <div className="flex flex-col   p-3 ml-24">
            <p className="text-4xl font-bold hover:text-6xl ">30+</p>
            <p className="text-white"> K-11 Certified Trainers</p>
          </div>
          <div className="flex flex-col  ">
            <p className="text-4xl font-bold hover:text-6xl">9000+</p>
            <p className="text-white">
              {" "}
              Members achieved their
              <br />
              fitness goals
            </p>
          </div>
          <div className="flex flex-col  mr-24">
            <p className="text-4xl font-bold hover:text-6xl">75%</p>
            <p className="text-white"> Success rate</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stats;
