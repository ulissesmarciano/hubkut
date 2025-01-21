import React from "react";
import { Container, UserSection } from "./styles";

export default function FollowUser({
  imageUrl,
  usernameIn,
  usernameOut,
  variant,
  to,
}) {
  return (
    <Container to={`/perfil/${to}`} $variant={variant}>
      <UserSection $imageurl={imageUrl}>
        <p className="username-in">{usernameIn}</p>
      </UserSection>
      <p className="username-out">{usernameOut}</p>
    </Container>
  );
}
