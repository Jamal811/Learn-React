import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
