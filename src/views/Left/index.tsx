import { Menu } from 'antd';
// @ts-ignore
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React from "react";
import * as style from "./style.scss"
const { SubMenu } = Menu;

export default class Sider extends React.Component {
    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                className={style.box}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <MailOutlined />
              <span>LED</span>
            </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="LED 0">
                        <Menu.Item key="1">Color red</Menu.Item>

                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="LED 1">
                        <Menu.Item key="3">Color green</Menu.Item>

                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
              <AppstoreOutlined />
              <span>Navigation Two</span>
            </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> <SubMenu key="sub4" title={<span><SettingOutlined /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>


            </Menu>
        );
    }
}
