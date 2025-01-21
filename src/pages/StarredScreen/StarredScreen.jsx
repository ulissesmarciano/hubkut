import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

import useUserData from "../../hooks/useUserData";

import Header from "../../components/header";
import LinkItem from "../../components/link";
import RepoItem from "../../components/repoitem";
import Loader from "../../components/loader";

export default function ReposPage() {
  const [loading, setLoading] = useState(true);

  const userParams = useParams();
  const username = userParams.username;
  const starredData = useUserData(username).starredRepos;

  useEffect(() => {
    if (starredData) {
      setLoading(false);
    }
  }, [starredData]);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="link-section">
            <p>Favoritos</p>
            <LinkItem
              name="Voltar"
              to={`/home/${username}`}
              variant="seAllLink"
            />
          </div>
          <div className="repos-section">
            {starredData.map((starred, index) => (
              <RepoItem
                key={index}
                repoName={starred.name}
                repoUrl={starred.full_name}
                language={starred.language}
                to={starred.html_url}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
