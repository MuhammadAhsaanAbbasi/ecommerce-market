interface IFooter {
    inclusions: IInclusion[];
    navItems: INavItem[];
    footerLine: string;
    _id: string;    
}

interface IInclusion {
    title: string;
    description: string;
    InclusionIcon: string;
    _key: string;
}

interface INavItem { 
    NavItemLabel: string;
    NavItemUrl: string;
    NavItemIcon: string;
    _key: string;
}


