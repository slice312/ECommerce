import React from "react";
import {Menu} from "antd";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from "@ant-design/icons";



export const Header = () => {
    const [current, setCurrent] = React.useState();

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    console.log("state", current);
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined/>}>
                Home
            </Menu.Item>
            <Menu.SubMenu key="subMenu" icon={<SettingOutlined/>} title="Register">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};
