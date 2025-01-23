import React from "react";
import { Container } from "./styles";
import LinkItem from "../LinkItem/index.jsx";

export default function ReposSection({
  repoScreenTitle,
  repoItem,
  repoPageLink,
}) {
  return (
    <Container>
      <h4>{repoScreenTitle}</h4>
      <div>
        <ul className="repo-section">{repoItem}</ul>
        <LinkItem name="Ver todos" to={repoPageLink} variant="seAllLink" />
      </div>
    </Container>
  );
}
