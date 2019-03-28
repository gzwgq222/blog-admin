import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const renderMenuItem =
    ({ title, icon, path }, i) =>
        <Menu.Item key={i} onClick={ () => sessionStorage.setItem('webKey', String(i)) }>
            <Link to={path}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>

const renderSubMenu =
    ({ title, icon, path, sub }, i) =>
        <Menu.SubMenu
            key={i}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>
const key = sessionStorage.getItem('webKey') || '0'
console.log('key', key)
export default ({ menus }) => <Menu mode="horizontal" defaultSelectedKeys={[key]}>
    {menus && menus.map(
        (item, i) => item.sub && item.sub.length ?
            renderSubMenu(item, i) : renderMenuItem(item, i)
    )}
</Menu>