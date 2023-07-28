import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface Props {
  items: any;
}
const Card: FC<Props> = ({ items }) => {
  return (
    <>
      <div
        id="CardMain"
        className="glass  w-full max-w-sm space-y-5 mt-4 hover:bg-slate-800/70"
      >
        <p className="text-[#A9FF1C] text-2xl font-bold text-center pt-3">
          {items.name}
        </p>
        <Image
          src={"/images/pt.png"}
          alt="gymIMG"
          width={350}
          height={390}
          className="p-3 rounded-2xl"
        />
        <div className="flex justify-between mx-5 pb-8">
          <p className="text-white text-sm ">
            <span className="text-white font-semibold text-sm">Location</span> :
            {items.location}
          </p>
          <Link href={""}>
            <button className="bg-[#A9FF1C] text-black text-base font-semibold rounded-full w-16 hover:bg-[#8cdb15]">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
