
var request = new XMLHttpRequest()
var searchBarHtml = `<div class="container search-box">
    <img style="position:absolute;left:16px;top:0;margin-top:20px;" src="https://www.printbase.com/wp-content/uploads/2021/07/Search.svg" >
    <input id="search-input" type="text" placeholder="Search for products..." />
    <button id="search-submit" type="button">Search</button>
  </div>`
var style = document.createElement('style');
style.innerHTML = `
    #badgeFilter {
        border-radius: 12px;
        box-shadow: 0 0 8px #eee;
        margin-top: 30px;
        cursor: pointer;
        position: relative;
    }

    #badgeFilter::after {
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

    #badgeFilter .badgeFilter_title h4 {
        margin-top: 0;
        margin-bottom: 4px;
        color: #949494;
        font-size: 14px;
        text-transform: uppercase;
        line-height: 20px;
    }

    #badgeFilter .badgeFilter_title p {
      font-size: 12px;
      line-height: 18px;
      color: #949494;
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item {
        display: flex;
        align-items: center;
        border-top: 1px solid #F3F3F3;
        padding: 14px 20px;
        cursor: pointer;
    }

    #badgeFilter .badgeFilter_listFilterOption .badgeFilter_item label {
        font-size: 14px;
        margin-left: 10px;
        color: #6E7A81;
        margin-bottom: 0;
        width: 100%;
        cursor: pointer;
    }


.base-products {
    position: relative;
}
.contetnt-printbase {
    position: relative;
}

#select-area {
    cursor: pointer;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e8e8e8;
    padding: 8px 14px;
    border-radius: 3px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
}

#select-area .drop-down-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

#select-area #select_options {
    display: none;
    margin-top: 10px;
    overflow: visible !important;
    position: absolute;
    height: auto;
    background: #fff;
    top: 100%;
    right: 0;
    width: 280px;
    box-shadow: 0 0 12px #eee;
}

#select-area #select_options .s-option {
    padding: 10px 24px;
}

#select-area #select_options .s-option img {
    width: 16px;
    margin-right: 8px;
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
}

.group-icon p img {
    width: 24px;
    max-width: 24px;
}

@media only screen and (max-width: 479px) {
  .hero-plain .container:first-child {
    margin-bottom:24px;
  }
  .search-box {
    margin-left: 25px;
    margin-right: 25px;
  }
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
request.open('GET', 'https://api.shopbase.com/v1/pod/landing-catalogs', true)
request.onload = function () {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    window.injectDataCatalogV2 = data
    
    var injectData = window.injectDataCatalogV2.result.list_category
    var navContent = ''
    injectData.map((item, index) => {
      navContent += `<a id="${item.name.toSlug()}-${index}" style="${!index ? 'border-top: 1px solid #ebebeb; border-top-left-radius: 5px;border-top-right-radius: 5px' : ''}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block">${item.name
      }</a>`
    })
    var filterContent = '';
    filterContent += `<div id="select-area">
        <div class="drop-down-box">
            <label style="font-weight: 400; font-size: 14px; color: #5E6A6E; margin-bottom: 0">Cashback tier: <span id="select-value" style="font-weight: 600">All</span></label>
            <svg style="width: 10px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
        </div>
        <div id="select_options">
        <a class="link-block-8 _3 w-inline-block s-option" value="All" style="border-left: 1px solid rgb(235, 235, 235); border-top: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235); border-top-left-radius: 5px; border-top-right-radius: 5px">All</a>
        <a class="link-block-8 _3 w-inline-block  s-option" value="Gold Base" style="border-left: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235);"><img src="https://dev-img.btdmp.com/sbase-file/internal/media/1635869889a6bce76f1b.png" />Gold Base</a>
        <a class="link-block-8 _3 w-inline-block s-option" value="Silver Base" style="border-left: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235);border-bottom: 1px solid rgb(235, 235, 235); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px"><img src="https://dev-img.btdmp.com/sbase-file/internal/media/16358701831ad1a28c7e.png" />Silver Base</a>
        </div></div></div>`;
    var nav = document.querySelectorAll('.catalog-nav')[0];
    nav.innerHTML = '';
    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', navContent);
    $('.catalog-nav').css('border', 'none')
    $('.catalog-nav').css('overflow', 'visible')
    $('.catalog-nav').css('height', '800px')
    $('.catalog-nav').css('height', '800px')
    $('.w-inline-block').css('border-left', '1px solid #ebebeb')
    $('.w-inline-block').css('border-right', '1px solid #ebebeb')
    $('.w-inline-block-last').css({'border-bottom-left-radius': '10px'})
    $('.w-inline-block-last').css('border-bottom-right-radius', '10px')
    var container = document.querySelectorAll('.contetnt-printbase')[0];
    var listContent = '';
    function mapListBadgeByBaseProductId(baseProductId = 0) {
      if (!injectDataCatalogV2.result || !injectDataCatalogV2.result.list_badge || !injectDataCatalogV2.result.list_badge.list) return '';
      const res = [];
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
            <div class="badgeFilter_item">
                <input type="checkbox" class="badgeFilter_item_checkbox" id="all_badge" value="0">
                <label for="all_badge">All</label>
            </div>
        </div>
    </div>`;
    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', badgeFilterContent);
    injectData.map((item, indexCat) => {
      listItem = ''
      item.list_base_product.map((product, indexProduct) => {
        var colorEnable = []
        if (product.type !== 'aop' && product.color && product.color.length > 0) {
          colorEnable = product.color.filter((color) => {
            return color.enable === true
          })
        }
        listItem += `<div class="base-products" data-cat="${indexCat}" data-index="${indexProduct}" group-name="${product.group_name
        }" id="${product.title.toSlug()}" data-title="${product.title}" data-search-term="${product.search_term}" data-custom-badge="${mapListBadgeByBaseProductId(product.id)}">
                <div class="group-icon">
                    <p class="ct-badge-icon" style="${mapListBadgeByBaseProductId(product.id) === '' ? 'display: none' : ''}"><img src="https://dev-img.btdmp.com/sbase-file/internal/media/16359589016531495e6f.png" alt="ct-badge-icon" /></p>
                    <p title="${product.group_name === 'Gold Base' ? ' For each item sold within Gold Base product group, you can receive up to $1 cashback.' : ' For each item sold within Silver Base product group, you can receive up to $0.5 cashback.'}">
                        <img src="${product.group_name === 'Gold Base' ? 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959007ca0cd88e9d.png' : 'https://dev-img.btdmp.com/sbase-file/internal/media/1635959060dd6ad3571f.png'}">
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
                <div class="line-2"></div>
                <p class="paragraph-bold">
                    <strong class="subtitle">Artwork requirement</strong>
                </p>
                <p class="description">
                    Minimum ${product.minimum_dpi} DPI
                    <br><span style="${product.default_dimension !== '' ? '' : 'display:none'
}">Dimensions: ${product.default_dimension}</span>
                </p>
                </div></div>
                `
      })
      var text1 = `<div id="${item.name.toSlug()}" class="base-product-wrap"><div class="text-block-95">${item.name
      }</div>
            <p class="no-product" style="display:none;">No product found</p>
            <div class="w-layout-grid grid-17 _2 base-product-grid">
                ${listItem}
            </div>
            <div class="base-product-line"></div>
            </div>`
      listContent += text1
    })
    let timeOut = null;
    container.innerHTML = ''
    container.insertAdjacentHTML('beforeend', listContent)
    container.insertAdjacentHTML('beforeend', filterContent);
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
        document.querySelectorAll('.badgeFilter_listFilterOption')[0].insertAdjacentHTML('beforeend', itemFilterBadge);
      }
    });
    document.querySelectorAll('.badgeFilter_listFiltered')[0].insertAdjacentHTML('beforeend', titleBadge.join(', '));
    $('#badgeFilter .badgeFilter_title').on('click', () => {
      $('.badgeFilter_listFilterOption').slideToggle();
    });

    $('.badgeFilter_item').on('click', function() {
      function checkItemHadBadge(badgeId) {
        $('.base-products').hide();
        $('.base-products').each((k, v) => {
          if (badgeId === '0' || badgeId === 0) {
            if ($(v).attr('data-custom-badge') && $(v).attr('data-custom-badge') !== '')  {
              $(v).show();
            }
            return;
          }

          if ($(v).attr('data-custom-badge') && $(v).attr('data-custom-badge').indexOf(badgeId) !== -1)  {
            $(v).show();
          }
        });
      }
      setTimeout(() => {
        let nothingFilter = true;
        $('.badgeFilter_item_checkbox').each(function (k, v) {
          if ($(v).is(':checked')) {
            nothingFilter = false;
            checkItemHadBadge(($(v).val()));
          }
        });

        if (nothingFilter) {
          $('.base-products').show();
        }
      }, 5);
    });
    // Hidden for test
    $('#badgeFilter,.ct-badge-icon').hide();
    window.testCustomBadge = () => {
      $('#badgeFilter,.ct-badge-icon').show();
    };


    $('#select-area').on('click', () => {
      $('#select_options').toggle();
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

    $('.s-option').on('click', function (e) {
      const filterValue = $(this).attr('value');
      $('.base-products').each(function (i, obj) {
        if (filterValue === 'All' || $(this).attr('group-name') === filterValue) {
          $(this).css('display', 'block')
        } else {
          $(this).css('display', 'none')
        }
      })
      $('#select-value').text(filterValue);
      $('#select_options').hide();
      e.stopPropagation();
    });

    var navHeight = 410
    $('.catalog .navi .link-block-8').each((index, el) => {
      navHeight += $(el).outerHeight()
    })
    $('.catalog .navi').height(navHeight)
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
    }).scroll()
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
}
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
