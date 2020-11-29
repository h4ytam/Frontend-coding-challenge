import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from "@material-ui/core";
const Cardstyle = {
  width: 460,
  height: 270,
};
const Cardimg = {
  height: 90,
  width: 90,
  borderRadius: 80,
  marginTop: 18,
  marginBottom: 18,
  marginLeft: 10,
};
const CardDiv = {
  marginTop: -112,
  marginLeft: 10,
};
const CardDescription = {
  marginTop: 40,
  fontSize: 14,
};
const repoHtml = {
  marginTop: 5,
  marginRight: 14,
  marginBottom: 5,
};
const RepoList = ({
  items: {
    name,
    owner,
    open_issues_count,
    stargazers_count,
    description,
    html_url,
  },
}) => {
  const { login, avatar_url } = owner;

  return (
    <div>
      <Card style={Cardstyle}>
        <CardActionArea>
          <CardMedia
            style={Cardimg}
            image={avatar_url}
            title="Contemplative Reptile"
          />

          <CardContent style={CardDiv}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {login}
            </Typography>
            <Typography
              style={CardDescription}
              variant="body2"
              color="textSecondary"
            >
              {description ? (
                description
              ) : (
                <Typography>No Description</Typography>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="h6">stars:{stargazers_count}</Typography>
          <Typography variant="h6">issues:{open_issues_count}</Typography>
          <Button size="small" color="primary">
            <Link style={repoHtml} href={html_url}>
              Go to the repository
            </Link>
          </Button>
        </CardActions>
      </Card>

      <br />
    </div>
  );
};

export default RepoList;
