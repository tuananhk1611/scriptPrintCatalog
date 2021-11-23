
var request = new XMLHttpRequest();
var searchBarHtml = `<div class="container search-box">
    <img style="position:absolute;left:16px;top:0;margin-top:20px;" src="https://www.printbase.com/wp-content/uploads/2021/07/Search.svg" >
    <input id="search-input" type="text" placeholder="Search for products..." />
    <button id="search-submit" type="button">Search</button>
  </div>`
var style = document.createElement('style');
style.innerHTML = `
    .btn-scroll-top {
        position: fixed;
        z-index: 9;
        right: 20px;
        bottom: 100px;
        width: 64px;
        height: 64px;
        line-height: 64px;
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
        background: #f8f8f8;
    }
    
    .catalog-nav.navi {
      top: 84px;
    }

    .catalog .contetnt-printbase .base-product-wrap:first-of-type {
       padding-top: 0;
    }

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
        border-radius: 12px;
        margin-top: 30px;
        cursor: pointer;
        position: relative;
        background: #fff;
    }

     #badgeFilterMobile {
        display: none;
     }

    #badgeFilter::after, #badgeFilterMobile::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.4em solid #C5C5C5;
        border-right: 0.4em solid transparent;
        border-bottom: 0;
        border-left: 0.4em solid transparent;
        position: absolute;
        top: 24px;
        right: 20px;
    }

    #badgeFilter .badgeFilter_title {
        padding: 16px 20px;
    }

    #badgeFilterMobile {
        margin-top: 0;
        margin-bottom: 16px;
        border-radius: 6px;
    }

    #badgeFilterMobile .badgeFilter_title {
        padding: 16px 20px;
        display: flex;
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
    position: relative;
}

#select-area {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 4px;
    z-index: 9;
}

#select-area .select-area-title {
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
  position:absolute;
  bottom:-25px;
  left:0;
  right:0;
  margin: auto;
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
    margin-left: 25px;
    margin-right: 25px;
  }

  #badgeFilter .badgeFilter_listFilterOption {
    max-height: 250px;
    overflow: auto;
  }
}

@media only screen and (max-width: 1024px) {
  #Navbar {
    background: #fff;
  }
  #badgeFilterMobile {
    display: block;
    width: 48%;
    margin-left: 52%;
  }

  #badgeFilterMobile .badgeFilter_listFilterOption {
    position: absolute;
    z-index: 9999;
    width: 100%;
    background: rgb(255, 255, 255);
    top: 45px;
  }

  #badgeFilter {
    display: none;
  }

  .catalog .contetnt-printbase {
    margin-left: 0;
  }

  .catalog-nav {
    display: none;
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
}

@media only screen and (max-width: 479px) {
  .catalog {
    padding: 56px 12px 30px;
  }
  .hero-plain .container:first-child {
    margin-bottom:24px;
  }
  .search-box {
    margin-left: 12px;
    margin-right: 12px;
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
  .catalog #select-area {
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    top: 0;
  }

  .catalog #select-area .select-area-title {
    width: 130px;
  }

  #badgeFilterMobile {
    width: 100%;
    margin-left: 0;
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
  margin-bottom: 10px;
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
document.getElementsByTagName('head')[0].appendChild(style);

//document.getElementById('search-input').className = 'cssClass';
$('.hero-plain').css('position', 'relative')
document.querySelectorAll('.hero-plain')[0].insertAdjacentHTML('beforeend', searchBarHtml)
request.open('GET', 'https://gapi.stag.shopbase.net/v1/pod/landing-catalogs', true)
// request.open('GET', 'https://api.shopbase.com/v1/pod/landing-catalogs', true)
request.onload = function () {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    window.injectDataCatalogV2 = data
    var injectData = window.injectDataCatalogV2.result.list_category
    var navContent = ''
    injectData.map((item, index) => {
      navContent += `<a id="${item.name.toSlug()}-${index}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block pbase-catalog-nav-item">${item.name
      }</a>`
    });
    var filterContent = `<div id="select-area">
        <h4 class="select-area-title">Cashback tier:</h4>
        <div id="select_options">
            <a class="s-option s-option-active" value="All">All</a>
            <a class="s-option" value="Gold Base">Gold Base</a>
            <a class="s-option" value="Silver Base">Silver Base</a>
        </div>
    </div>`
    var nav = document.querySelectorAll('.catalog-nav')[0];
    nav.innerHTML = '';
    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', navContent);
    $('.catalog-nav').css('border', 'none');
    $('.catalog-nav').css('overflow', 'visible');
    $('.catalog-nav').css('height', '800px');
    var container = document.querySelectorAll('.contetnt-printbase')[0];
    var listContent = '';
    function mapListBadgeByBaseProductId(baseProductId = 0, isBestSelling = false) {
      if (!injectDataCatalogV2.result || !injectDataCatalogV2.result.list_badge || !injectDataCatalogV2.result.list_badge.list) return '';
      let res = [];
      if (isBestSelling) {
        res = injectDataCatalogV2.result.list_badge.list.filter((item) => { return item.base_product_id === baseProductId && item.display_name === 'Best Selling' });
        return res.length === 1
      }
      injectDataCatalogV2.result.list_badge.list.map((item) => {
        if (item.base_product_id === baseProductId) {
          res.push(item.badge_id);
        }
      });

      return res.join(',');
    }
    var badgeFilterContent = `<div id="badgeFilter">
        <div class="badgeFilter_title">
            <h4>Collections</h4>
            <p class="badgeFilter_listFiltered"></p>
        </div>
        <div class="badgeFilter_listFilterOption" style="display: none;">
        </div>
    </div>`;

    var badgeFilterContentMobile = `<div id="badgeFilterMobile" class="badgeFilterContentMobile">
        <div class="badgeFilter_title">
            <h4>Collections: </h4>
            <p class="badgeFilter_listFiltered"></p>
        </div>
        <div class="badgeFilter_listFilterOption" style="display: none;">
        </div>
    </div>`;

    function isExistItemVisibleInCategories(catIdName) {
      let res = false;
      if (!catIdName || catIdName === '') return false;
      if ($(`#${catIdName}`) && $(`#${catIdName}`).length < 1) return false;
      if ($(`#${catIdName} .base-products`) && $(`#${catIdName} .base-products`).length < 1) return false;
      $(`#${catIdName} .base-products`).each(function(index, el) {
        if($(el).is(':visible')) {
          console.log(catIdName);
          res = true;
          return false;
        }
      });
      console.log(4444, res);
      return res;
    }

    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', badgeFilterContent);
    injectData.map((item, indexCat) => {
      var listItem = '';
      item.list_base_product.map((product, indexProduct) => {
        var colorEnable = [];
        if (product.type !== 'aop' && product.color && product.color.length > 0) {
          colorEnable = product.color.filter((color) => {
            return color.enable === true
          })
        }
        listItem += `<div class="base-products" data-cat="${indexCat}" data-index="${indexProduct}" group-name="${product.group_name
        }" id="${product.title.toSlug()}" data-title="${product.title}" data-search-term="${product.search_term}" data-custom-badge="${mapListBadgeByBaseProductId(product.id)}">
                <div class="group-icon">
                    <p class="ct-badge-icon" style="${mapListBadgeByBaseProductId(product.id, true) ? '' : 'display: none'}">
                        <img src="https://dev-img.btdmp.com/sbase-file/internal/media/16359589016531495e6f.png" alt="ct-badge-icon" />
                        <span class="tool-tip">Best selling products</span>
                    </p>
                    <p>
                        <img src="${product.group_name === 'Gold Base' ? 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959007ca0cd88e9d.png' : 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959060dd6ad3571f.png'}">
                        <span class="tool-tip">${product.group_name === 'Gold Base' ? ' For each item sold within Gold Base product group, you can receive up to $1 cashback.' : ' For each item sold within Silver Base product group, you can receive up to $0.5 cashback.'}</span>
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
            ${colorEnable.length > 0 ? '<p class="description _2">Available in <strong class="number-color">' + colorEnable.length + '</strong> colors</p>' : ""}

            </div></div>
            `
      })
      var text1 = `<div id="${item.name.toSlug()}" style="${indexCat === 0 ? 'padding-top:0' : ''}" class="base-product-wrap"><div class="collection-title">${item.name
      }</div>
        <p class="no-product" style="display:none;">No product found</p>
        <div class="w-layout-grid grid-17 _2 base-product-grid">
            ${listItem}
        </div>
        <div class="base-product-line"></div>
        </div>`
      listContent += text1
    });
    let timeOut = null;
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', badgeFilterContentMobile);
    container.insertAdjacentHTML('beforeend', filterContent);
    container.insertAdjacentHTML('beforeend', listContent)
    $('.loading-section').fadeOut()
    $('.catalog').fadeIn();

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
        `
        const itemFilterBadgeMobile = `<div class="badgeFilter_item">
        <input type="checkbox" class="badgeFilter_item_checkbox" id="badge-${item.badge_id}-mobile" value="${item.badge_id}">
        <label for="badge-${item.badge_id}-mobile">${item.display_name}</label></div>
        `
        document.querySelectorAll('#badgeFilter .badgeFilter_listFilterOption')[0].insertAdjacentHTML('beforeend', itemFilterBadge);
        document.querySelectorAll('#badgeFilterMobile .badgeFilter_listFilterOption')[0].insertAdjacentHTML('beforeend', itemFilterBadgeMobile);
      }
    });
    document.querySelectorAll('#badgeFilter .badgeFilter_listFiltered')[0].insertAdjacentHTML('beforeend', titleBadge.join(', '));
    document.querySelectorAll('#badgeFilterMobile .badgeFilter_listFiltered')[0].insertAdjacentHTML('beforeend', titleBadge.join(', '));
    $('#badgeFilter .badgeFilter_title').on('click', () => {
      $('.badgeFilter_listFilterOption').slideToggle();
    });

    $('#badgeFilterMobile .badgeFilter_title').on('click', () => {
      $('#badgeFilterMobile .badgeFilter_listFilterOption').slideToggle();
    });

    var filterValue = {
      tier: 'All',
      listBadgeId: [],
    };

    function showHideBaseProductByFilter(el) {
      switch (true) {
        case filterValue.tier === 'All' && filterValue.listBadgeId.length < 1:
          $(el).show();
          break;
        case filterValue.tier !== 'All' && filterValue.listBadgeId.length < 1:
          if ($(el).attr('group-name') === filterValue.tier) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        case filterValue.tier !== 'All' && filterValue.listBadgeId.length > 0: {
          if ($(el).attr('group-name') === filterValue.tier && $(el).attr('data-custom-badge') && $(el).attr('data-custom-badge').split(',').filter(e => filterValue.listBadgeId.indexOf(e) !== -1).length > 0) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        }
        case filterValue.tier === 'All' && filterValue.listBadgeId.length > 0: {
          if ($(el).attr('data-custom-badge') && $(el).attr('data-custom-badge').split(',').filter(e => filterValue.listBadgeId.indexOf(e) !== -1).length > 0) {
            $(el).show();
          } else {
            $(el).hide();
          }
          break;
        }
        default: break;
      }
    }

    $('.badgeFilter_item').on('click', function(e) {
      filterValue.listBadgeId = [];
      $('.badgeFilter_item_checkbox').each(function (k, v) {
        if ($(v).is(':checked')) {
          filterValue.listBadgeId.push($(v).val());
        }
      });

      $('.base-products').each(function (i, obj) {
        showHideBaseProductByFilter($(this));
      });
      $('.base-product-wrap').each(function (index, el) {
        $(el).show();
        if (!isExistItemVisibleInCategories($(el).attr('id'))) {
          $(el).hide();
        } else {
          $(el).show();
        }
      })
    });

    $('.s-option').on('click', function (e) {
      filterValue.tier = $(this).attr('value');
      $('.base-products').each(function (i, obj) {
        showHideBaseProductByFilter($(this));
      });
      $('.s-option').removeClass('s-option-active');
      $(this).addClass('s-option-active');
      $('.base-product-wrap').each(function (index, el) {
        $(el).show();
        if (!isExistItemVisibleInCategories($(el).attr('id'))) {
          $(el).hide();
        } else {
          $(el).show();
        }
      })
      e.stopPropagation();
    });

    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
     };
    })();
    $('#search-input').keyup(() => {
        var notFound = []
        var inputValue = $('#search-input').val() 
        delay(function(){
          $('.base-products').each(function (i, obj) {
            if(inputValue == '') {
              $(this).css('display', 'block')
              notFound[i] = false
            }
            let dataTitle = $(this).attr('data-title').toLowerCase();
            if ( dataTitle.includes(inputValue.toLowerCase()) || dataTitle == inputValue.toLowerCase()) {
              $(this).css('display', 'block');
              notFound[i] = false
            } else {
              if($(this).attr('data-search-term')) {
                searchTerm = $(this).attr('data-search-term').toLowerCase();
                if(searchTerm.includes(inputValue.toLowerCase()) || searchTerm == inputValue.toLowerCase() ) {
                  $(this).css('display', 'block')
                  notFound[i] = false
                }else{
                  $(this).css('display', 'none')
                  notFound[i] = true
                }
              }else {
                $(this).css('display', 'none')
                notFound[i] = true
              }
            }
          })
          const searchResult = notFound.every(function(status) {
            if(status == false) {
              return false
            }
            return true
          });
          if(searchResult === true) {
            $('.no-product').show()
          }else {
            $('.no-product').hide()
          }
        }, 1000 );
        
        
      
    })
    $('#search-submit').on('click', function(e){
      e.preventDefault()
      var notFound = []
      var inputValue = $('#search-input').val() 
      $('.base-products').each(function (i, obj) {
        if(inputValue == '') {
          $(this).css('display', 'block')
          notFound[i] = false
        }
        let dataTitle = $(this).attr('data-title').toLowerCase();
        if ( dataTitle.includes(inputValue.toLowerCase()) || dataTitle == inputValue.toLowerCase()) {
          $(this).css('display', 'block');
          notFound[i] = false
        } else {
          if($(this).attr('data-search-term')) {
            searchTerm = $(this).attr('data-search-term').toLowerCase();
            if(searchTerm.includes(inputValue.toLowerCase()) || searchTerm == inputValue.toLowerCase() ) {
              $(this).css('display', 'block')
              notFound[i] = false
            }else{
              $(this).css('display', 'none')
              notFound[i] = true
            }
          }else {
            $(this).css('display', 'none')
            notFound[i] = true
          }
        }
      })
      const searchResult = notFound.every(function(status) {
        if(status == false) {
          return false
        }
        return true
      });
      if(searchResult === true) {
        $('.no-product').show()
      }else {
        $('.no-product').hide()
      }
    });
    // Scroll top button
    var buttonScroll = `<div class="btn-scroll-top">
        <img src="https://dev-img.btdmp.com/sbase-file/internal/media/1637474755af8fda2499.png" />
    </div>`;
    container.insertAdjacentHTML('beforeend', buttonScroll);

    var navHeight = 410
    $('.catalog .navi .link-block-8').each((index, el) => {
      navHeight += $(el).outerHeight()
    })
    $('.catalog .navi').height(navHeight);
    $(window).scroll(() => {
      var windscroll = $(window).scrollTop()
      if (windscroll >= 100) {
        $('.contetnt-printbase .base-product-wrap').each((index, value) => {
          var id = $(value).attr('id')
          if ($(value).position().top <= windscroll + 100) {
            if ($(`.catalog-nav a[href="#${id}"]`) && $(`.catalog-nav a[href="#${id}"]`).length > 0) {
              $('.catalog-nav a').removeClass('w--current')
              $(`.catalog-nav a[href="#${id}"]`).addClass('w--current')
            }
          }
        })
      }
      if (windscroll >= 500) {
        $('.btn-scroll-top').show();
      } else {
        $('.btn-scroll-top').hide();
      }
    }).scroll();
    $('.btn-scroll-top').on('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
    $('.base-products').on('click', (e) => {
      var productId = $(e.currentTarget).attr('id')
      let [hashNav] = window.location.hash.replace('#', '').split('/')
      if (hashNav) {
        hashNav = decodeURIComponent(hashNav).split('#')[0] || hashNav
        window.location.href = `#${hashNav}/${productId}`
      } else {
        let nav = $(e.currentTarget).parents('.base-product-wrap').first().attr('id')
        window.location.href = `#${nav}/${productId}`
      }
      var shippingZonesData = window.injectDataCatalogV2.result.shipping_zones
      var dataCat = $(e.currentTarget).attr('data-cat')
      var dataIndex = $(e.currentTarget).attr('data-index')
      var productDescriptionData = injectData[dataCat].list_base_product[dataIndex]
      var dataArwortFront = productDescriptionData.artworks.filter((item) => item.part_name.toUpperCase() === 'FRONT' && item.template_url !== '')
      var dataArwortBack = productDescriptionData.artworks.filter((item) => item.part_name.toUpperCase() === 'BACK' && item.template_url !== '')
      var dataArwort = productDescriptionData.artworks.filter((item) => item.template_url !== '')
      var urlDownloadFrontArtWord = dataArwortFront[0] && dataArwortFront[0].template_url !== '' ? dataArwortFront[0].template_url : '#'
      var urlDownloadBackArtWord = dataArwortBack[0] && dataArwortBack[0].template_url !== '' ? dataArwortBack[0].template_url : '#'
      var urlDownloadArtWord = dataArwort[0] && dataArwort[0].template_url !== '' ? dataArwort[0].template_url : '#'
      var imgDescription = `<img src="${injectData[dataCat].list_base_product[dataIndex].image_catalog}" alt="img-product-description"/>`
      document.querySelectorAll('.product-description-popup .detail-popup .image')[0].innerHTML = ''
      document.querySelectorAll('.product-description-popup .detail-popup .image')[0].insertAdjacentHTML('beforeend', imgDescription)
      var hasWhiteColor = productDescriptionData.size_data.filter((item) => item.white_color_price !== 0).length > 0
      var hasOtherColor = productDescriptionData.size_data.filter((item) => item.other_color_price !== 0).length > 0
      var listColor = ''
      if (productDescriptionData.type !== 'aop' && productDescriptionData.color && productDescriptionData.color.length > 0) {
        for (var color of productDescriptionData.color) {
          if (color.enable) {
            listColor += `<div class="div-color tooltip" style="background-color: #${color.hex}"><span class="tooltiptext">${color.name}</span></div>`
          }
        }
      }

      // start insert description
      const productDescriptions = document.querySelectorAll('.product-description-popup .detail-popup .description-popup')
      if (productDescriptions.length) {
        productDescriptions[0].innerHTML = ''
        productDescriptions[0].insertAdjacentHTML('beforeend', `
                    <h1 title="${productDescriptionData.group_name === 'Gold Base' ? 'For each item sold within Gold Base product group, you can receive up to $1 cashback.' : 'For each item sold within Silver Base product group, you can receive up to $0.5 cashback.'}" class="h2">
                        ${productDescriptionData.title}
                        <span
                            style="${productDescriptionData.group_display_name && productDescriptionData.group_display_name !== '' ? '' : 'display: none;'
}"
                            class="product-group-label ${productDescriptionData.group_display_name === 'Gold Base' ? 'gold' : 'silver'
}"
                        >
                            ${productDescriptionData.group_display_name}
                        </span>
                    </h1>
                    <p class="description">
                        ${productDescriptionData.product_description}
                    </p>
                    ${listColor !== '' ? '<p><strong>Available colors:</strong></p><div class="div-list-color">'+ listColor +'</div>' : ""}
                    <p><strong>Shipping lines:</strong> USPS, Fedex, YunExpress.</p>
                    <p><strong>Processing days:</strong> ${productDescriptionData.min_processing_day} - ${productDescriptionData.max_processing_day} business days</p>
                    <p>${productDescriptionData.short_description}</p>
                    <a
                        style="${dataArwort.length === 1 && dataArwort[0] ? '' : 'display:none'}"
                        href="${urlDownloadArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template
                    </a>
                    <a
                        style="${dataArwort.length > 1 && dataArwortFront[0] && dataArwortFront[0].template_url !== '' ? '' : 'display:none'}"
                        href="${urlDownloadFrontArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template Front
                    </a>
                    <a
                        style="${dataArwort.length > 1 && dataArwortBack[0] && dataArwortBack[0].template_url !== '' ? '' : 'display:none'}"
                        href="${urlDownloadBackArtWord}"
                        class="download-template w-inline-block"
                    >
                        Download Artwork Template Back
                    </a>
                `)
      }

      // start insert table shipping data
      var sizeDatas = productDescriptionData.size_data
      var headerTableData = [{ name: 'Size', props: { rowspan: 3 } }]

      if (hasWhiteColor && hasOtherColor) {
        headerTableData.push({
          name: hasWhiteColor && hasOtherColor ? 'White color' : 'Price',
          props: { rowspan: 3 }
        })
        headerTableData.push(
          {
            name: hasWhiteColor && hasOtherColor ? (injectData[dataCat].name.toUpperCase() === 'APPAREL' ? 'Other color&nbsp;*' : 'Other color') : 'Price',
            props: { rowspan: 3, width: '10%' }
          }
        )
      } else {
        headerTableData.push({ name: 'Price', props: { rowspan: 3 }})
      }

      headerTableData.push({ name: 'Shipping time', props: { colspan: 2, rowspan: 2 }})

      const shippingZone = []
      for (var o of shippingZonesData) {
        shippingZone.push({ name: o.zone })
      }

      var rowTwoData = []
      var rowThreeData = [].concat(shippingZone)
      var allLastRowData = []

      var shippingTimeData = [{ name: 'N/A', props: { rowspan: sizeDatas.length } }, { name: 'N/A', props: { rowspan: sizeDatas.length } }]
      if (productDescriptionData.shipping_profile && productDescriptionData.shipping_profile.length) {
        for (var profile of productDescriptionData.shipping_profile) {
          var fieldIndex = profile.shipping_zone_id === 1 ? 0 : 1
          if (profile.shipping_time_lines && profile.shipping_time_lines.length) {
            var name = ''
            for (var shippingTimeLine of profile.shipping_time_lines) {
              name += `<p><strong>${shippingTimeLine.name}</strong>:<br/>${shippingTimeLine.shipping_time_min}-${shippingTimeLine.shipping_time_max}<br/>Business Days</p>`
            }
            shippingTimeData[fieldIndex] = { name: name, props: { rowspan: sizeDatas.length } }
          } else if (profile.shipping_time) {
            shippingTimeData[fieldIndex] = { name: profile.shipping_time, props: { rowspan: sizeDatas.length }}
          }
        }
      }

      if (sizeDatas.length) {
        var shippingGroups = []
        var i = 0
        for (var sizeData of sizeDatas) {
          var lastRowData = []
          lastRowData.push({ name: sizeData.size })
          if (hasWhiteColor && hasOtherColor) {
            lastRowData.push({ name: `$${sizeData.white_color_price}` })
            lastRowData.push({ name: `$${sizeData.other_color_price}` })
          } else {
            lastRowData.push({ name: `$${sizeData.price}` })
          }
          if (i === 0) {
            lastRowData = lastRowData.concat(shippingTimeData)
          }

          if (sizeData.shipping_groups && sizeData.shipping_groups.length) {
            for (var shippingGroup of sizeData.shipping_groups) {
              var index = shippingGroups.findIndex((o) => {
                if (!o) return false
                return o.name.trim() === shippingGroup.group.trim()
              })
              if (index < 0) {
                shippingGroups.push({
                  name: shippingGroup.group.trim(),
                  props: {colspan: 4}
                })
                rowTwoData.push(
                  {name: 'First item shipping cost', props: {colspan: 2}},
                  {name: 'Additional items', props: {colspan: 2}}
                )
                rowThreeData = rowThreeData.concat(shippingZone)
                rowThreeData = rowThreeData.concat(shippingZone)
              }
            }

            sizeData.shipping_groups.sort((a, b) => {
              if (shippingGroups.findIndex(o => o.name.trim() === a.group.trim()) > shippingGroups.findIndex(o => o.name.trim() === b.group.trim())) {
                return 1
              }
              return -1
            })

            var cols = []
            var y = 0
            for (const group of sizeData.shipping_groups) {
              if (group.shipping_rules.length) {
                var cur = y
                var usIndex = group.shipping_rules.findIndex((o) => {
                  return o.shipping_zone_id === 1
                })
                var internationalIndex = group.shipping_rules.findIndex((o) => {
                  return o.shipping_zone_id === 2
                })
                if (usIndex > -1) {
                  cols[cur] = { name: `$${group.shipping_rules[usIndex].first_item_price}` }
                  cols[cur + 2] = { name: `$${group.shipping_rules[usIndex].additional_price}` }
                } else {
                  cols[cur] = {name: 'N/A'}
                  cols[cur + 2] = {name: 'N/A'}
                }

                if (internationalIndex > -1) {
                  cols[cur + 1] = { name: `$${group.shipping_rules[internationalIndex].first_item_price}` }
                  cols[cur + 3] = { name: `$${group.shipping_rules[internationalIndex].additional_price}` }
                } else {
                  cols[cur + 1] = {name: 'N/A'}
                  cols[cur + 3] = {name: 'N/A'}
                }
              }
              y = y + 4
            }
            lastRowData = lastRowData.concat(cols)
          }
          allLastRowData.push(lastRowData)
          i++
        }
        headerTableData = headerTableData.concat(shippingGroups)
      }

      var tableData = [
        headerTableData,
        rowTwoData,
        rowThreeData,
        ...allLastRowData
      ]

      var shippingDatas = document.querySelectorAll('.table-sizechart')
      if (shippingDatas.length) {
        shippingDatas[0].innerHTML = ''
        shippingDatas[0].insertAdjacentHTML('beforeend', `<div class="size-char-table" style="overflow-x: auto; width: 100%;">${buildTable(tableData)}</div>`)
      }

      $('.product-description-popup').fadeIn(100)
      $('.detail-popup').scrollTop(0)
    })
    let [hashNav, hashProduct] = window.location.hash.replace('#', '').split('/')
    if (hashNav && hashProduct) {
      const scrollTopOriginal = $(`#${hashProduct}`).offset() ? $(`#${hashProduct}`).offset().top - 90 : 0
      const loop = setInterval(() => {
        let scrollTop = $(`#${hashProduct}`).offset() ? $(`#${hashProduct}`).offset().top - 90 : 0
        $('html, body').animate({scrollTop}, 500)
        if (scrollTopOriginal !== scrollTop) clearInterval(loop)
      }, 300)
      $(`#${hashProduct}`).trigger('click')
    }
    if (hashNav && !hashProduct) {
      window.location.href = `#${hashNav}`
    }
  } else {
    console.log('error')
  }
};
$('body').on('click', '.button-close', () => {
  closeModal()
})
var closeModal = function () {
  let [hashNav, hashProduct] = window.location.hash.replace('#', '').split('/')
  if (hashNav && hashProduct) {
    window.history.pushState('', '/', window.location.pathname)
  }
}

var buildTable = function (tableData) {
  var table = ''

  var buildProps = function (props) {
    var propString = ''
    if (props && Object.keys(props).length) {
      for (var key of Object.keys(props)) {
        propString += `${key}="${props[key]}"`
      }
    }
    return propString
  }

  if (tableData.length) {
    table += '<table>'
    var i = 1
    for (const rowData of tableData) {
      if (i === 1) table += '<thead>'
      table += '<tr>'
      for (const row of rowData) {
        if (row) {
          var elemTag = row.tag || 'td'
          table += `<${elemTag} ${buildProps(row.props)}>`
          table += row.name
          table += `</${elemTag}>`
        }
      }
      table += '</tr>'
      if (i === 3) table += '</thead>'
      i++
    }
    table += '</table>'
  }

  return table
}

String.prototype.toSlug = function () {
  return this.toString().toLowerCase().replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '')
}
request.send()
