import {
  Avatar,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useGithubUserStore } from "../../store/githubUserStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function UserInfo() {
  const {
    user: {
      avatar_url,
      name,
      html_url,
      company,
      blog,
      location: locationInfo,
      email,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at,
    },
    loading,
    getUser,
  } = useGithubUserStore();

  const { username } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const onClickNavigateToList = () => {
    if (!location.state) {
      navigate("/");
    } else {
      navigate({
        pathname: "/",
        search: !!location.state?.previous
          ? `?q=${location.state?.q}&page=${location.state?.previous}`
          : `?q=${location.state.q}`,
      });
    }
  };

  useEffect(() => {
    getUser(username);
  }, [username, getUser]);

  if (loading) {
    return (
      <CircularProgress
        sx={{ marginLeft: "auto", marginRight: "auto", marginTp: "200px" }}
      />
    );
  } else {
    return (
      <>
        <Button
          style={{ margin: "10px" }}
          onClick={onClickNavigateToList}
          startIcon={<ArrowBackIcon />}
        >
          돌아가기
        </Button>
        <Card variant="outlined" sx={{ margin: "10px" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              alt={name}
              src={avatar_url}
              sx={{ width: "200px", height: "200px", margin: "auto" }}
            />
            <Typography variant="h4" sx={{ marginBottom: "50px" }}>
              {name}
            </Typography>
            <Button
              variant="contained"
              href={html_url}
              sx={{ marginBottom: "30px" }}
            >
              Github Page
            </Button>
            {bio && (
              <Typography variant="subtitle1">자기소개 : {bio}</Typography>
            )}
            {company && (
              <Typography variant="subtitle1">Company : {company}</Typography>
            )}
            {blog && (
              <Typography variant="subtitle1">
                Blog : <Link href={blog}>{blog}</Link>
              </Typography>
            )}
            {locationInfo && (
              <Typography variant="subtitle1">위치 : {locationInfo}</Typography>
            )}
            {email && (
              <Typography variant="subtitle1">email : {email}</Typography>
            )}
            <Typography variant="subtitle1">
              고용가능 여부 : {hireable ? "예" : "아니오"}
            </Typography>
            <Typography variant="subtitle1">
              public repository 개수 : {public_repos}
            </Typography>
            <Typography variant="subtitle1">
              public gist 개수 : {public_gists}
            </Typography>
            <Typography variant="subtitle1">
              followers 수 : {followers}
            </Typography>
            <Typography variant="subtitle1">
              following 수 : {following}
            </Typography>
            <Typography variant="subtitle1">
              Github 생성일 : {dayjs(created_at).format("YYYY.MM.DD h:mm A")}
            </Typography>
            <Typography variant="subtitle1">
              최근 업데이트일 : {dayjs(updated_at).format("YYYY.MM.DD h:mm A")}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default UserInfo;
