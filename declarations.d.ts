declare module 'header/Header' {
    import { NavigateFunction } from 'react-router-dom';
    const Header: React.ComponentType<{navigate: NavigateFunction}>;
    export default Header;
}

declare module 'footer/Footer' {
    const Footer: React.ComponentType;
    export default Footer;
}

declare module 'sidebar/Sidebar' {
    const Sidebar: React.ComponentType;
    export default Sidebar;
}
