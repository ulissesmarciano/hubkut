import React from "react";
import { Container } from "./styles";

import EmployEmoji from "../../assets/icons/company-icon.png";
import PinIcon from "../../assets/icons/pin-icon.png";
import MailIcon from "../../assets/icons/mail-icon.png";
import LinkIcon from "../../assets/icons/link-icon.png";
import XIcon from "../../assets/icons/x_icon.svg";
import InfoListItem from "../InfoListItem/InfoListItem";

export default function UserSection({
  src,
  alt,
  name,
  profession,
  employ,
  city,
  email,
  portfolio,
  portfolioHref,
  xUsername,
  xHref,
}) {
  return (
    <Container>
      <picture className="user-profile-picture">
        <img src={src} alt={alt} />
      </picture>
      <span />
      <div className="username-section">
        <h3>{name}</h3>
        <p>{profession}</p>
      </div>
      <span />
      <ul className="info-list-section">
        {employ && <InfoListItem itemEmoji={EmployEmoji} itemName={employ} />}
        {city && <InfoListItem itemEmoji={PinIcon} itemName={city} />}
        {email && <InfoListItem itemEmoji={MailIcon} itemName={email} />}
        {portfolio && (
          <InfoListItem
            itemEmoji={LinkIcon}
            itemName={portfolio}
            to={portfolioHref}
            target="_blank"
          />
        )}
        {xUsername && (
          <InfoListItem
            itemEmoji={XIcon}
            itemName={xUsername}
            to={`https://x.com/${xHref}`}
            target="_blank"
          />
        )}
      </ul>
      <span />
    </Container>
  );
}
