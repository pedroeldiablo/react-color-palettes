import sizes from './sizes';
import { DRAWER_WIDTH }  from '../constants';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex", 
    "& h6" :{
      [sizes.down("xs")]: {
        padding: "2px",
        fontSize: "10px"
      },

    },
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navButtons: {
    marginRight: "1rem",
    "& a" : {
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      padding: "2px",
      fontSize: "10px",
      marginRight: "0",
    },
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      padding: "2px",
      fontSize: "10px",
      margin: "0"
    },
  }

});

export default styles;
