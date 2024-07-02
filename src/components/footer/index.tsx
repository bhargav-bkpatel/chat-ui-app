import React from "react";
import SmileIcon from "../commons/icons/smileIcon";
import MentionIcon from "../commons/icons/mentionIcon";
import AirplaneIcon from "../commons/icons/airplaneIcon";

const Footer = () => {
  return (
    <div>
      <div className="py-4 border-t px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center max-w-[500px] w-full">
            <SmileIcon />
            <div className="w-full">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full text-sm text-[#666668] placeholder:text-sm placeholder:text-[#666668] focus-visible:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center max-w-[50px] w-full justify-between">
            <div className="cursor-pointer">
              <MentionIcon />
            </div>
            <div className="cursor-pointer hover:[&>div>svg>g>path]:fill-[#007AFF]">
              <AirplaneIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
