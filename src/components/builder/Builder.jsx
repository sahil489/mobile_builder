import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BuilderChild from "./BuilderChild";
import { BuilderList } from "../../utils/constants";

const Builder = () => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState(false);
  const [builderChild, setBuilderChild] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {BuilderList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                onClick={() => setBuilderChild(true)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <h2>Search</h2>
      <br />
      <input
        type="text"
        value={search}
        placeholder="Search online app"
        onChange={(event) => setSearch(event.target.value)}
      />
      <br />
      <Divider />
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>Builder</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>

      {builderChild ? (
        <BuilderChild
          builderChild={builderChild}
          setBuilderChild={setBuilderChild}
        />
      ) : null}
    </div>
  );
};

export default Builder;
