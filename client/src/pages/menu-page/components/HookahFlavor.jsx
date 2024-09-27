import { FLAVOR } from "../../../assets";

const dummyData = [
  "ORANGE MINT",
  "BLUE MIST",
  "MIGHTY FREEZE",
  "LUV 66",
  "PEACH",
  "WATERMELON",
];

const HookahFlavor = () => {
  return (
    <div className="relative md:px-20 md:py-10 py-2 mt-[-30px] px-4 mx-16  xs:mx-2 ">
      <div className="relative border flex flex-col justify-center items-center py-10 border-white rounded-lg shadow-lg ">
        <img src={FLAVOR} alt="" />
        <div className="flex flex-wrap justify-center lg:gap-14 xl:gap-28  md:gap-10 gap-3 text-white mt-4 ">
          {dummyData.map((value, index) => (
            <h5
              key={index}
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl sm:text-[30px]"
            >
              {value}
            </h5>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center p-10"></div>
    </div>
  );
};

export default HookahFlavor;
