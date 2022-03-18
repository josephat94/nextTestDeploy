
import React from 'react';
import styles from '../styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles.menu}>

            {menuItems.map((item, index) => (

                <ActiveLink key={"menu_$_" + index} text={item.text} href={item.href}></ActiveLink>
            ))}

        </nav>
    );
}