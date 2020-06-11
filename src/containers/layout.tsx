import { ReactElement } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">Microphone Shop</Typography>
        </Toolbar>
      </AppBar>

      {children}
    </>
  );
}
