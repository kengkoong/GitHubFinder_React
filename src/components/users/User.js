import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../layouts/Spiner";

import { Link } from "react-router-dom";
import Repos from "../../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  
  const githubContext = useContext(GithubContext);
  const { loading, user, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
       <i className="fas fa-arrow-left"></i> BACK TO SEARCH
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="rounded-img"
            style={{ width: "150px" }}
          />
          <h1>Name: {name}</h1>
          <p>Location: {location}</p>
          <p>
            Hireable : 
            {hireable ? (
              <i className="fas fa-check text-success"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              {bio}
            </Fragment>
          )}
          <br />
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers{followers}</div>
        <div className="badge badge-success">Following{following}</div>
        <div className="badge badge-danger">Public Repos{public_repos}</div>
        <div className="badge badge-dark">Public Gists{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};


export default User;
