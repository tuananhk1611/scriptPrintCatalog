var request = new XMLHttpRequest()
request.open('GET', 'https://api.shopbase.com/v1/pod/landing-catalogs', true)
request.onload = function () {
  console.log(this)
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    window.injectDataCatalogV2 = data
    var injectData = window.injectDataCatalogV2.result.list_category
    var navContent = ''
    injectData.map((item, index) => {
      navContent += `<a id="${item.name.toSlug()}-${index}" style="${!index ? 'border-top: 1px solid #ebebeb; border-top-left-radius: 5px;border-top-right-radius: 5px' : ''}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block">${item.name
      }</a>`
    })
    var filterContent = ''
    filterContent += `<div id="select-area" style="width: 100%; margin-top: 50px; display: flex;align-items: center; justify-content: space-between; background-color: #e8e8e8; padding: 10px 20px; border-radius: 10px">
            <div style="display: grid">
            <label style="font-weight: 400; font-size: 16px; color: #5E6A6E">Cashback tier</label>
            <span id="select-value" style="font-weight: 600">All</span>
            </div>
            <svg style="width: 15px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
            </div>
            <div class="navi _2 catalog-nav" id="select_options" style="overflow: visible !important; display:none; margin-top:10px;  height: 404px">
            <a class="link-block-8 _3 w-inline-block s-option" value="All" style="border-left: 1px solid rgb(235, 235, 235); border-top: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235); border-top-left-radius: 5px; border-top-right-radius: 5px">All</a>
            <a class="link-block-8 _3 w-inline-block  s-option" value="Gold Base" style="border-left: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235);">Gold Base</a>
            <a class="link-block-8 _3 w-inline-block s-option" value="Silver Base" style="border-left: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235);border-bottom: 1px solid rgb(235, 235, 235); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px">Silver Base</a>
            </div></div>`
    var nav = document.querySelectorAll('.catalog-nav')[0]
    nav.innerHTML = ''
    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', navContent)
    document.querySelectorAll('.catalog-nav')[0].insertAdjacentHTML('beforeend', filterContent)
    $('.catalog-nav').css('border', 'none')
    $('.catalog-nav').css('overflow', 'visible')
    $('.catalog-nav').css('height', '800px')
    $('.catalog-nav').css('height', '800px')
    $('.w-inline-block').css('border-left', '1px solid #ebebeb')
    $('.w-inline-block').css('border-right', '1px solid #ebebeb')
    $('.w-inline-block-last').css({'border-bottom-left-radius': '10px'})
    $('.w-inline-block-last').css('border-bottom-right-radius', '10px')
    var container = document.querySelectorAll('.contetnt-printbase')[0]
    var listContent = ''
    injectData.map((item, indexCat) => {
      listItem = ''
      item.list_base_product.map((product, indexProduct) => {
        listItem += `<div class="base-products" data-cat="${indexCat}" data-index="${indexProduct}" group-name="${product.group_name
        }" id="${product.title.toSlug()}">
                <img src="${product.image_catalog
}" sizes="(max-width: 479px) 88vw, (max-width: 767px) 55vw, 64vw" alt="" class="image-product">
                <div class="detail-content">
                <p title="${product.group_name == 'Gold Base' ? ' For each item sold within Gold Base product group, you can receive up to $1 cashback.' : ' For each item sold within Silver Base product group, you can receive up to $0.5 cashback.'}">
                    <span style="
                    font-weight: 600;
                    border-radius: 3px;
                    background: ${product.group_name == 'Gold Base' ? '#FFD600' : '#DBDFE1'
};
                    padding: 2px 5px;">${product.group_display_name}</span>
                </p>
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
                    <br><span style="${product.default_dimension !== '' ? '' : 'display:none'
}">Dimensions: ${product.default_dimension}</span>
                </p>
                </div></div>
                `
      })
      var text1 = `<div id="${item.name.toSlug()}" class="base-product-wrap"><div class="text-block-95">${item.name
      }</div>
            <div class="w-layout-grid grid-17 _2 base-product-grid">
                ${listItem}
            </div>
            <div class="base-product-line"></div>
            </div>`
      listContent += text1
    })
    container.innerHTML = ''
    container.insertAdjacentHTML('beforeend', listContent)
    $('.loading-section').fadeOut()
    $('.catalog').fadeIn()
    $('#select-area').on('click', () => {
      const open = $('#select_options').css('display')
      $('#select_options').css('display', `${open == 'none' ? 'block' : 'none'}`)
    })
    $('.s-option').on('click', function (e) {
      const filterValue = $(this).attr('value')
      $('.base-products').each(function (i, obj) {
        if (filterValue == 'All' || $(this).attr('group-name') == filterValue) {
          $(this).css('display', 'block')
        } else {
          $(this).css('display', 'none')
        }
      })
      $('#select-value').text(filterValue)
      $('#select_options').css('display', 'none')
    })
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
                  var indexUsProfile = productDescriptionData.shipping_profile.findIndex((o) => {
                    return o.shipping_zone_id === 1
                  })
                  if (indexUsProfile > -1) {
                    cols[cur] = { name: productDescriptionData.shipping_profile[indexUsProfile].shipping_fee }
                    cols[cur + 2] = { name: productDescriptionData.shipping_profile[indexUsProfile].additional_item_price }
                  } else {
                    cols[cur] = {name: 'N/A'}
                    cols[cur + 2] = {name: 'N/A'}
                  }
                }

                if (internationalIndex > -1) {
                  cols[cur + 1] = { name: `$${group.shipping_rules[internationalIndex].first_item_price}` }
                  cols[cur + 3] = { name: `$${group.shipping_rules[internationalIndex].additional_price}` }
                } else {
                  var indexGlobalProfile = productDescriptionData.shipping_profile.findIndex((o) => {
                    return o.shipping_zone_id === 2
                  })
                  if (indexGlobalProfile > -1) {
                    cols[cur + 1] = { name: productDescriptionData.shipping_profile[indexGlobalProfile].shipping_fee }
                    cols[cur + 3] = { name: productDescriptionData.shipping_profile[indexGlobalProfile].additional_item_price }
                  } else {
                    cols[cur + 1] = {name: 'N/A'}
                    cols[cur + 3] = {name: 'N/A'}
                  }
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
    let [hashNav, hashProduct] = window.location.hash.replace('#').split('/')
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