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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import 'myconfig.js'
class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3> 产品案例</h3>
            </div>
            <div className={classes.title}>
              <h3>
                <small>企业客户</small>
              </h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "大石头",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            <img
                              src={global.constants.image_url + "wxyl/image?id=2"}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                            大石头
                          </p>
                         
                        </span>
                      )
                    },
                    {
                      tabButton: "中石头",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            <img
                              src={global.constants.image_url + "wxyl/image?id=3"}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                            中石头
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "小石头",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <p>
                            <img
                              src={global.constants.image_url + "wxyl/image?id=4"}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                            小石头
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "假山石",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                           <p>
                            <img
                              src={global.constants.image_url + "wxyl/image?id=5"}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                            假山石
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "人工石",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            <img
                              src={global.constants.image_url + "wxyl/image?id=6"}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                            人工石
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionPills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(SectionPills);
