import React from "react";
import { Container } from "./styles.js";
import LinkItem from "../LinkItem/index.jsx";

const FollowSection = ({ typeName, count, followUser, to }) => {
  return (
    <Container>
      <p className="section-name">
        {typeName}
        <span>({count})</span>
      </p>
      <ul className="follow-section">{followUser}</ul>
      <LinkItem name="Ver mais" to={to} variant="seAllLink" />
    </Container>
  );
};

export default FollowSection;
