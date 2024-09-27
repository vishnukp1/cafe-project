const TermsAndNotices = () => {
  return (
    <div className="flex flex-col gap-1 md:gap-0 md:flex-row lg:mx-[150px] sm:mx-[50px]  font-kelly-slab xs:mx-[50px]">
      <div className="flex-grow md:w-1/3 px-4 bg-[#C5A059] h-[87px] pt-2 md:border border-white border-solid">
        <p>
          Food may not be refunded. If your food was made incorrectly we will
          remake it for you.
        </p>
      </div>
      <div className="flex-grow md:w-1/3 px-4 bg-[#C5A059] md:border-t pt-2  md:border-b md:border-white border-l border-r border-solid">
        <p>18% service charge will be added to all checks over $100</p>
      </div>
      <div className="flex-grow md:w-1/3 px-4 bg-[#C5A059] h-[87px] pt-2  md:border border-white border-solid">
        <p>
          Consuming raw or undercooked meats, poultry, seafood, shellfish or
          eggs may increase your risk of foodborne illness
        </p>
      </div>
    </div>
  );
};

export default TermsAndNotices;
