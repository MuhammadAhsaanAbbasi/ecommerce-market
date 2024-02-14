interface IFooter {
    inclusions: IInclusion[];
    navItems: INavItem[];
    headerDescription: string;
    headerTitle: string;
    HeroImage: string;
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

interface ICategory {   
    name: string;
    CategoryImage: string;
    _id: string;
}

interface IPromotion {
    title: string;
    description: string;
    expiryDate: number;
    PromotionImage: string[];
    _id: string;
}

interface IProduct {
    name: string;
    _id: string;
    Slug: string;
    MainImage: string;
    description: string;
    category: string;
    price: number;
    _id: string;
}