import React from "react";
import { Container } from "./styles";
import LinkItem from "../Link/Link";

export default function FollowSection({ typeName, count, followUser, to }) {
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
}
