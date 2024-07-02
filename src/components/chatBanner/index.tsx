import React from "react";
import DoubelTreuIcon from "../commons/icons/doubelTreuIcon";
import Image from "next/image";
import Link from "next/link";

const CheatBanner = () => {
  return (
    <div className="px-4">
      <div className="w-full mt-[17px]">
        <span className="text-sm text-brand-darkGray font-normal text-center w-full flex items-start justify-center  ">
          8/20/2020
        </span>

        <div className="mb-12 mt-5">
          <div className="flex flex-col items-end ">
            <div className="bg-[#007AFF] rounded-[6px] px-[8px] py-[4px] flex  relative">
              <Image
                src={"/assets/images/chateIcon.svg"}
                alt="img"
                width={15}
                height={39}
                className="absolute top-0 right-[-9px]"
              />

              <span className="text-sm text-white ">Hi team 👋</span>
              <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                <span className="text-xs text-white">11:31 AM</span>{" "}
                <DoubelTreuIcon />
              </div>
            </div>
            <div className="bg-[#007AFF] rounded-[6px] px-[8px] py-[4px] flex  relative mt-[6px]">
              <Image
                src={"/assets/images/chateIcon.svg"}
                alt="img"
                width={15}
                height={39}
                className="absolute top-0 right-[-9px] hidden"
              />

              <span className="text-sm text-white ">
                Anyone on for lunch today
              </span>
              <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                <span className="text-xs text-white">11:31 AM</span>{" "}
                <DoubelTreuIcon />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 pl-4 my-4">
            <Image
              src={"/assets/images/cheatavatar1.svg"}
              alt="img"
              width={32}
              height={32}
              className=""
            />
            <div className="bg-[#F2F2F7] rounded-[6px] px-[8px] py-[4px] flex flex-col  relative">
              <Image
                src={"/assets/images/chateIconeGray.svg"}
                alt="img"
                width={15}
                height={39}
                className="absolute top-0 left-[-9px]"
              />
              <div className="flex items-center gap-[10px]">
                <span className="text-[#2C2C2E] font-semibold text-sm">
                  Jav
                </span>
                <span className="text-xs text-brand-darkGray whitespace-nowrap">
                  Engineering
                </span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-sm text-[#2C2C2E] pr-[16px] sm:pr-0">
                  I’m down! Any ideas??
                </span>
                <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                  <span className="text-xs text-brand-darkGray whitespace-nowrap">
                    11:35 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end pr-4">
            <div className="bg-[#007AFF] rounded-[6px] px-[8px] py-[4px] flex  relative">
              <Image
                src={"/assets/images/chateIcon.svg"}
                alt="img"
                width={15}
                height={39}
                className="absolute top-0 right-[-9px]"
              />

              <span className="text-sm text-white ">
                I am down for whatever!
              </span>
              <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                <span className="text-xs text-white">11:36 AM</span>{" "}
                <DoubelTreuIcon />
              </div>
            </div>
          </div>
          <div className="flex items-start  pl-4 my-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <Image
                  src={"/assets/images/cheatavatar2.svg"}
                  alt="img"
                  width={32}
                  height={32}
                  className=""
                />
                <div className="bg-[#F2F2F7] rounded-[6px] px-[8px] py-[4px] flex flex-col  relative">
                  <Image
                    src={"/assets/images/chateIconeGray.svg"}
                    alt="img"
                    width={15}
                    height={39}
                    className="absolute top-0 left-[-9px]"
                  />
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[#2C2C2E] font-semibold text-sm">
                      Aubrey
                    </span>
                    <span className="text-xs text-brand-darkGray whitespace-nowrap">
                      Product
                    </span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="text-sm text-[#2C2C2E] pr-[16px] sm:pr-0">
                      I was thinking the cafe downtown
                    </span>
                    <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                      <span className="text-xs text-brand-darkGray whitespace-nowrap">
                        11:45 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src={"/assets/images/cheatavatar2.svg"}
                  alt="img"
                  width={32}
                  height={32}
                  className=""
                />
                <div className="bg-[#F2F2F7] rounded-[6px] px-[8px] py-[4px] flex flex-col  relative">
                  <Image
                    src={"/assets/images/chateIconeGray.svg"}
                    alt="img"
                    width={15}
                    height={39}
                    className="absolute top-0 left-[-9px]"
                  />
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[#2C2C2E] font-semibold text-sm">
                      Aubrey
                    </span>
                    <span className="text-xs text-brand-darkGray whitespace-nowrap">
                      Product
                    </span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="text-sm text-[#2C2C2E] pr-[16px] sm:pr-0">
                      But limited vegan options{" "}
                      <Link href="#" className="text-[#007AFF]">
                        {" "}
                        @Janet
                      </Link>
                      !
                    </span>
                    <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                      <span className="text-xs text-brand-darkGray whitespace-nowrap">
                        11:46 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end pr-4">
            <div className="bg-[#007AFF] rounded-[6px] px-[8px] py-[4px] flex  relative">
              <Image
                src={"/assets/images/chateIcon.svg"}
                alt="img"
                width={15}
                height={39}
                className="absolute top-0 right-[-9px]"
              />

              <span className="text-sm text-white ">Agreed</span>
              <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                <span className="text-xs text-white">11:52 PM</span>{" "}
                <DoubelTreuIcon />
              </div>
            </div>
          </div>
          {/* <div className="flex items-start  pl-4 my-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <Image
                  src={"/assets/images/cheatavatar3.svg"}
                  alt="img"
                  width={32}
                  height={32}
                  className=""
                />
                <div className="bg-[#F2F2F7] rounded-[6px] px-[8px] py-[4px] flex flex-col  relative">
                  <Image
                    src={"/assets/images/chateIconeGray.svg"}
                    alt="img"
                    width={15}
                    height={39}
                    className="absolute top-0 left-[-9px]"
                  />
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[#2C2C2E] font-semibold text-sm">
                      Janet
                    </span>
                    <span className="text-xs text-brand-darkGray whitespace-nowrap">
                      Engineering
                    </span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="text-sm text-[#2C2C2E] pr-[16px] sm:pr-0w-full max-w-[80%] ">
                      That works- I was actually planning to get a smoothie
                      anyways 👍
                    </span>
                    <div className="flex items-center justify-end gap-[4px] mt-[21px] ml-auto">
                      <span className="text-xs text-brand-darkGray whitespace-nowrap">
                        12:03 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src={"/assets/images/cheatavatar4.svg"}
                  alt="img"
                  width={32}
                  height={32}
                  className=""
                />
                <div className="bg-[#F2F2F7] rounded-[6px] px-[8px] py-[4px] flex flex-col  relative">
                  <Image
                    src={"/assets/images/chateIconeGray.svg"}
                    alt="img"
                    width={15}
                    height={39}
                    className="absolute top-0 left-[-9px]"
                  />
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[#2C2C2E] font-semibold text-sm">
                      Janet
                    </span>
                    <span className="text-xs text-brand-darkGray whitespace-nowrap">Product</span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="text-sm text-[#2C2C2E] pr-[16px] sm:pr-0">
                      On for 12:30 PM then ?
                    </span>
                    <div className="flex items-center justify-end gap-[4px] mt-[21px]">
                      <span className="text-xs text-brand-darkGray whitespace-nowrap">
                        11:46 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-sm text-white ">
              Anyone on for lunch today
            </span>
            <div className="flex items-center justify-end gap-[4px] mt-[21px]">
              <span className="text-xs text-white">11:31 AM</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheatBanner;
