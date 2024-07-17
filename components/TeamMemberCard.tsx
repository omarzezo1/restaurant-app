import Image from "next/image";
import React from "react";

const TeamMemberCard = ({member}:{member:any}) => {
  return (
    <div
      key={member.name}
      className="w-[260px] flex flex-col items-center gap-7"
    >
      <Image width={260} height={350} src={member.img} alt={member.name} />
      <div className="flex flex-col gap-1 items-center">
        <h5 className="font-Josefin font-semibold text-2xl text-slate-200">
          {member.name}
        </h5>
        <p className="font-pacifico text-base text-gray-400">
          {member.jobTitle}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
