import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles.js";

import useUserData from "../../hooks/useUserData.js";

import Header from "../../components/header";
import LinkItem from "../../components/link-item";
import RepoItem from "../../components/repo-item";
import Loader from "../../components/loader";

export default function ReposPage() {
  const [loading, setLoading] = useState(true);

  const userParams = useParams();
  const username = userParams.username;
  const reposData = useUserData(username).repos;

  useEffect(() => {
    if (reposData) {
      setLoading(false);
    }
  }, [reposData]);

  return (
    <>
      <Header
        homepageLinkHref={username}
        followersLinkHref={username}
        followingLinkHref={username}
      />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="link-section">
            <p>Repositórios</p>
            <LinkItem
              name="Voltar"
              to={`/home/${username}`}
              variant="seAllLink"
            />
          </div>
          <div className="repos-section">
            {reposData.map((repo, index) => (
              <RepoItem
                key={index}
                repoName={repo.name}
                repoUrl={repo.full_name}
                language={repo.language}
                to={repo.html_url}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
