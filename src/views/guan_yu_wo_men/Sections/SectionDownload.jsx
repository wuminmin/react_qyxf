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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>欢迎光临万象园林</h2>
              <h4>
              欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林欢迎光临万象园林
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="primary"
                size="lg"
                href="http://www.baidu.com"
                target="_blank"
              >
                百度
              </Button>
              <Button
                color="primary"
                size="lg"
                href="http://www.qq.com"
                target="_blank"
              >
                腾讯
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />

          {/* <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want more?</h2>
              <h4>
                We{"'"}ve launched{" "}
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                  target="_blank"
                >
                  Material Kit PRO React{" "}
                </a>
                .It has a huge number of components, sections and example pages.
                Start Your Development With A Badass Material-UI nspired by
                Material Design.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="rose"
                size="lg"
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                target="_blank"
              >
                Material Kit PRO
              </Button>
              <Button
                color="rose"
                size="lg"
                href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section"
                target="_blank"
              >
                Material Dashboard PRO
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for supporting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button color="google">
              <i className={classes.socials + " fab fa-google-plus-g"} />
              Share
            </Button>
            <Button color="github">
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div> */}

        </div>
      </div>
    );
  }
}

SectionDownload.propTypes = {
  classes: PropTypes.object
};

export default withStyles(downloadStyle)(SectionDownload);
