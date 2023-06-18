import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex flex-row items-center">
      <SocialIcon
        url="https://www.youtube.com/watch?v=urgi2iz9P6U"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="upppercase">Get in touch</p>
    </div>
  );
}
