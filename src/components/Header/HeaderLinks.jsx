/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload,ChromeReaderMode } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button
          href="/chan_ping"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ChromeReaderMode className={classes.icons} /> 产品介绍
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Button
          href="/an_li"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ChromeReaderMode className={classes.icons} /> 成功案例
        </Button>
      </ListItem>


      <ListItem className={classes.listItem}>
      <Button
          href="/guan_yu_wo_men"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ChromeReaderMode className={classes.icons} /> 关于我们
        </Button>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.baidu.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> 资料下载
        </Button>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        
        <Tooltip
          id="instagram-twitter"
          title="微信联系"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://wx.qq.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-weixin"} />
          </Button>
        </Tooltip>
      </ListItem>
     

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="QQ联系"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.qq.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-qq"} />
          </Button>
        </Tooltip>
      </ListItem>
      
      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="电话咨询"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-android"} />
          </Button>
        </Tooltip>
      </ListItem>
   
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
