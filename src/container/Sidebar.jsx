import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ContainerOutlined, DesktopOutlined, UserOutlined } from "@ant-design/icons";

const SideBar = () => {
    function getItem(label, key, icon, children, linkTo) {
        return {
            label,
            key,
            icon,
            children,
            linkTo,
        };
    }

    const items = [
        getItem("گزارش آزمایش", "1", <DesktopOutlined />, null, "/reports"),
        getItem("متخصصان", "sub1", <UserOutlined />, null, "/doctors"),
        getItem("اخبار و مقالات", "4", <ContainerOutlined />, null, "/news"),
    ];
    return (
        <div className="w-fit mt-5 mr-5 inline-block">
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.linkTo}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default SideBar;
