import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles.js";
import useUserData from "../../hooks/useUserData.js";
import { useUser } from "../../contexts/UserContext.js";

import Header from "../../components/header";
import UserSection from "../../components/user-section";
import GreetingSection from "../../components/greeting-section";
import ToDoSection from "../../components/todo-section";
import ReposSection from "../../components/repos-section";
import FollowSection from "../../components/follow-section";
import FollowUser from "../../components/follow-user";
import RepoItem from "../../components/repo-item"
import Loader from "../../components/loader";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  const { username: urlUsername } = useParams();
  const { username: contextUsername } = useUser();
  const storedUsername = localStorage.getItem("username");
  const username = urlUsername || contextUsername || storedUsername;

  const userData = useUserData(username);

  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

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
          <aside className="user-side">
            <UserSection
              src={userData.photo}
              alt={`foto de ${userData.name}`}
              name={userData.name}
              employ={userData.employ}
              city={userData.city}
              email={userData.email}
              portfolio={userData.portfolio}
              portfolioHref={userData.portfolio}
              xUsername={userData.xUserName}
              xHref={userData.xUserName}
            />
          </aside>
          <section className="info-section">
            <GreetingSection
              name={userData.name}
              bio={userData.bio}
              repoCount={userData.numberOfRepos}
              starredCount={userData.numberOfStarredRepos}
              followersCount={userData.numberOfFollowers}
              followingCount={userData.numberOfFollowing}
              reposHref={username}
              followersHref={username}
              followingHref={username}
              starredHref={username}
            />
            <ToDoSection username={username} />
            <ReposSection
              repoScreenTitle={"Meus últimos repositórios:"}
              repoPageLink={`/repos/${username}`}
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
          </aside>
        </Container>
      )}
    </>
  );
}
