import { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillFilePdf } from "react-icons/ai";
import { client } from "../../client";

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const query = '*[_type == "socialMedia"]';
    client.fetch(query).then((data) => {
      setSocialMedia(data);
    });
  }, []);
  let arr = [
    <BsGithub />,
    <FaLinkedin />,
    <AiFillFilePdf />,
    <RiWhatsappFill />,
  ];
  return (
    <div className="app__social">
      {socialMedia.map((item, index) => {
        return (
          <a href={`${item.title}`} target="_blank" rel="noreferrer">
            <div>{arr[index]}</div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
