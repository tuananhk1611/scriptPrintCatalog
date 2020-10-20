var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.shopbase.com/v1/pod/catalogs', true);
// request.open('GET', 'https://gapi.stag.shopbase.net/v1/pod/catalogs', true);
request.onload = function () {
    // Begin accessing JSON0 data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        window.injectDataCatalog = data;
        var injectData = window.injectDataCatalog.result.list_category;
      // Render navigator list
      var navContent = "";
      injectData.map(function(item, index) {
        navContent += `<a id="${item.name.toSlug()}-${index}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block">${item.name}</a>`
      });
      var nav = document.querySelectorAll('.catalog-nav')[0];
      nav.innerHTML = "";
      document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', navContent);
//       $('.catalog-nav a').on('click', function() {
//          $('.catalog-nav a').removeClass('w--current');
//    			 $(this).toggleClass('w--current');
//       });
      // Render content categories
      var container = document.querySelectorAll('.contetnt-printbase')[0];
      var listContent = "";
      injectData.map(function(item, indexCat) {
        listItem = "";
        item.list_base_product.map(function(product, indexProduct) {
          listItem += `<div class="base-products" data-cat="${indexCat}" data-index="${indexProduct}" id="${product.title.toSlug()}">
            <img src="${product.image_catalog}" sizes="(max-width: 479px) 88vw, (max-width: 767px) 55vw, 64vw" alt="" class="image-product">
            <div class="detail-content">
              <p class="title">
                <strong class="bold">${product.title}</strong>
              </p>
              <p class="description _2">Base cost from: 
                <strong class="price">$${product.base_cost}</strong>
              </p>
              <div class="line-2"></div>
              <p class="paragraph-bold">
                <strong class="subtitle">Artwork requirement</strong>
              </p>
              <p class="description">
                Minimum ${product.minimum_dpi} DPI
                <br><span style="${product.default_dimension !== "" ? "" : "display:none"}">Dimensions: ${product.default_dimension}</span>
              </p>
            </div></div>
            `
        });
        var text1 = `<div id="${item.name.toSlug()}" class="base-product-wrap"><div class="text-block-95">${item.name}</div>
          <div class="w-layout-grid grid-17 _2 base-product-grid">
            ${listItem}
          </div>
          <div class="base-product-line"></div>
        </div>`
        listContent += text1;
      });
      container.innerHTML = "";
      container.insertAdjacentHTML('beforeend', listContent);
      $('.loading-section').fadeOut();
      $('.catalog').fadeIn();
       // Calcu height navi
      var navHeight = 0;
      $('.catalog .navi .link-block-8').each(function(index, el) {
        navHeight += $(el).outerHeight();
      })
      $('.catalog .navi').height(navHeight);
      $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll >= 100) {
                $('.contetnt-printbase .base-product-wrap').each(function(index, value) {
                    var id = $(value).attr('id');
                   if ($(value).position().top <= windscroll + 10) {
                     if ($(`.catalog-nav a[href="#${id}"]`) && $(`.catalog-nav a[href="#${id}"]`).length > 0) {
                        $('.catalog-nav a').removeClass('w--current');
                        $(`.catalog-nav a[href="#${id}"]`).addClass('w--current');
                     }
                   }
                });
            }
       }).scroll();
      $('.base-products').on('click', function(e) {
          var productId = $(e.currentTarget).attr('id');
          let [_, hashNav] = window.location.hash.split('#')
          if (hashNav) {
            window.location.href = `#${hashNav}#${productId}`
          } else {
            let nav = $(e.currentTarget).parents('.base-product-wrap').first().attr('id');
            window.location.href = `#${nav}#${productId}`
          }
          var shippingZonesData = window.injectDataCatalog.result.shipping_zones;
          var dataCat = $(e.currentTarget).attr('data-cat');
          var dataIndex = $(e.currentTarget).attr('data-index');
          var productDescriptionData = injectData[dataCat].list_base_product[dataIndex];
          var dataArwortFront = productDescriptionData.artworks.filter(item => item.part_name.toUpperCase() === "FRONT" && item.template_url !== "");
          var dataArwortBack = productDescriptionData.artworks.filter(item => item.part_name.toUpperCase() === "BACK" && item.template_url !== "");
          var dataArwort = productDescriptionData.artworks.filter(item => item.template_url !== "");
          var urlDownloadFrontArtWord = dataArwortFront[0] && dataArwortFront[0].template_url !== "" ? dataArwortFront[0].template_url : '#';
          var urlDownloadBackArtWord = dataArwortBack[0] && dataArwortBack[0].template_url !== "" ? dataArwortBack[0].template_url : '#';
          var urlDownloadArtWord = dataArwort[0] && dataArwort[0].template_url !== "" ? dataArwort[0].template_url : '#';
          var imgDescription = `<img src="${injectData[dataCat].list_base_product[dataIndex].image_catalog}" alt="img-product-description"/>`;
          document.querySelectorAll('.product-description-popup .detail-popup .image')[0].innerHTML = "";
          document.querySelectorAll('.product-description-popup .detail-popup .image')[0].insertAdjacentHTML("beforeend", imgDescription);
          var hasWhiteColor = productDescriptionData.size_data.filter(item => item.white_color_price !== 0).length > 0;
          var hasOtherColor = productDescriptionData.size_data.filter(item => item.other_color_price !== 0).length > 0;
          var productDescription = `
  <h1 class="h2">
      ${productDescriptionData.title}
      <span style="${productDescriptionData.group_display_name && productDescriptionData.group_display_name !== '' ? '' : 'display: none;'}" class="product-group-label ${productDescriptionData.group_display_name === 'Gold Base' ? 'gold' : 'silver'}">${productDescriptionData.group_display_name}</span>
  </h1>
  <p class="description">
    ${productDescriptionData.product_description}
  </p>
  <p><strong>Shipping lines:</strong> USPS, Fedex, YunExpress.</p>
  <p><strong>Processing days:</strong> ${productDescriptionData.min_processing_day} - ${productDescriptionData.max_processing_day} bussiness days</p>
  <p>${productDescriptionData.short_description}</p>
  <a style="${dataArwort.length === 1 && dataArwort[0] ? "" : "display:none"}" href="${urlDownloadArtWord}" class="download-template w-inline-block">
      Download Artwork Template
  </a>
  <a style="${dataArwort.length > 1 && dataArwortFront[0] && dataArwortFront[0].template_url !== "" ? "" : "display:none" }" href="${urlDownloadFrontArtWord}" class="download-template w-inline-block">
  Download Artwork Templates Front
    </a>
  <a style="${dataArwort.length > 1 && dataArwortBack[0] && dataArwortBack[0].template_url !== "" ? "" : "display:none" }" href="${urlDownloadBackArtWord}" class="download-template w-inline-block">
  Download Artwork Templates Back
    </a>
  `;

          // Table Size data
          var sizeData = productDescriptionData.size_data;
          var contentTable = "";
          sizeData.map(function(data, index) {
            var row = `<tr>
  <td>${data.size}</td>
  <td style="${hasWhiteColor ? "" : "display: none;"}">$${data.white_color_price}</td>
  <td style="${hasOtherColor ? "" : "display: none;"}">$${data.other_color_price}</td>
    </tr>`;
            contentTable += row;
          })
          var tableSizeData = `<div class="size-data-table size-char-table"><table>
  <thead>
  <tr>
  <td>Size</td>
  <td style="${hasWhiteColor ? "" : "display: none;"}">${hasWhiteColor && hasOtherColor ? "White color" : "Price"}</td>
  <td style="${hasOtherColor ? "" : "display: none;"}">${hasWhiteColor && hasOtherColor ? `${injectData[dataCat].name.toUpperCase() === 'APPAREL' ? "Other color <sup>*</sup>" : "Other color"}` : "Price"}</td>
    </tr>
    </thead>
  <tbody>
  <tr class="first-tr">
    <td><span>0</span></td>
    <td style="${hasWhiteColor ? "" : "display: none;"}"><span>0</span></td>
    <td style="${hasOtherColor ? "" : "display: none;"}"><span>0</span></td>
  </tr>
  ${contentTable}
    </tbody>
    </table></div>`;
          document.querySelectorAll('.table-sizechart')[0].innerHTML = "";
          document.querySelectorAll('.table-sizechart')[0].insertAdjacentHTML('beforeend', tableSizeData);

          var shippingProfileData = productDescriptionData.shipping_profile;
          var shippingData = {};
          for (i = 0; i < shippingProfileData.length; i++) {
            shippingZonesData.map(function(item) {
              if (item.id === shippingProfileData[i].shipping_zone_id) {
                shippingProfileData[i].zone_name = item.zone;
                shippingData[item.zone] = shippingProfileData[i];
              }
            })
          }
          var headerShippingTable = "";
          shippingProfileData.map(function(data) {
            var row = `<td>${data.zone_name}</td>`
            headerShippingTable += row;
          })
          // Table Shipping Time

          var contentShippingTimeTable = "";
          shippingProfileData.map(function(data) {
            var row = `
  <td>${shippingData[data.zone_name].shipping_time} <br> business days</td>
    `;
            contentShippingTimeTable += row;
          })
          var tableShippingTime = `<div  class="shipping-time-table size-char-table"><table>
  <thead>
  <tr>
       <td colspan="2">Shipping time</td>
    </tr>
    </thead>
  <tbody>
  <tr class="first-tr">
  ${headerShippingTable}
    </tr>
    <tr>
      ${contentShippingTimeTable}
    </tr>
    </tbody>
    </table></div>`;
          document.querySelectorAll('.table-sizechart')[0].insertAdjacentHTML('beforeend', tableShippingTime);
          // Table Shipping Cost
          var contentShippingCostTable = "";
//           shippingProfileData.map(function(data) {
//             var row = `
//   <td>$${shippingData[data.zone_name].shipping_fee}</td>
//     `;
//             contentShippingCostTable += row;
//           })
          sizeData.map(function(data, index) {
    var row = `<tr>
        <td>$${data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1).length > 0 && data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0].first_item_price ? data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0].first_item_price : ""}</td>
        <td>$${data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2).length > 0 && data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0].first_item_price ? data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0].first_item_price : ""}</td>
   </tr> `;
        contentShippingCostTable += row;
    });
          var tableShippingCost = `<div class="shipping-cost-table size-char-table"><table>
  <thead>
  <tr>
       <td colspan="2">Shipping cost</td>
    </tr>
    </thead>
  <tbody>
  <tr class="first-tr">
  ${headerShippingTable}
    </tr>
     ${contentShippingCostTable}
    </tbody>
    </table></div>`;
   document.querySelectorAll('.table-sizechart')[0].insertAdjacentHTML('beforeend', tableShippingCost);
   // Table Additional items
    var contentAdditionalTable = "";
    sizeData.map(function(data, index) {
    var row = `<tr>
        <td>$${data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1).length > 0 && data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0].additional_price ? data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0].additional_price : ""}</td>
        <td>$${data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2).length > 0 && data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0].additional_price ? data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0].additional_price : ""}</td>
    </tr>`;
        contentAdditionalTable += row;
    })
     var tableAdditional = `<div class="additional-table size-char-table"><table>
    <thead>
       <tr>
         <td colspan="2">Additional items</td>
        </tr>
    </thead>
  <tbody>
  <tr class="first-tr">
       ${headerShippingTable}
  </tr>
     ${contentAdditionalTable}
  </tbody>
    </table></div>`;

  document.querySelectorAll('.table-sizechart')[0].insertAdjacentHTML('beforeend', tableAdditional);
  var productDescriptionPopup = document.querySelectorAll('.product-description-popup .detail-popup .description-popup')[0];
  productDescriptionPopup.innerHTML = "";
  productDescriptionPopup.insertAdjacentHTML('beforeend', productDescription);
  $('.product-description-popup').fadeIn(100);
  });

  // Jump to hastag
  let [_, hashNav, hashProduct] = window.location.hash.split('#')

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
        console.log('error');
    }
}

$('body').on('click', '.button-close', () => {
  let [_, hashNav, hashProduct] = window.location.hash.split('#')
  if (hashNav && hashProduct) {
    window.history.pushState('', '/', window.location.pathname)
  }
})
String.prototype.toSlug = function () {
    return this
      .toString()
      .toLowerCase()
      .replace(/\s/g,'-')
      .replace(/[^a-zA-Z0-9-]/g, '')
}

// Send request
request.send()
