import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Data from "./data.json";
import { Modal } from "antd";

import MyCalendar from "./MyCalendar";
//import { makeStyles } from "@material-ui/core/styles";
//import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
  margin: {
    marginLeft: "500px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  cardContent: {
    textAlign: "center",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const userData = props.userData;

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const headLine = (
    <div>
      <span>{userData.real_name}</span>
      <span>-User Activity</span>
    </div>
  );
  return (
    <div>
      <h1>
        <Card
          style={{ maxWidth: "200px", marginLeft: "40%" }}
          className={classes.root}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {userData.real_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ marginLeft: "45%" }}
              onClick={() => showModal()}
            >
              Period Activity
            </Button>
            <Modal
              title={headLine}
              visible={open}
              onOk={closeModal}
              onCancel={closeModal}
              width={800}
            >
              <MyCalendar userData={userData} />
            </Modal>
          </CardActions>
        </Card>
      </h1>
    </div>
  );
}
