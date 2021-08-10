import "./navbar.scss";
import React from "react";
import {Phone, Mail, LinkedIn} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    popover:{
        pointerEvents: "none"
    },
    paper: {
        padding:theme.spacing(1)
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openPopoverId, setOpenPopoverId] = React.useState(null);
    const handlePopoverOpen = (event, pId) => {
        setAnchorEl(event.target);
        setOpenPopoverId(pId);
    };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpenPopoverId(null);
    };
    

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">me</a>
                    <div className="itemContainer">
                        <Phone 
                            className="icon"
                            onMouseEnter={(e) => {handlePopoverOpen(e, "phonePopover")}}
                            onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id="phonePopover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper
                            }}
                            open={openPopoverId === "phonePopover"}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical:"top",
                                horizontal:"left"
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>+1-(626)-800-7175</Typography>
                        </Popover>
                    </div>
                    <div className="itemContainer">
                        <Mail 
                            className="icon"
                            onMouseEnter={(e) => {handlePopoverOpen(e, "mailPopover")}}
                            onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id="mailPopover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper
                            }}
                            open={openPopoverId === "mailPopover"}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical:"top",
                                horizontal:"left"
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>natpham014@gmail.com</Typography>
                        </Popover>
                    </div>
                    <div className="itemContainer">
                        <IconButton href="https://www.linkedin.com/in/nathan-pham-186a2b14b/" target="_blank">
                            <LinkedIn className="liIcon"/>
                        </IconButton>
                    </div>
                </div>
                
                <div className="right">
                    <IconButton className="menuButton">
                        <MenuIcon className="icon"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
