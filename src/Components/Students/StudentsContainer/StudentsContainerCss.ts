import {css} from 'lit';

export const StudentsContainerCss=css`
    nav{
        background: dimgrey;
    }

    nav a.nav-link{
        color:white!important;
        border-right: 1px solid!important;
    }

    nav a.nav-link.active{
        background:black!important;
    }
`;