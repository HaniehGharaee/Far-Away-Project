//export const farAwayPagePath = '/FarAway';
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
    const menuItems = [
        {
            key: "FarAway",
            label: "FarAway",
            to: "/FarAway"
        }
    ];
    return (
        <>
            <Menu
                mode="horizontal"
                className="font-bold text-whit h-20 
            flex items-center "
            >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} className="hover:!text-purple-100 ">
                        <Link to={item.to}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu> 
        </>
    );
};

export default Navbar;
