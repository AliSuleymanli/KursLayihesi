import { css } from "lit";

export const MenuCss = css`
  /* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    /* padding-top: 10px;  */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* The navigation menu links */
  .sidenav a {
    text-align: left;
    padding: 8px 8px 8px 10px;
    text-decoration: none;
    font-size: 19px;
    color: rgb(178 177 177);
    display: flex;
    transition: all 0.3s ease 0s;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
  }

  #mySidenav a span:nth-child(1){
    text-align:center;
    flex:2;
  }

  #mySidenav a span:nth-child(2){
    flex:9;
    margin-left:10px;
  }

  #mySidenav.mini a span:nth-child(2){
    display:none;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    /* .sidenav {
      padding-top: 15px;
    } */
    .sidenav a {
      font-size: 18px;
      display:flex;
    }
  }
`;
