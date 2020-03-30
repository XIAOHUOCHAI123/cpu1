//import { Layout } from 'antd';

import React from "react";
import Sider from "../Left";
import * as style from "./style.scss"
//const { Header, Footer, Sider, Content } = Layout;
export default function All() {
    return<div>
        {/*
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
            <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
          <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
        */}
        <div className={style.box}><Sider ></Sider></div>




    </div>

}