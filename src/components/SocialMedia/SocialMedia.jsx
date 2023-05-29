import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillFilePdf } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://drive.google.com/file/d/1rHCYDhgm3X6ABHvKkF7x5-1Q8-s6g-Hn/view?usp=sharing"
        target="_blank"
      >
        <div>
          <AiFillFilePdf />
        </div>
      </a>
      <a href="https://github.com/EngGemy99" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-jamal-43b76b205/"
        target="_blank"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a href="https://wa.me/01032800043 " target="_blank">
        <div>
          <RiWhatsappFill />
        </div>
      </a>
      {/* <a
        href='https://www.facebook.com/dina.elorbany/
'
        target='_blank'
      >
        <div>
          <BsFacebook />
        </div>
      </a> */}
    </div>
  );
};

export default SocialMedia;
