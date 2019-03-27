import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const renderMenuItem =
    ({ title, icon, path }) =>
        <Menu.Item key={path} >
            <Link to={path}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>

const renderSubMenu =
    ({ title, icon, path, sub }) =>
        <Menu.SubMenu
            key={path}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>

export default ({ menus }) => <Menu mode="horizontal" defaultSelectedKeys={[menus[0].path]}>
    {menus && menus.map(
        item => item.sub && item.sub.length ?
            renderSubMenu(item) : renderMenuItem(item)
    )}
</Menu>