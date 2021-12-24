var request = new XMLHttpRequest();
var searchBarHtml = `<div class="container search-box">
    <img style="position:absolute;left:16px;top:0;margin-top:20px;" src="https://www.printbase.com/wp-content/uploads/2021/07/Search.svg" >
    <input id="search-input" type="text" placeholder="Search for products..." />
    <button id="search-submit" type="button">Search</button>
  </div>`;
var style = document.createElement("style");
style.innerHTML = `
body{
  background-color:#F5F6F7;
}
.hero-plain,
.navbar.w-nav,
.catalog.wf-section,
{
  padding-left:8.3%;
  padding-right:8.3%;
  background-color:#F5F6F7;
}
.hero-plain{
  padding-top:34px;
  padding-bottom: 0px;
  margin-top: 60px;
}
 
    padding-bottom: 0;
}
.navbar.w-nav{
  position: fixed;
  padding-top: 7px;
  padding-bottom: 7px;
  z-index: 9999;
      }
.catalog.wf-section
{
  padding-top:41px;
}
a.link-block-8{
  font-size:16px;
}
.badgeFilter_listFiltered{
  margin-top:4px;
}
.image-59{
  box-shadow: 0px 15px 25px rgb(0 0 0 / 6%);
  border-radius: 7.04px;
}
.product-catalog-heading,.category-list-heading{
  color:#949494;
  display:none;
}
.product-catalog-heading{
  text-transform:uppercase;
  font-size:14px;
  margin-bottom:14px;
  padding-left:16px;
}
.category-list-heading{
  font-size:14px;
  margin-bottom:7px;
  
}

.selected-tier-mobile{
  display:none;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 20px;
}

.selected-category,.selected-category-mobile{
display:none;
background: #FFFFFF;
border-radius: 12px;
font-size: 16px;
line-height: 19px;
color: #131F37;
padding:14px 20px;
font-weight:700;
height:50px;
}

.selected-category-mobile::after{
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.4em solid #C5C5C5;
  border-right: 0.4em solid transparent;
  border-bottom: 0;
  border-left: 0.4em solid transparent;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 20px;
}


.selected-category-mobile__title,.selected-category-mobile__text{
  font-weight:normal;
  font-size:16px;
  display:inline-block;
  line-height:24px;
  margin:0;
}
.no-product{
  text-align:center;
}
 
nav.nav-menu-3{
  margin-left:-16px;
  margin-right:auto

}
.detail-content .title{
font-size:16px;
}
.detail-content .description._2{
font-size:14px;
}
 .navigation-right-4 a[href="./pricing"]{
   display:none;
 }


a.nav-link-6{
  padding-left:12px;
  padding-right:12px;

}
.button-navigation-2{
  border-radius:50rem;
}

.badgeFilter_title-ipad h4{
  position:absolute;
  top:0;
  font-size: 14px;
  color: #949494;
  margin-bottom:7px;
}
.badgeFilter_title-ipad{
  margin-top:41px;
  display:none;
}
.badgeFilter_title-mobile{
  display:none;
  background: #FFFFFF;
  border-radius: 12px;
  font-size: 16px;
  line-height: 19px;
  color: #131F37;
  padding: 14px 20px;
  padding-right: 40px;
  font-weight: 700;
  height: 50px;
}

.badgeFilter_title-mobile::after{
  margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.4em solid #C5C5C5;
        border-right: 0.4em solid transparent;
        border-bottom: 0;
        border-left: 0.4em solid transparent;
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        right: 20px;

}

.badgeFilter_title-mobile__title,.badgeFilter_listFiltered-mobile{
font-size:16px;
font-weight:400;
display:inline-block;
line-height: 24px;
margin:0;
}

.listFiltered__placeholder{
  color: #B3B3B3;
  font-size: 16px;
  line-height: 24px;
  color: #b5b3c3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.badgeFilter_title-mobile__title{
  color:  #949494;
}
.badgeFilter_listFiltered-mobile{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  background-color: #fff;
  border-radius: 12px;
  display: block;
  align-items: center;
  margin-left:8px;
  color:#131F37;
}


.badgeFilter_listFiltered-ipad{
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size:14px;
  background-color:#fff;
  border-radius: 12px;
  display: block;
  align-items: center;
  padding: 14px 20px;
}

.badgeFilter_listFilterOption{
  background-color:#fff;

}
.container-category-list{
  position:relative;
}
.sample-mockup{
  top: 0;
}
.detail-popup{
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: block;
  overflow: auto;
  width: 78vw;
  height: calc(100vh - 182px);
  margin: 100px auto 0px;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-right: 32px;
  padding-left: 32px;
  border-radius: 12px;
  background-color: #fff;
}
.grid-15{
  grid-column-gap: 32px;
  grid-template-columns: 1fr 1fr;
}
.detaipopup{
  grid-column-gap: 32px;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 32px;
}
.image{
  border:none;
  vertical-align:top;
  height:auto;
}

.image img{
  border: 1px solid #E6E6E6;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 100%;
  display: inline-block;
}
.product-description-popup{
  border:none;
  border-top: 1px solid #E6E6E6;
}

.product-description-popup .detail-popup .image img{
  width: 100%;
  height:auto;
}

.description-popup{
  padding:0;
}
.button-close{
  position: fixed;
  top: 101px;
  right: calc(11vw + 3px);
  background-color: rgba(255,255,255,0.2);
  border-radius: 5px;
}

.description-popup .h2{
  font-size: 16px;
}

.description-popup> table:nth-of-type(1){
  margin-bottom: 12px !important;
}
.description-popup> table:nth-of-type(2){
  max-width: unset !important;
  width:100% ; 
}

 .description-popup > table:nth-child(5) > tbody > tr:nth-child(3) > td>span>strong,
 .description-popup > table:nth-child(5) > tbody > tr:nth-child(3) > td > p:nth-child(1) > span > strong
 {
font-size: 16px;
color:#131F37;

 }

 .description-popup > table:nth-child(5) > tbody > tr>td{
padding-bottom: 16px;
 }
 .description-popup > table:nth-child(5) > tbody > tr:last-child>td{
padding-bottom: 0;
 }


.description-popup> table:nth-of-type(2) tr:nth-of-type(3) table td{
padding: 6px;
box-sizing:content-box;
}
.description-popup> table:nth-of-type(2) tr:nth-of-type(3) p:first-of-type{
  margin-top:14px;
}
.description-popup> table:nth-of-type(2) tr:nth-of-type(2) table{
  border-collapse: initial !important;
  display: grid !important;
  grid-template-columns: repeat(3,1fr) !important;
  column-gap:24px !important;
  line-height: 18px !important;
  margin-top:24px !important;
  margin-left:0 !important;
  margin-right:0 !important;

}
 
.description-popup .description-popup__heading{
  margin: 0;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.5;
  color:#131F37;
}

.badge-icon-list{
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E8EAED;
}

.badge-icon{
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 3px;
  background-position:center;
  background-size:cover;
  display:inline-block;
  position: relative;
}

.description-popup__artwork-requirement{
  margin-bottom: 20px;
}

.artwork-requirement__requirement-list{
  margin:0;
}
.description-popup__artwork-requirement__heading{
  line-height: 1.5;
  margin: 0;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #606b74;
}

.artwork-requirement__requirement__label{
  display:inline-block;
  font-weight: 400;
  margin: 0;
  
}
 
.detaipopup{
  grid-row-gap: 16px;
  place-items:stretch;
}
.navigation-left-3{
width: auto;
}
.description-popup> table:nth-of-type(2) tr:nth-of-type(2) table p{
  font-size: 14px;
  line-height :20px;
  margin-bottom: 0;
}
 
.description-popup {
  font-family: Inter;
}
.description-popup *{
  font-family: inherit !important;
}
.description-popup> table:nth-of-type(2) tr:nth-of-type(2) table strong{
  margin-bottom: 8px;
  display: inline-block;
}
.description-popup> table:nth-of-type(1) img::before{
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  border: 1px solid black;
}
.description-popup p, .description-popup label, .description-popup span,.description-popup strong,.description-popup h3,.description-popup h2,.description-popup h1,.description-popup li,.description-popup td,.description-popup th{
  color: #333;
  font-size: 14px;
}

.table-sizechart td,.table-sizechart th{
  color: #333;
  font-size: 14px;
  font-family: 'Inter';
}


 
[data-tooltip]:hover::after{
  display:block;
}
 
[data-tooltip]:hover::before{
  display:block;
}
 
[data-tooltip]::after {
  content: attr(data-tooltip);
  background-color: #000;
  width: max-content;
  color: #fff;
  position: absolute;
  padding: 8px 16px;
  top: 100%;
  left: 50%;
  max-width: 250px;
  transform: translateX(-50%);
  display: none;
  margin-top: 9px;
  font-size: 14px;
  line-height: 24px;
  border-radius:6px;
}
[data-tooltip]::before {
  content: '';
  background-color: #000;
  width: 0;
  color: #fff;
  position: absolute;
  padding: 0;
  top: 105%;
  left: 50%;
  max-width: 250px;
  transform: translateX(-50%) rotate(45deg);
  margin-top: 5px;
  display: none;
  border-left: 10px solid black;
  border-bottom: 10px solid white;
}
    .btn-scroll-top {
        position: fixed;
        z-index: 9;
        right: 24px;
        bottom: 100px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        display: none;
        text-align: center;
        box-shadow: 1px 1px 10px -3px rgb(0 0 0 / 8%);
        background: #fff;
        border-radius: 100%;
        border-left: 1px solid rgb(235, 235, 235);
        border-right: 1px solid rgb(235, 235, 235);
    }
    
    
    .btn-scroll-top img {
      width: 19px;
    }
    
    .catalog {
        background: #F5F6F7;
    }
    
    .catalog-nav {
      top: 84px;
      position:sticky;
    }

    // .catalog .contetnt-printbase .base-product-wrap:first-of-type {
    //    padding-top: 0;
    // }

    .catalog-nav {
      margin-top: 45px;
    }

    .catalog .pbase-catalog-nav-item {
        background: #fff;
        border-left-color: transparent;
        border-right-color: transparent;
        font-weight: 600;
        color: #6E7A81;
    }

    .catalog .pbase-catalog-nav-item:hover {
        background: #fcfcfc;
    }

    .pbase-catalog-nav-item:first-of-type {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    .pbase-catalog-nav-item.w--current {
        color: #0096ED;
    }

    .pbase-catalog-nav-item:last-of-type {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }

    #badgeFilter, #badgeFilterMobile {
        margin-top: 30px;
        position: relative;
    }

     #badgeFilterMobile {
        display: none;
     }

     .badgeFilter_title, .selected-category {
       position:relative;
     }
     .badgeFilter_title::after, .selected-category::after  {
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.4em solid #C5C5C5;
        border-right: 0.4em solid transparent;
        border-bottom: 0;
        border-left: 0.4em solid transparent;
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        right: 20px;
    }

     

    #badgeFilterMobile {
        margin-top: 0;
        margin-bottom: 16px;
        border-radius: 12px;
    }

    #badgeFilter .badgeFilter_title, #badgeFilterMobile .badgeFilter_title
    
    {
        padding: 16px 20px;
        // display: flex;
        background-color:#fff;
        border-radius: 12px;
        // height:50px;
        min-height:50px;
    }

    #badgeFilter .badgeFilter_title h4 {
        margin-top: 0;
        margin-bottom: 4px;
        color: #949494;
        font-size: 14px;
        text-transform: uppercase;
        line-height: 20px;
    }

    #badgeFilterMobile .badgeFilter_title h4 {
        font-weight: 400;
        margin: 0;
        color: #949494;
        opacity: .6;
        font-size: 14px;
        line-height: 20px;
    }

    #badgeFilter .badgeFilter_title p {
      font-size: 12px;
      line-height: 18px;
      color: #6E7A81;
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      opactity: .8;
    }

    #badgeFilterMobile .badgeFilter_title p {
        width: 60%;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-left: 8px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item, #badgeFilterMobile .badgeFilter_listFilterOption .badgeFilter_item {
        display: flex;
        align-items: center;
        border-top: 1px solid #F3F3F3;
        padding: 14px 20px;
        cursor: pointer;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item label, #badgeFilterMobile .badgeFilter_listFilterOption .badgeFilter_item label {
        font-size: 14px;
        color: #6E7A81;
        margin-bottom: 0;
        width: 100%;
        cursor: pointer;
        position: relative;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item label:before, #badgeFilterMobile .badgeFilter_listFilterOption .badgeFilter_item label:before {
          content:'';
          -webkit-appearance: none;
          background-color: transparent;
          border-radius: 6px;
          border: 1px solid #2DB0FA;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
          padding: 9px;
          display: inline-block;
          position: relative;
          vertical-align: middle;
          cursor: pointer;
          margin-right: 10px;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item input, #badgeFilterMobile .badgeFilter_listFilterOption .badgeFilter_item input {
        display: none;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item input:checked + label:after, #badgeFilterMobile .badgeFilter_listFilterOption .badgeFilter_item input:checked + label:after {
          content: '';
          display: block;
          position: absolute;
          top: 2px;
          left: 7px;
          width: 5px;
          height: 12px;
          border: solid #2DB0FA;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
    }


.base-products {
    position: relative;
    border-color: transparent;
}

.base-products .image-product {
    margin-bottom: 10px;
}

.base-product-wrap .collection-title {
    font-size: 24px;
    line-height: 30px;
    color: #000;
    margin-bottom: 16px;
    font-weight: 700;
}

.base-product-wrap .base-product-line {
      background-color: #ebebeb;
}

.contetnt-printbase {
  margin-top:-40px;
    position: relative;
    
}

#select-area {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 44px;
    z-index: 1;
}

.select-area-title {
    font-size: 14px;
    line-height: 20px;
    color: #949494;
    opacity: .6;
    margin: 0;
    text-transform: uppercase;
}

#select-area #select_options .s-option {
   margin-left: 16px;
   color: #6E7A81;
   font-weight: 700;
}

#select-area #select_options .s-option.s-option-active {
    color: #0096ED;
}

.search-box {
  display:flex;
  flex-direction:row;
  position: relative;
  margin-top: 52px;
}

#search-input {
  box-shadow: 0px 10px 16px -4px rgba(54, 62, 67, 0.06);
  max-width: 1200px;
  width: 100%;
  border-radius: 8px;
  border: #D6D6D6 1px solid;
  height: 56px;
  background-color: #FFFFFF;
  text-indent:48px;
}
#search-input::placeholder {
  color: #B3B3B3;
  font-size: 16px;
  line-height: 24px;
}
#search-input:focus {
  outline-style: none;
}
#search-submit {
  margin-top:8px;
  padding:11px 24px;
  border-radius:3px;
  position:absolute;
  right:8px;
  background-color:#0093ED;
  color:#FFFFFF;
  font-size:14px;
  font-weight:bold;
}
#search-submit:focus {
  outline-style: none;
}
.no-product {
  font-size: 16px;
  color: #131F37;
}

.group-icon {
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
}

.group-icon p {
    margin-bottom: 0;
    margin-right: 3px;
    position: relative;
}

.group-icon p .tool-tip {
    position: absolute;
    width: 220px;
    font-size: 14px;
    line-height: 20px;
    background: #000;
    color: #fff;
    padding: 8px;
    border-radius: 6px;
    z-index: 99;
    left: 0;
    top: 36px;
    display: none;
}

.group-icon p .tool-tip:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    background: #000;
    top: -3px;
    left: 8px;
    transform: rotate(45deg);
}

.group-icon p:hover .tool-tip {
    display: block;
}

.group-icon p img {
    width: 24px;
    max-width: 24px;
}




@media only screen and (max-width: 1200px) {

  .search-box {
    // margin-left: 25px;
    // margin-right: 25px;
  }

  #badgeFilter .badgeFilter_listFilterOption {
    max-height: 250px;
    overflow: auto;
    position: absolute;
    width: 100%;
  }
  
  .nav-menu-3{
    display: none;
  }
  .w-nav-button{
    display:block;
  }
  .w-nav-overlay{
    z-index:1001;
    top:74px;
  }
  nav.nav-menu-3{
    background-color:#fff;
    left:0;
    margin-left:0;
  }
  a.nav-link-6{
    padding-left:27px;
  }
}


@media only screen and (max-width: 1024px) {
  .hero-plain, .navbar.w-nav, .catalog.wf-section, .navbar.w-nav{
    padding-left:32px;
    padding-right:32px;
  }
 
  .category-list{
    max-height: 250px;
    overflow: auto;
    position: absolute;
    z-index: 1;

    width: 100%;
    background:#fff;
  }
  .container-14{
position:relative;
  }
  
  #badgeFilter{
margin-top:0;

  }
  #Navbar {
    background: #fff;
  }

 

  .catalog .contetnt-printbase {
    margin-left: 0;
    margin-top:80px;
  }

 
.catalog-nav {
  top:0;
  margin-top:0;
  height:auto !important;
  position:absolute;
  max-width:unset;
  z-index:2;
}
 
  .catalog .base-product-grid {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
  }

  .catalog #select-area {
    top: 80px;
  }
  .hero-plain,
  .navbar.w-nav,
  .catalog.wf-section,
  
  {
    padding-left:27px;
    padding-right:27px;
  }
    .catalog #select-area{
      top: 44px;
  
    }
    .catalog-nav{
      display: grid;
      grid-template-columns: repeat(2,calc(50% - 18px));
      place-items:start stretch;
      grid-column-gap: 36px;
    }
    .selected-category{
    display:block;
    }
   
   



    .link-block-8._3{
      border-radius:0;
    }
    .catalog .pbase-catalog-nav-item{
  background:transparent;
    }
    .pbase-catalog-nav-item.w--current {
      color: #6E7A81;
    }
 
    .hero-plain{
      background-color:#fff;
      padding-bottom:52px;
    }
    .category-list-heading{
      display:block;
    }
    #badgeFilter::after, #badgeFilterMobile::after{
      content:none;
    }
    .badgeFilter_listFiltered-ipad{
      position:relative;
      margin-bottom:0;
      padding-right: 40px;
    }
    .badgeFilter_listFiltered-ipad::after{
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.4em solid #C5C5C5;
      border-right: 0.4em solid transparent;
      border-bottom: 0;
      border-left: 0.4em solid transparent;
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      right: 20px;
    }
    #badgeFilter .badgeFilter_title{
    display:none;
  }
  .badgeFilter_title-ipad{
    display:block;
  }
  .badgeFilter_title-ipad h4{
    display:block;
  
  }
  
    .search-box{
       position:absolute;
       bottom: 0;
       transform: translate(-50%,50%);
       width: calc(100% - 64px);
       left:50%;
    }
    .content-h1.print{
      font-size:24px;
      margin:12px 0;
    }
    .paragraph-13._2{
      font-size:14px;
    
    }
    .grid-15 {
      grid-template-columns:1fr 1fr;
      grid-template-rows: auto;
    }
    .hero-plain{
      padding-top:17px;
    }
    }
  
@media only screen and (max-width: 767px){
  [data-tooltip]::after{
    left: -12px;
    transform: translateX(0);
  }
.catalog .contetnt-printbase {
        margin-left: 0;
        margin-top:0;
}
 .category-list-heading{
   display:none;
 }
 .selected-category{
   display:none;
 }
 .selected-category-mobile{
   display: flex;
   align-items: center;
 }

 .selected-category-mobile__title{
 color:#949494;
 margin-right: 8px;
 }
 .badgeFilter_title-ipad{
   display:none;
 }
 .badgeFilter_title-mobile{
   display:flex;
 }

 .catalog-nav {
  grid-template-columns: 100%;
  row-gap:16px;
  position:static;
  margin-top: 16px;
 }

 .catalog .contetnt-printbase {
  margin-left: 0;
  margin-top:16px;
}
 .navi _2 catalog-nav{
   flex-direcion: column;
  }
  .container-14{
    flex-direction: column;

 }
 .description-popup> table:nth-of-type(2) tr:nth-of-type(2) table p:nth-child(2){
      line-height: 1.5;
      font-size: 14px;
  }
  .description-popup> table:nth-of-type(2) tr:nth-of-type(2) table{
   border-collapse: initial !important;
   display: grid !important;
   grid-template-columns: repeat(1,1fr) !important;
   line-height: 18px !important;
   margin-top:24px !important;
   margin-left:0 !important;
   margin-right:0 !important;
  }
 

.w-layout-grid{
  grid-template-columns: 1fr;
}
#select-area{
  background: #FFFFFF;
  border-radius: 12px;
  font-size: 16px;
  line-height: 19px;
  color: #131F37;
  padding: 14px 20px;
  font-weight: 700;
  height: 50px;
}
#select-area::after{
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.4em solid #C5C5C5;
  border-right: 0.4em solid transparent;
  border-bottom: 0;
  border-left: 0.4em solid transparent;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 20px;
}

#select_options{
  position:absolute;
  display:none;
  top:100%;
  left:0;
  width:100%;
  max-height: 250px;
  overflow: auto;
  position: absolute;
  z-index: 1;
  width: 100%;
  background: #fff;
}
#select_options .s-option{
  display: flex;
  align-items: center;
  border-top: 1px solid #F3F3F3;
  padding: 14px 20px;
  cursor: pointer;

}

.catalog #select-area {
  width: 100%;
  position: relative;
  margin-bottom: -24px;
  top: 0;
}
.selected-tier-mobile{
  display:block;
  flex: 1 1 auto;
}
.select-area-title{
  margin-right: 8px;
}

.paragraph-13._2{
  max-width: unset;
}

.hero-plain{
  background: #F5F6F7;
}hero-plain
}
    



  @media only screen and (max-width: 479px) {
    .navbar {
      min-height: 60px;
  }
    
    .hero-plain, .navbar.w-nav, .catalog.wf-section, .navbar.w-nav{
      padding-left: 16px;
      padding-right: 16px;
    }
    .btn-scroll-top{
      right:14px;
      width: 54px;
      height: 54px;
      line-height: 54px;
      bottom: 85px;
    }
    .catalog {
      padding: 56px 12px 30px;
    }
    .hero-plain .container:first-child {
      margin-bottom:24px;
    }
 
    .search-box{
      width: calc(100% - 32px);
    }

    
    .catalog .base-product-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto;
      grid-template-rows: auto auto auto auto;
    }
    .catalog .base-product-wrap:first-of-type {
      margin-top: 40px;
    }
    
    #badgeFilterMobile {
      width: 100%;
      margin-left: 0;
    }
    .grid-15{
      grid-template-columns: 1fr;
    }
    .detail-popup {
      width: 100vw;
      height: 100vh;
      margin-top: 0px;
      padding-right: 24px;
      padding-left: 24px;
      border-radius: 0px;
  }
  .button-close{
    top: 60px;
    right: 0;
  }
}









.number-color {
  color: #0093ed;
}
.div-color {
  width:30px;
  height: 30px;
  border-radius:5px;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid rgb(235, 235, 235);
}
.div-list-color {
  width:100%;
  margin-bottom: 20px;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: fit-content;
  background-color: #3c4449;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 30%;
  margin-left: -25px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #3c4449 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
`;
document.getElementsByTagName("head")[0].appendChild(style);

//document.getElementById('search-input').className = 'cssClass';
$(".hero-plain").css("position", "relative");
document
  .querySelectorAll(".hero-plain")[0]
  .insertAdjacentHTML("beforeend", searchBarHtml);
// request.open(
//   "GET",
//   "https://gapi.stag.shopbase.net/v1/pod/landing-catalogs",
//   true
// );
request.open('GET', 'https://api.shopbase.com/v1/pod/landing-catalogs', true)
const checkViewPortSize = function () {
  const viewPortWidth = window.innerWidth
  if (viewPortWidth <= 479) {
    return 'mobile'
  }
  if (viewPortWidth <= 767) {
    return 'ipad'
  }
  if (viewPortWidth <= 1024) {
    return 'desktop'
  }
  return 'large-desktop'
}
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
    window.injectDataCatalogV2 = data;

    var injectData = window.injectDataCatalogV2.result.list_category;
    var navContent = `
    <div class='container-category-list'>
    <h4 class='category-list-heading'>Product Catalog</h4>`;

    const getCategoryAnchorLinkElement = function (item, index) {
      return `<a id="${item.name.toSlug()}-${index}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block pbase-catalog-nav-item">${item.name
        }</a>`
    }
    const selectedCategory = `
    <div class='selected-category'>${injectData[0].name}</div>
    <div class='selected-category-mobile'><h4 class='selected-category-mobile__title'>Product Catalog: </h4> <span class='selected-category-mobile__text'> ${injectData[0].name}<span></div>
    `
    navContent += selectedCategory + "<div class='category-list'>"
    injectData.map((item, index) => {
      navContent += getCategoryAnchorLinkElement(item, index);
    });
    navContent += "</div></div>";



    var filterContent = `<div id="select-area">
        <h4 class="select-area-title">Cashback tier:</h4>
        <p class="selected-tier-mobile"></p>
        <div id="select_options">
            <a class="s-option s-option-active" value="All">All</a>
            <a class="s-option" value="Gold Base">Gold Base</a>
            <a class="s-option" value="Silver Base">Silver Base</a>
        </div>
    </div>`;
    var nav = document.querySelectorAll(".catalog-nav")[0];
    nav.innerHTML = "";
    document
      .querySelectorAll(".catalog-nav")[0]
      .insertAdjacentHTML("beforeend", navContent);
    $(".catalog-nav").css("border", "none");
    $(".catalog-nav").css("overflow", "visible");
    $(".catalog-nav").css("height", "800px");

    $(".container-category-list .selected-category").on("click", () => {
      $(".container-category-list .category-list").slideToggle();
    });
    $(".container-category-list .selected-category-mobile").on("click", () => {
      $(".container-category-list .category-list").slideToggle();
    });
    $('.link-block-8._3').on('click', function () {
      if (checkViewPortSize() === 'desktop') {
        $(".container-category-list .category-list").slideToggle();
        const selectedCategory = $(this).text();
        console.log(selectedCategory);
        $('.container-category-list .selected-category').first().text(selectedCategory)
      }
      if (checkViewPortSize() === 'ipad') {
        $(".container-category-list .category-list").slideToggle();
        const selectedCategory = $(this).text();
        console.log(selectedCategory);
        $('.container-category-list .selected-category-mobile__text').first().text(selectedCategory)
      }

    })

    var container = document.querySelectorAll(".contetnt-printbase")[0];
    var listContent = "";
    function mapListBadgeByBaseProductId(
      baseProductId = 0,
      isBestSelling = false
    ) {
      if (
        !injectDataCatalogV2.result ||
        !injectDataCatalogV2.result.list_badge ||
        !injectDataCatalogV2.result.list_badge.list
      )
        return "";
      let res = [];
      if (isBestSelling) {
        res = injectDataCatalogV2.result.list_badge.list.filter((item) => {
          return (
            item.base_product_id === baseProductId &&
            item.display_name === "Best Selling"
          );
        });
        return res.length === 1;
      }
      injectDataCatalogV2.result.list_badge.list.map((item) => {
        if (item.base_product_id === baseProductId) {
          res.push(item.badge_id);
        }
      });

      return res.join(",");
    }
    var badgeFilterContent = `<div id="badgeFilter">
        <div class="badgeFilter_title">
            <h4>Collection</h4>
            <p class="badgeFilter_listFiltered"></p>
        </div>
        <div class="badgeFilter_title-ipad">
            <h4>Collection</h4>
            <p class="badgeFilter_listFiltered-ipad"><span class="listFiltered__placeholder">Please select a collection</span></p>
        </div>
        <div class="badgeFilter_title-mobile">
            <h4 class='badgeFilter_title-mobile__title'>Collection:</h4>
            <p class="badgeFilter_listFiltered-mobile"><span class="listFiltered__placeholder">Please select a collection</span></p>
        </div>
        <div class="badgeFilter_listFilterOption" style="display: none;">
        </div>
    </div>`;

    function isExistItemVisibleInCategories(catIdName) {
      let res = false;
      // console.log($(`#${catIdName} .base-products`));
      if (!catIdName || catIdName === "") return false;
      if ($(`#${catIdName}`) && $(`#${catIdName}`).length < 1) return false;
      if (
        $(`#${catIdName} .base-products`) &&
        $(`#${catIdName} .base-products`).length < 1
      )
        return false;
      $(`#${catIdName} .base-products`).each(function (index, el) {
        if ($(el).is(":visible")) {
          // console.log(catIdName);
          res = true;
          return false;
        }
      });
      console.log(4444, res);
      return res;
    }

    document
      .querySelectorAll(".catalog-nav")[0]
      .insertAdjacentHTML("beforeend", badgeFilterContent)
      ;
    injectData.map((item, indexCat) => {
      var listItem = "";
      item.list_base_product.map((product, indexProduct) => {
        var colorEnable = [];
        if (
          product.type !== "aop" &&
          product.color &&
          product.color.length > 0
        ) {
          colorEnable = product.color.filter((color) => {
            return color.enable === true;
          });
        }
        listItem += `<div class="base-products" data-cat="${indexCat}" data-index="${indexProduct}" group-name="${product.group_name
          }" id="${product.title.toSlug()}" data-title="${product.title
          }" data-search-term="${product.search_term
          }" data-custom-badge="${mapListBadgeByBaseProductId(product.id)}">
                <div class="group-icon">
                    <p class="ct-badge-icon" style="${mapListBadgeByBaseProductId(product.id, true)
            ? ""
            : "display: none"
          }">
                        <img src="https://dev-img.btdmp.com/sbase-file/internal/media/16359589016531495e6f.png" alt="ct-badge-icon" />
                        <span class="tool-tip">Best selling products</span>
                    </p>
                    <p>
                        <img src="${product.group_name === "Gold Base"
            ? "https://dev-img.btdmp.com/sbase-file/internal/media/1635959007ca0cd88e9d.png"
            : "https://dev-img.btdmp.com/sbase-file/internal/media/1635959060dd6ad3571f.png"
          }">
                        <span class="tool-tip">${product.group_name === "Gold Base"
            ? " For each item sold within Gold Base product group, you can receive up to $1 cashback."
            : " For each item sold within Silver Base product group, you can receive up to $0.5 cashback."
          }</span>
                    </p>
                </div>
            <img src="${product.image_catalog
          }" sizes="(max-width: 479px) 88vw, (max-width: 767px) 55vw, 64vw" alt="" class="image-product">
            <div class="detail-content">

            <p class="title">
                <strong class="bold">${product.title}</strong>
            </p>
            <p class="description _2">Base cost from:
                <strong class="price">$${product.base_cost}</strong>
            </p>
            ${colorEnable.length > 0
            ? '<p class="description _2">Available in <strong class="number-color">' +
            colorEnable.length +
            "</strong> colors</p>"
            : ""
          }

            </div></div>
            `;
      });
      var text1 = `<div id="${item.name.toSlug()}" style="${indexCat === 0 ? "" : ""
        }" class="base-product-wrap"><div class="collection-title">${item.name
        }</div>
        <p class="no-product" style="display:none;">No product found</p>
        <div class="w-layout-grid grid-17 _2 base-product-grid">
            ${listItem}
        </div>
        <div class="base-product-line"></div>
        </div>`;
      listContent += text1;
    });

    const noProductFound = `<p class='no-product' style="margin-top: 85px; display:none;" id="no-product-found">No product found</p>`;
    let timeOut = null;
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", filterContent);
    container.insertAdjacentHTML("beforeend", noProductFound);
    container.insertAdjacentHTML("beforeend", listContent);
    $(".loading-section").fadeOut();
    $(".catalog").fadeIn();



    $('.selected-tier-mobile').first().text(($(".s-option.s-option-active").first().text()))
    // Custom Badge Handler
    const listDistinctBadge = [];
    let titleBadge = [];
    injectDataCatalogV2.result.list_badge.list.forEach((item, index) => {
      if (!listDistinctBadge.includes(item.badge_id)) {
        listDistinctBadge.push(item.badge_id);
        titleBadge.push(item.display_name);
        const itemFilterBadge = `<div class="badgeFilter_item">
        <input type="checkbox" class="badgeFilter_item_checkbox" id="badge-${item.badge_id}" value="${item.badge_id}">
        <label for="badge-${item.badge_id}">${item.display_name}</label></div>
        `;
        const itemFilterBadgeMobile = `<div class="badgeFilter_item">
        <input type="checkbox" class="badgeFilter_item_checkbox" id="badge-${item.badge_id}-mobile" value="${item.badge_id}">
        <label for="badge-${item.badge_id}-mobile">${item.display_name}</label></div>
        `;
        document
          .querySelectorAll("#badgeFilter .badgeFilter_listFilterOption")[0]
          .insertAdjacentHTML("beforeend", itemFilterBadge);
        // document
        //   .querySelectorAll(
        //     "#badgeFilterMobile .badgeFilter_listFilterOption"
        //   )[0]
        //   .insertAdjacentHTML("beforeend", itemFilterBadgeMobile);
      }
    });

    // document.querySelectorAll('#badgeFilter .badgeFilter_listFiltered')[0].insertAdjacentHTML('beforeend', titleBadge.join(', '));
    // document.querySelectorAll('#badgeFilterMobile .badgeFilter_listFiltered')[0].insertAdjacentHTML('beforeend', titleBadge.join(', '));


    $("#badgeFilter .badgeFilter_title").on("click", () => {
      $(".badgeFilter_listFilterOption").slideToggle();
    });
    $(".badgeFilter_listFiltered-ipad").on("click", () => {
      $(".badgeFilter_listFilterOption").slideToggle();
    });
    $(".badgeFilter_title-mobile").on("click", () => {
      $(".badgeFilter_listFilterOption").slideToggle();
    });

    $("#badgeFilterIpad .badgeFilter_title").on("click", () => {
      $("#badgeFilterIpad .badgeFilter_listFilterOption").slideToggle();
    });

    var filterValue = {
      tier: "All",
      listBadgeId: [],
      listBadgeLabel: [],
    };

    function showHideBaseProductByFilter(el) {
      switch (true) {
        case filterValue.tier === "All" && filterValue.listBadgeId.length < 1:
          $(el).show();
          break;
        case filterValue.tier !== "All" && filterValue.listBadgeId.length < 1:
          if ($(el).attr("group-name") === filterValue.tier) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        case filterValue.tier !== "All" && filterValue.listBadgeId.length > 0: {
          if (
            $(el).attr("group-name") === filterValue.tier &&
            $(el).attr("data-custom-badge") &&
            $(el)
              .attr("data-custom-badge")
              .split(",")
              .filter((e) => filterValue.listBadgeId.indexOf(e) !== -1).length >
            0
          ) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        }
        case filterValue.tier === "All" && filterValue.listBadgeId.length > 0: {
          if (
            $(el).attr("data-custom-badge") &&
            $(el)
              .attr("data-custom-badge")
              .split(",")
              .filter((e) => filterValue.listBadgeId.indexOf(e) !== -1).length >
            0
          ) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        }
        default:
          break;
      }
    }
    function showHideBaseProductByTier(el) {
      switch (true) {
        case filterValue.tier === "All":
          $(el).show();
          break;
        case filterValue.tier !== "All": {
          if ($(el).attr("group-name") === filterValue.tier) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        }
      }
    }
    function showHideBaseProductByBadge(el) {
      if (filterValue.listBadgeId.length === 0) {
        $(el).show();
        return;
      }
      if (
        $(el)
          .attr("data-custom-badge")
          .split(",")
          .filter((e) => filterValue.listBadgeId.indexOf(e) !== -1).length > 0
      ) {
        $(el).show();
      } else {
        $(el).hide();
      }
    }

    function applyFilterTier(thisObj) {
      if (!thisObj) {
        thisObj = $(".s-option.s-option-active").first();
      }
      filterValue.tier = $(thisObj).attr("value");
      $(".base-products").each(function (i, obj) {
        showHideBaseProductByTier($(this));
      });
      $(".s-option").removeClass("s-option-active");
      $(thisObj).addClass("s-option-active");
      console.log($('.selected-tier-mobile'), $('.selected-tier-mobile').first(), $(thisObj).text());
      $('.selected-tier-mobile').first().text($(thisObj).text())
      hideEmptyCategory();
    }
    function applyFilterBadge() {
      filterValue.listBadgeId = [];
      filterValue.listBadgeLabel = [];
      $(".badgeFilter_item_checkbox").each(function (k, v) {
        if ($(v).is(":checked")) {
          filterValue.listBadgeId.push($(v).val());
          filterValue.listBadgeLabel.push($(v).next().html());
        }
      });
      $(".badgeFilter_listFiltered").html(
        filterValue.listBadgeLabel.map(item => `<span>${item}</span>`).join(", ")
      );
      $(".badgeFilter_listFiltered-ipad").html(
        filterValue.listBadgeLabel.map(item => `<span>${item}</span>`).join(", ")
      );
      $(".badgeFilter_listFiltered-mobile").html(
        filterValue.listBadgeLabel.map(item => `<span>${item}</span>`).join(", ")
      );
      if (filterValue.listBadgeId.length === 0) {
        $(".badgeFilter_listFiltered-mobile").html('<span class="listFiltered__placeholder">Please select a collection</span>')
        $(".badgeFilter_listFiltered-ipad").html('<span class="listFiltered__placeholder">Please select a collection</span>')
      }
      $(".base-products:visible").each(function (i, obj) {
        showHideBaseProductByBadge($(this));
      });
      hideEmptyCategory();
    }
    function hideEmptyCategory() {
      $(".base-product-wrap").each(function (index, el) {
        $(el).show();
        if (!isExistItemVisibleInCategories($(el).attr("id"))) {
          $(el).hide();
        } else {
          $(el).show();
        }
      });
      if ($(".base-product-wrap:visible").length === 0) {
        $("#no-product-found").show();
        $(".catalog-nav a").removeClass("w--current");
      } else {
        $("#no-product-found").hide();
      }
    }
    function getProductCashbackTierIcon(input) {
      switch (input.toLowerCase().replace('-', ' ')) {
        case 'gold base':
          return 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959007ca0cd88e9d.png'

        default:
          return 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959060dd6ad3571f.png'
      }
    }


    function getProductCustomBadgeIcon(product) {
      const productId = product.id
      if (!injectDataCatalogV2.result ||
        !injectDataCatalogV2.result.list_badge ||
        !injectDataCatalogV2.result.list_badge.list ||
        injectDataCatalogV2.result.list_badge.list.length === 0
      ) {
        return
      }
      const badgeList = injectDataCatalogV2.result.list_badge.list
      const customBadgeObj = badgeList.filter(badge => badge.base_product_id === productId)
      return customBadgeObj

    }

    function getBadgeTitle(input) {
      if (typeof input === 'string') {
        const formatedInput = input.toLowerCase().replace('-', ' ')
        if (formatedInput === 'gold base') { return 'Gold Base' }
        else { return 'Silver Base' }
      }
      if (Array.isArray(input)) {
        if (input.find(badgeObj => badgeObj.name.toLowerCase() === 'best-selling')) {
          return 'Best selling products'
        }
      }
      return ''
    }

    function getCustomBadgeIconImage(customBadgeIconList) {
      if (!customBadgeIconList || customBadgeIconList.length === 0) {
        return ''
      }
      if (customBadgeIconList.find(customBadgeIconObj => customBadgeIconObj.name.toLowerCase() === 'best-selling')) {
        return 'https://dev-img.btdmp.com/sbase-file/internal/media/16359589016531495e6f.png'
      }
      return ''
    }
    function checkIfGroupNameExist(input) {
      const formatedInput = input.toString().toLowerCase()
      if (
        formatedInput === 'gold base' ||
        formatedInput === 'silver base'

      ) {
        return true
      }
      return false
    }

    $(".badgeFilter_item").on("click", function (e) {
      // filterValue.listBadgeId = [];
      // filterValue.listBadgeLabel = []
      // $('.badgeFilter_item_checkbox').each(function (k, v) {
      //   if ($(v).is(':checked')) {
      //     filterValue.listBadgeId.push($(v).val());
      //     filterValue.listBadgeLabel.push($(v).next().html())
      //   }
      // });
      // $('.badgeFilter_listFiltered').html(filterValue.listBadgeLabel.join(', '))
      // console.log(filterValue.listBadgeLabel);

      // $('.base-products').each(function (i, obj) {
      //   showHideBaseProductByFilter($(this));
      // });
      // $('.base-product-wrap').each(function (index, el) {
      //   $(el).show();
      //   if (!isExistItemVisibleInCategories($(el).attr('id'))) {
      //     $(el).hide();
      //   } else {
      //     $(el).show();
      //   }
      // })
      applyFilterTier();
      applyFilterBadge();
      handleSearch();
      hideEmptyCategory();
    });

    $(".s-option").on("click", function (e) {
      applyFilterTier($(this));
      applyFilterBadge();
      handleSearch();
      hideEmptyCategory();

      e.stopPropagation();
    });
    $("#select-area").on("click", function (e) {
      if (checkViewPortSize() !== 'ipad' && checkViewPortSize() !== 'mobile') {
        return
      }
      $("#select_options").slideToggle()
    });

    var delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    function handleSearch() {
      var notFound = [];
      var inputValue = $("#search-input").val();
      $(".base-products:visible").each(function (i, obj) {
        if (inputValue == "") {
          notFound[i] = false;
        }
        let dataTitle = $(this).attr("data-title").toLowerCase();
        if (
          dataTitle.includes(inputValue.toLowerCase()) ||
          dataTitle == inputValue.toLowerCase()
        ) {
          $(this).css("display", "block");
          notFound[i] = false;
        } else {
          if ($(this).attr("data-search-term")) {
            searchTerm = $(this).attr("data-search-term").toLowerCase();
            if (
              searchTerm.includes(inputValue.toLowerCase()) ||
              searchTerm == inputValue.toLowerCase()
            ) {
              $(this).css("display", "block");
              notFound[i] = false;
            } else {
              $(this).css("display", "none");
              notFound[i] = true;
            }
          } else {
            $(this).css("display", "none");
            notFound[i] = true;
          }
        }
      });
      const searchResult = notFound.every(function (status) {
        if (status == false) {
          return false;
        }
        return true;
      });
      if (searchResult === true) {
        $(".no-product").show();
      } else {
        $(".no-product").hide();
      }
    }
    $("#search-submit").on("click", function (e) {
      applyFilterTier();
      applyFilterBadge();
      handleSearch();
      hideEmptyCategory();
      e.preventDefault();
    });
    $("#search-input").on("keyup", function (e) {
      if (e.keyCode !== 13) {
        return;
      }
      applyFilterTier();
      applyFilterBadge();
      handleSearch();
      hideEmptyCategory();
      e.preventDefault();
    });
    // Scroll top button
    var buttonScroll = `<div class="btn-scroll-top">
        <img src="https://dev-img.btdmp.com/sbase-file/internal/media/1637474755af8fda2499.png" />
    </div>`;
    container.insertAdjacentHTML("beforeend", buttonScroll);

    var navHeight = 410;
    $(".catalog .navi .link-block-8").each((index, el) => {
      navHeight += $(el).outerHeight();
    });
    $(".catalog .navi").height(navHeight);
    $(window).on('resize', () => {
      if (checkViewPortSize() === 'large-desktop') {
        $('.container-category-list .category-list').show()

      }
      else {
        $('.container-category-list .category-list').hide()

      }

      if (checkViewPortSize() === 'mobile' || checkViewPortSize() === 'ipad') {
        $('#select_options').hide()
      }
      else {
        $('#select_options').show()
      }

    })
    $(window)
      .scroll(() => {
        var windscroll = $(window).scrollTop();
        if (
          windscroll >= 100 &&
          $(".contetnt-printbase .base-product-wrap:visible").length > 0
        ) {
          $(".contetnt-printbase .base-product-wrap:visible").each(
            (index, value) => {
              var id = $(value).attr("id");
              if ($(value).position().top <= windscroll + 100) {
                if (
                  $(`.catalog-nav a[href="#${id}"]`) &&
                  $(`.catalog-nav a[href="#${id}"]`).length > 0
                ) {
                  $(".catalog-nav a").removeClass("w--current");
                  $(`.catalog-nav a[href="#${id}"]`).addClass("w--current");
                }
              }
            }
          );
        }
        if (windscroll >= 500) {
          $(".btn-scroll-top").show();
        } else {
          $(".btn-scroll-top").hide();
        }
      })
      .scroll();
    $(".btn-scroll-top").on("click", () => {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
    $(".base-products").on("click", (e) => {
      var productId = $(e.currentTarget).attr("id");
      let [hashNav] = window.location.hash.replace("#", "").split("/");
      if (hashNav) {
        hashNav = decodeURIComponent(hashNav).split("#")[0] || hashNav;
        window.location.href = `#${hashNav}/${productId}`;
      } else {
        let nav = $(e.currentTarget)
          .parents(".base-product-wrap")
          .first()
          .attr("id");
        window.location.href = `#${nav}/${productId}`;
      }
      var shippingZonesData = window.injectDataCatalogV2.result.shipping_zones;
      var dataCat = $(e.currentTarget).attr("data-cat");
      var dataIndex = $(e.currentTarget).attr("data-index");
      var productDescriptionData =
        injectData[dataCat].list_base_product[dataIndex];
      var dataArwortFront = productDescriptionData.artworks.filter(
        (item) =>
          item.part_name.toUpperCase() === "FRONT" && item.template_url !== ""
      );
      var dataArwortBack = productDescriptionData.artworks.filter(
        (item) =>
          item.part_name.toUpperCase() === "BACK" && item.template_url !== ""
      );
      var dataArwort = productDescriptionData.artworks.filter(
        (item) => item.template_url !== ""
      );
      var urlDownloadFrontArtWord =
        dataArwortFront[0] && dataArwortFront[0].template_url !== ""
          ? dataArwortFront[0].template_url
          : "#";
      var urlDownloadBackArtWord =
        dataArwortBack[0] && dataArwortBack[0].template_url !== ""
          ? dataArwortBack[0].template_url
          : "#";
      var urlDownloadArtWord =
        dataArwort[0] && dataArwort[0].template_url !== ""
          ? dataArwort[0].template_url
          : "#";
      var imgDescription = `<img src="${injectData[dataCat].list_base_product[dataIndex].image_catalog}" alt="img-product-description"/>`;
      document.querySelectorAll(
        ".product-description-popup .detail-popup .image"
      )[0].innerHTML = "";
      document
        .querySelectorAll(".product-description-popup .detail-popup .image")[0]
        .insertAdjacentHTML("beforeend", imgDescription);
      var hasWhiteColor =
        productDescriptionData.size_data.filter(
          (item) => item.white_color_price !== 0
        ).length > 0;
      var hasOtherColor =
        productDescriptionData.size_data.filter(
          (item) => item.other_color_price !== 0
        ).length > 0;
      var listColor = "";
      if (
        productDescriptionData.type !== "aop" &&
        productDescriptionData.color &&
        productDescriptionData.color.length > 0
      ) {
        for (var color of productDescriptionData.color) {
          if (color.enable) {
            listColor += `<div class="div-color tooltip" style="background-color: #${color.hex}"><span class="tooltiptext">${color.name}</span></div>`;
          }
        }
      }

      // start insert description
      const productDescriptions = document.querySelectorAll(
        ".product-description-popup .detail-popup .description-popup"
      );
      if (productDescriptions.length) {
        productDescriptions[0].innerHTML = "";
        productDescriptions[0].insertAdjacentHTML(
          "beforeend",
          `
                    <h1  class="description-popup__heading">
                        ${productDescriptionData.title}
                       
                    </h1>
<div class="badge-icon-list">
<div class="badge-icon badge-icon--custom-badge"
data-tooltip="${getBadgeTitle(getProductCustomBadgeIcon(productDescriptionData))}"
style="background-image:url(${getCustomBadgeIconImage(getProductCustomBadgeIcon(productDescriptionData))});${getCustomBadgeIconImage(getProductCustomBadgeIcon(productDescriptionData)) ? "" : "display: none;"}"
>
</div>
<div class="badge-icon badge-icon--cashback-tier"
data-tooltip="${getBadgeTitle(productDescriptionData.group_display_name)}"
style="background-image:url(${getProductCashbackTierIcon(productDescriptionData.group_display_name)});${!getProductCashbackTierIcon(productDescriptionData.group_display_name) ? 'display:none' : ''}">
 
</div>
</div>

                    <p class="description">
                        ${productDescriptionData.product_description}
                    </p>
                    ${listColor !== ""
            ? '<p><strong>Available colors:</strong></p><div class="div-list-color">' +
            listColor +
            "</div>"
            : ""
          }
          <div class="description-popup__artwork-requirement">
          <h3 class="description-popup__artwork-requirement__heading" >Artwork requirement</h3>
          <ul class="artwork-requirement__requirement-list">
          <li class="artwork-requirement__requirement--minimum"
          style="${!productDescriptionData.minimum_dpi?'display:none;':''}"
          
          >
          <label class="artwork-requirement__requirement__label requirement__label--minimum">
          Minimum:
          </label>
          <span class="artwork-requirement__requirement__content ">
          ${productDescriptionData.minimum_dpi} DPI
          </span>
          </li>
          <li class="artwork-requirement__requirement--dimension"
          style="${!productDescriptionData.default_dimension?'display:none;':''}"
          >
          <label class="artwork-requirement__requirement__label requirement__label--dimension">
          Dimensions:
          </label>
          <span class="artwork-requirement__requirement__content">
          ${productDescriptionData.default_dimension}
          </span>
          </li>
          </ul>
          </div>
                    <p><strong>Shipping lines:</strong> USPS, Fedex, YunExpress.</p>
                    <p><strong>Processing days:</strong> ${productDescriptionData.min_processing_day
          } - ${productDescriptionData.max_processing_day
          } business days</p>
                    <p>${productDescriptionData.short_description}</p>
                    <a
                        style="${dataArwort.length === 1 && dataArwort[0]
            ? ""
            : "display:none"
          }"
                        href="${urlDownloadArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template
                    </a>
                    <a
                        style="${dataArwort.length > 1 &&
            dataArwortFront[0] &&
            dataArwortFront[0].template_url !== ""
            ? ""
            : "display:none"
          }"
                        href="${urlDownloadFrontArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template Front
                    </a>
                    <a
                        style="${dataArwort.length > 1 &&
            dataArwortBack[0] &&
            dataArwortBack[0].template_url !== ""
            ? ""
            : "display:none"
          }"
                        href="${urlDownloadBackArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template Back
                    </a>
                `
        );
      }

      // start insert table shipping data
      var sizeDatas = productDescriptionData.size_data;
      var headerTableData = [{ name: "Size", props: { rowspan: 3 } }];

      if (hasWhiteColor && hasOtherColor) {
        headerTableData.push({
          name: hasWhiteColor && hasOtherColor ? "White color" : "Price",
          props: { rowspan: 3 },
        });
        headerTableData.push({
          name:
            hasWhiteColor && hasOtherColor
              ? injectData[dataCat].name.toUpperCase() === "APPAREL"
                ? "Other color&nbsp;*"
                : "Other color"
              : "Price",
          props: { rowspan: 3, width: "10%" },
        });
      } else {
        headerTableData.push({ name: "Price", props: { rowspan: 3 } });
      }

      headerTableData.push({
        name: "Shipping time",
        props: { colspan: 2, rowspan: 2 },
      });

      const shippingZone = [];
      for (var o of shippingZonesData) {
        shippingZone.push({ name: o.zone });
      }

      var rowTwoData = [];
      var rowThreeData = [].concat(shippingZone);
      var allLastRowData = [];

      var shippingTimeData = [
        { name: "N/A", props: { rowspan: sizeDatas.length } },
        { name: "N/A", props: { rowspan: sizeDatas.length } },
      ];
      if (
        productDescriptionData.shipping_profile &&
        productDescriptionData.shipping_profile.length
      ) {
        for (var profile of productDescriptionData.shipping_profile) {
          var fieldIndex = profile.shipping_zone_id === 1 ? 0 : 1;
          if (
            profile.shipping_time_lines &&
            profile.shipping_time_lines.length
          ) {
            var name = "";
            for (var shippingTimeLine of profile.shipping_time_lines) {
              name += `<p><strong>${shippingTimeLine.name}</strong>:<br/>${shippingTimeLine.shipping_time_min}-${shippingTimeLine.shipping_time_max}<br/>Business Days</p>`;
            }
            shippingTimeData[fieldIndex] = {
              name: name,
              props: { rowspan: sizeDatas.length },
            };
          } else if (profile.shipping_time) {
            shippingTimeData[fieldIndex] = {
              name: profile.shipping_time,
              props: { rowspan: sizeDatas.length },
            };
          }
        }
      }

      if (sizeDatas.length) {
        var shippingGroups = [];
        var i = 0;
        for (var sizeData of sizeDatas) {
          var lastRowData = [];
          lastRowData.push({ name: sizeData.size });
          if (hasWhiteColor && hasOtherColor) {
            lastRowData.push({ name: `$${sizeData.white_color_price}` });
            lastRowData.push({ name: `$${sizeData.other_color_price}` });
          } else {
            lastRowData.push({ name: `$${sizeData.price}` });
          }
          if (i === 0) {
            lastRowData = lastRowData.concat(shippingTimeData);
          }

          if (sizeData.shipping_groups && sizeData.shipping_groups.length) {
            for (var shippingGroup of sizeData.shipping_groups) {
              var index = shippingGroups.findIndex((o) => {
                if (!o) return false;
                return o.name.trim() === shippingGroup.group.trim();
              });
              if (index < 0) {
                shippingGroups.push({
                  name: shippingGroup.group.trim(),
                  props: { colspan: 4 },
                });
                rowTwoData.push(
                  { name: "First item shipping cost", props: { colspan: 2 } },
                  { name: "Additional items", props: { colspan: 2 } }
                );
                rowThreeData = rowThreeData.concat(shippingZone);
                rowThreeData = rowThreeData.concat(shippingZone);
              }
            }

            sizeData.shipping_groups.sort((a, b) => {
              if (
                shippingGroups.findIndex(
                  (o) => o.name.trim() === a.group.trim()
                ) >
                shippingGroups.findIndex(
                  (o) => o.name.trim() === b.group.trim()
                )
              ) {
                return 1;
              }
              return -1;
            });

            var cols = [];
            var y = 0;
            for (const group of sizeData.shipping_groups) {
              if (group.shipping_rules.length) {
                var cur = y;
                var usIndex = group.shipping_rules.findIndex((o) => {
                  return o.shipping_zone_id === 1;
                });
                var internationalIndex = group.shipping_rules.findIndex((o) => {
                  return o.shipping_zone_id === 2;
                });
                if (usIndex > -1) {
                  cols[cur] = {
                    name: `$${group.shipping_rules[usIndex].first_item_price}`,
                  };
                  cols[cur + 2] = {
                    name: `$${group.shipping_rules[usIndex].additional_price}`,
                  };
                } else {
                  cols[cur] = { name: "N/A" };
                  cols[cur + 2] = { name: "N/A" };
                }

                if (internationalIndex > -1) {
                  cols[cur + 1] = {
                    name: `$${group.shipping_rules[internationalIndex].first_item_price}`,
                  };
                  cols[cur + 3] = {
                    name: `$${group.shipping_rules[internationalIndex].additional_price}`,
                  };
                } else {
                  cols[cur + 1] = { name: "N/A" };
                  cols[cur + 3] = { name: "N/A" };
                }
              }
              y = y + 4;
            }
            lastRowData = lastRowData.concat(cols);
          }
          allLastRowData.push(lastRowData);
          i++;
        }
        headerTableData = headerTableData.concat(shippingGroups);
      }

      var tableData = [
        headerTableData,
        rowTwoData,
        rowThreeData,
        ...allLastRowData,
      ];

      var shippingDatas = document.querySelectorAll(".table-sizechart");
      if (shippingDatas.length) {
        shippingDatas[0].innerHTML = "";
        shippingDatas[0].insertAdjacentHTML(
          "beforeend",
          `<div class="size-char-table" style="overflow-x: auto; width: 100%;">${buildTable(
            tableData
          )}</div>`
        );
      }

      $(".product-description-popup").fadeIn(100);
      $(".detail-popup").scrollTop(0);
    });
    let [hashNav, hashProduct] = window.location.hash
      .replace("#", "")
      .split("/");
    if (hashNav && hashProduct) {
      const scrollTopOriginal = $(`#${hashProduct}`).offset()
        ? $(`#${hashProduct}`).offset().top - 90
        : 0;
      const loop = setInterval(() => {
        let scrollTop = $(`#${hashProduct}`).offset()
          ? $(`#${hashProduct}`).offset().top - 90
          : 0;
        $("html, body").animate({ scrollTop }, 500);
        if (scrollTopOriginal !== scrollTop) clearInterval(loop);
      }, 300);
      $(`#${hashProduct}`).trigger("click");
    }
    if (hashNav && !hashProduct) {
      window.location.href = `#${hashNav}`;
    }
  } else {
    console.log("error");
  }
};
$("body").on("click", ".button-close", () => {
  closeModal();
});
var closeModal = function () {
  let [hashNav, hashProduct] = window.location.hash.replace("#", "").split("/");
  if (hashNav && hashProduct) {
    window.history.pushState("", "/", window.location.pathname);
  }
};

var buildTable = function (tableData) {
  var table = "";

  var buildProps = function (props) {
    var propString = "";
    if (props && Object.keys(props).length) {
      for (var key of Object.keys(props)) {
        propString += `${key}="${props[key]}"`;
      }
    }
    return propString;
  };

  if (tableData.length) {
    table += "<table>";
    var i = 1;
    for (const rowData of tableData) {
      if (i === 1) table += "<thead>";
      table += "<tr>";
      for (const row of rowData) {
        if (row) {
          var elemTag = row.tag || "td";
          table += `<${elemTag} ${buildProps(row.props)}>`;
          table += row.name;
          table += `</${elemTag}>`;
        }
      }
      table += "</tr>";
      if (i === 3) table += "</thead>";
      i++;
    }
    table += "</table>";
  }

  return table;
};

String.prototype.toSlug = function () {
  return this.toString()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");
};
request.send();
