import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  id: string;
  name: string;
  socialID: string;
  link: string;
}
const Member: React.FC<Props> = ({ id, name, socialID, link }) => (
  <div>
    <Image
      src={`/assets/team/mem${id}.png`}
      alt={name}
      width={600}
      height={600}
      className="p-0 rounded-full"
    />
    <div className="text-sm xl:text-xl">{name}</div>
    <div className="text-sm">
      <Link href={link}>
        <a target={"_blank"}>{socialID}</a>
      </Link>
    </div>
  </div>
);

export default Member;
