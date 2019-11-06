import React from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import Zmage from 'react-zmage'
import Carousel from 'nuka-carousel';
import MyCarousel from './MyCarousel'
import {
  ButtonArea, Button, CellsTitle, CellsTips, CellBody, CellFooter, Form, FormCell, Radio,
  Tab, NavBarItem, Article, ActionSheet, Cells, Cell, Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton
} from 'react-weui';

class ShouYe extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
    }
  }

  render() {
    const style = {
      width: this.state.width * 9 / 24,
      // height:this.state.height,
    };

    return (
      <div>
        <Page className="input" >
        <Carousel>
                  <img src="https://wx.wuminmin.top/wxyl/image?id=17" />
                  <img src="https://wx.wuminmin.top/wxyl/image?id=18" />
                  <img src="https://wx.wuminmin.top/wxyl/image?id=19" />
                   <img src="https://wx.wuminmin.top/wxyl/image?id=20" />
                   <img src="https://wx.wuminmin.top/wxyl/image?id=21" />
                   <img src="https://wx.wuminmin.top/wxyl/image?id=22" />
                   <img src="https://wx.wuminmin.top/wxyl/image?id=23" />
                   <img src="https://wx.wuminmin.top/wxyl/image?id=24" />
                </Carousel>
          <CellsTitle>
            <Tab type="navbar">
              <NavBarItem label="首  页" type="red">
                <div className="button-sp-area">
                </div>
              </NavBarItem>
              <NavBarItem label="人大概括">
                <div className="button-sp-area">
                  <Button type="red" size="small">人大概括</Button>
                  <Button type="grey" size="small">机构设置</Button>
                  <Button type="grey" size="small">制度建设</Button>
                </div>

              </NavBarItem>
              <NavBarItem label="新闻中心">
                <Button type="grey" size="small">人大要闻</Button>
                <Button type="grey" size="small">通知公告</Button>
                <Button type="grey" size="small">领导讲话</Button>
                <Button type="grey" size="small">工作动态</Button>
              </NavBarItem>
              <NavBarItem label="依法履职">
                <Button type="grey" size="small">立法工作</Button>
                <Button type="grey" size="small">决定决议</Button>
                <Button type="grey" size="small">认识任免</Button>
                <Button type="grey" size="small">监督工作</Button>
              </NavBarItem>
              <NavBarItem label="代表工作">
                <Button type="grey" size="small">代表信息</Button>
                <Button type="grey" size="small">代表风采</Button>
                <Button type="grey" size="small">代表信箱</Button>
                <Button type="grey" size="small">议案建议</Button>
              </NavBarItem>
              <NavBarItem label="一府两院">
                <Button type="grey" size="small">人民政府</Button>
                <Button type="grey" size="small">监察委员会</Button>
                <Button type="grey" size="small">人民法院</Button>
                <Button type="grey" size="small">人民检察院</Button>
              </NavBarItem>
              <NavBarItem label="乡县人大">
                <Button type="grey" size="small">蓉城镇</Button>
                <Button type="grey" size="small">庙前镇</Button>
                <Button type="grey" size="small">杜村乡</Button>
                <Button type="grey" size="small">新河乡</Button>
                <Button type="grey" size="small">杨田镇</Button>
                <Button type="grey" size="small">凌阳镇</Button>
              </NavBarItem>

            </Tab>
          </CellsTitle>
          <CellsTitle>
            <h1>市人大常委会及机关召开会议部署开展“不忘初心、牢记使命”</h1>
            <h4>  9月12日，市人大常委会及机关“不忘初心、牢记使命”主题教育工作会议召开，会议传达学习全市“不忘初心、牢记使命”主题教育工作会议精神，贯彻落实中央和省委、市委要求，对主题教育工作进行动员部署。市人大常委会党组书记、主任金庆丰出席并讲话。市人大常委会副主任夏吉苗、张瑞中、樊</h4>

          </CellsTitle>
          <CellsTitle>
            <ButtonArea direction="horizontal">

              <Button type="warn" disabled>
                <Carousel>
                  <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
                  <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
                </Carousel>
              </Button>

              <Button type="warn" disabled>

                <Tab type="navbar">
                  <NavBarItem label="人大要闻">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="通知公告">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>

                </Tab>
              </Button>
            </ButtonArea>
          </CellsTitle>
          <CellsTitle>
            <img src="https://wx.wuminmin.top/wxyl/image?id=15"
            />
          </CellsTitle>
          <CellsTitle>
            <ButtonArea direction="horizontal">
              <Button type="warn" disabled>
                <Tab type="navbar">
                  <NavBarItem label="监督工作">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="人事任免">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="决议决策">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                </Tab>
              </Button>
              <Button type="warn" disabled>
                <Page className="preview" title="人大概况" subTitle="">
                  <Preview>
                    <PreviewHeader>
                      <PreviewItem label="人大简介" value="青阳县人大" />
                    </PreviewHeader>
                    <PreviewBody>
                      <PreviewItem label="组织机构" value="Name" />
                      <PreviewItem label="组成成员" value="Name" />
                      <PreviewItem label="委员职责" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="联系电话" value="Product Description" />
                      <PreviewItem label="地址" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
                    </PreviewBody>
                    <PreviewFooter>
                      {/* <PreviewButton primary>Action</PreviewButton> */}
                    </PreviewFooter>
                  </Preview>
                </Page>
              </Button>
            </ButtonArea>
          </CellsTitle>

          <CellsTitle>
            <ButtonArea direction="horizontal">
              <Button type="warn" disabled>
                <Tab type="navbar">
                  <NavBarItem label="代表工作">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="一府一委两院">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="乡县人大">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                </Tab>
              </Button>
              <Button type="warn" disabled>
                <Page className="preview" title="会议之窗" subTitle="">
                  <Preview>
                    <PreviewHeader>
                      <PreviewItem label="人大简介" value="青阳县人大" />
                    </PreviewHeader>
                    <PreviewBody>
                      <PreviewItem label="组织机构" value="Name" />
                      <PreviewItem label="组成成员" value="Name" />
                      <PreviewItem label="委员职责" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="Product" value="Name" />
                      <PreviewItem label="联系电话" value="Product Description" />
                      <PreviewItem label="地址" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
                    </PreviewBody>
                    <PreviewFooter>
                      {/* <PreviewButton primary>Action</PreviewButton> */}
                    </PreviewFooter>
                  </Preview>
                </Page>
              </Button>
            </ButtonArea>
          </CellsTitle>

          <CellsTitle>
            <ButtonArea direction="horizontal">
              <Button type="warn" disabled>
                <Tab type="navbar">
                  <NavBarItem label="调查研究">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                  <NavBarItem label="法律法规">
                    <Cells>
                      <Cell href="javascript:;" access>
                        <CellBody>
                          市人大常委会党组举行 主题教育专题党课报告会
                </CellBody>
                        <CellFooter>
                          2019-11-04
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                      <Cell access>
                        <CellBody>
                          市四届人大常委会第十五次会议召开
                </CellBody>
                        <CellFooter>
                          2019-11-01
                </CellFooter>
                      </Cell>
                    </Cells>
                  </NavBarItem>
                </Tab>
              </Button>

            </ButtonArea>
          </CellsTitle>

          <CellsTitle>
          <Carousel>
                  <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
                  <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
                </Carousel>
          </CellsTitle>
        </Page>
      </div>
    )
  }
}
export default ShouYe