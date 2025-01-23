import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

import Header from "../../components/Header/index.jsx";
import Loader from "../../components/Loader/index.jsx";
import RepoItem from "../../components/RepoItem/index.jsx";
import FollowUser from "../../components/FollowUser/index.jsx";
import UserScreen from "../../components/UserSection/index.jsx";
import ReposScreen from "../../components/ReposSection/index.jsx";
import FollowSection from "../../components/FollowSection/index.jsx";

import useUserData from "../../hooks/useUserData";

export default function PerfilPage() {
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const userData = useUserData(username);
  const firstName = userData.name?.split(" ")[0];

  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

  return (
    <>
      <Header followersLinkHref={username} followingLinkHref={username} />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <aside className="user-side">
            <UserScreen
              src={userData.photo}
              alt={`foto de ${userData.name}`}
              name={userData.name}
              employ={userData.employ}
              city={userData.city}
              email={userData.email}
              portfolio={userData.portfolio}
              portfolioHref={userData.portfolio}
              xUsername={userData.twitter_username}
              xHref={userData.xUserName}
            />
          </aside>
          <section className="info-section">
            <ReposScreen
              repoScreenTitle={`Últimos repositórios de ${firstName}`}
              repoPageLink={`/repos/${userData.userName}`}
              repoItem={userData.lastRepos.map((repo, index) => (
                <RepoItem
                  key={index}
                  repoName={repo.name}
                  repoUrl={repo.full_name}
                  to={repo.svn_url}
                />
              ))}
            />
          </section>
          <aside className="follow-side">
            <section>
              <FollowSection
                typeName="seguindo"
                count={userData.numberOfFollowing}
                to={`/following/${username}`}
                followUser={userData.followingUsers
                  .map((user, index) => (
                    <FollowUser
                      key={index}
                      imageUrl={user.avatar_url}
                      usernameIn={user.login}
                      variant="secondary"
                      to={user.login}
                    />
                  ))
                  .slice(0, 6)}
              />
            </section>
            <section>
              <FollowSection
                typeName="seguidores"
                count={userData.numberOfFollowers}
                followUser={userData.followersUsers
                  .map((user, index) => (
                    <FollowUser
                      key={index}
                      imageUrl={user.avatar_url}
                      usernameIn={user.login}
                      variant="secondary"
                      to={user.login}
                    />
                  ))
                  .slice(0, 6)}
                to={`/followers/${username}`}
              />
            </section>
          </aside>
        </Container>
      )}
    </>
  );
}
