import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ControlledAccordions from './Accordion';
import { NavLink } from 'react-router-dom';

export default function Hamburger() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  //onClick={toggleDrawer(anchor, false)}
  // onKeyDown={toggleDrawer(anchor, false)}
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <List>
        <ListItem disablePadding>
          <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }
              }
              return { width: "100%", textDecoration: "none", color: "black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }
            }} to={"/"}>
            <ListItemButton>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Divider />

        <ControlledAccordions Head={"About"}>
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Team"}>
              <ListItemButton>
                <ListItemText primary={"Team"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Mission"}>
              <ListItemButton>
                <ListItemText primary={"Mission"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Vision"}>
              <ListItemButton>
                <ListItemText primary={"Vission"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/ActivityReport"}>
              <ListItemButton>
                <ListItemText primary={"Activity Report"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/AuditReport"}>
              <ListItemButton>
                <ListItemText primary={"Audit Report"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </ControlledAccordions>

        <Divider />
        <ListItem disablePadding>
          <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }
              }
              return { width: "100%", textDecoration: "none", color: "black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }
            }} to={"/Projects"}>
            <ListItemButton>
              <ListItemText primary={"Projects"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Divider />
        <ControlledAccordions Head={"Initiatives"}>
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Impact"}>
              <ListItemButton>
                <ListItemText primary={"Impact"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Centers"}>
              <ListItemButton>
                <ListItemText primary={"Centers"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Divider />
        </ControlledAccordions>
        <Divider />
        <ControlledAccordions Head={"Media"}>
          <ListItem disablePadding>
            <NavLink onClick={toggleDrawer(anchor, false)} style={({ isActive }) => {
              if (isActive) {
                return {background:"black" ,width: "100%", textDecoration: "none", color: "white" }
              }
              return { width: "100%", textDecoration: "none", color: "black" }
            }} to={"/Gallery"}>
              <ListItemButton>
                <ListItemText primary={"Gallery"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </ControlledAccordions>
      </List>
    </Box>
  );

  return (
    <Box display={["flex", "flex", "none"]} justifyContent={"center"} alignItems={"center"} m={['5px', '10px', '15px']}>
      {['HOME'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)} style={{ color: "white", textDecoration: "none", fontFamily: "Piedra", fontSize: "24px", fontWeight: "400" }} >{anchor}</Button> */}
          <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ color: "black", width: "40px", height: "40px" }} />

          <Drawer
            anchor={"left"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}