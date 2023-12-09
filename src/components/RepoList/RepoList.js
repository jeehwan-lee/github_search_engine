import { Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGithubReposStore } from "../../store/githubRepos";
import { useParams } from "react-router-dom";
import RepoItem from "./RepoItem";

function RepoList() {
  const { username } = useParams();
  const [page, setPage] = useState(1);
  const { repos, loading, isEnd, getRepos, resetRepos } = useGithubReposStore();

  useEffect(() => {
    getRepos(username, page);
  }, [username, page, getRepos]);

  useEffect(() => {
    return () => {
      resetRepos();
    };
  }, []);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center">
        Github Repository List
      </Typography>
      {repos.map((repo, index) => (
        <RepoItem repo={repo} key={index} />
      ))}
      {loading ? (
        <CircularProgress sx={{ margin: "auto" }} size={50} />
      ) : isEnd ? null : (
        <Button style={{ margin: "10px" }} onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
}

export default RepoList;
