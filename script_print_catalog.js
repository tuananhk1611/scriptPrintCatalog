
        var request = new XMLHttpRequest()
        // Open a new connection, using the GET request on the URL endpoint
        //request.open('GET', 'https://gapi.dev.shopbase.net/v1/pod/catalogs', true)
        request.open('GET', 'https://gapi.stag.shopbase.net/v1/pod/catalogs', true);
        request.onload = function() {
            // Begin accessing JSON0 data here
            var data = JSON.parse(this.response)
        
            if (request.status >= 200 && request.status < 400) {
                window.injectDataCatalog = data
                var injectData = window.injectDataCatalog.result.list_category
                // Render navigator list
                var navContent = ''
                injectData.map(function(item, index) {
                    navContent += `<a id="${item.name.toSlug()}-${index}" style="${!index ? 'border-top: 1px solid #ebebeb; border-top-left-radius: 5px;border-top-right-radius: 5px' : ''}" href="#${item.name.toSlug()}" class="link-block-8 _3 w-inline-block">${
                        item.name
                    }</a>`
                })
                var listContent = '';
                var allBadge = [];
                var listUniqueBadge = [];
                var badgeOptions = '';
                var badgeFilter = {};
                var listId = [];
                var bestSelling = {};
                if(data.result.list_badge.list !== null) {
                    data.result.list_badge.list.forEach(function(item,index) {
                        var badgeId = item.badge_id
                       
                        if(item.is_root != true) {
                            if(listId.indexOf(badgeId) < 0) {
                                listId.push(badgeId);
                                listUniqueBadge.push(item);
                                listUniqueBadge.sort((a, b) => a.name.localeCompare(b.name));
                            } 
                        }
                        
                        var key = item.base_product_id
                        if(badgeFilter['prod-'+key] === undefined) {
                            badgeFilter['prod-'+key] = [badgeId];
                        }else {
                            badgeFilter['prod-'+key].push(badgeId);
                        }
                        if(allBadge['prod-'+key] === undefined) {
                            allBadge['prod-'+key] = [item];
                        }else {
                            allBadge['prod-'+key].push(item);
                        }
                        if(item.is_root == true) {
                            bestSelling = item;
                        }
                        allBadge['prod-'+key].sort((a, b) => a.name.localeCompare(b.name))
                    })
                }
                listUniqueBadge.unshift(bestSelling);
                if(listUniqueBadge.length !== 0) {
                    var i;
                    for(i = 0;i < listUniqueBadge.length;i++) {
                        console.log(listUniqueBadge[i]);
                        badgeOptions += `<a class="link-block-8 _3 w-inline-block s-option"  data-value-name="${listUniqueBadge[i].display_name}" value="${listUniqueBadge[i].badge_id}" style="border-left: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235);">${listUniqueBadge[i].display_name}</a>`
                    }
                }
                var filterContent = ''
                filterContent += `<div id="select-area" style="width: 100%; margin-top: 50px; display: flex;align-items: center; justify-content: space-between; background-color: #e8e8e8; padding: 10px 20px; border-radius: 10px">
                <div style="display: grid">
                <label style="font-weight: 400; font-size: 16px; color: #5E6A6E">Filter</label>
                <span id="select-value" style="font-weight: 600">All</span>
                </div>
                <svg style="width: 15px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                </div>
                <div class="navi _2 catalog-nav" id="select_options" style="overflow: visible !important; display:none; margin-top:10px;  height: 404px">
                <a class="link-block-8 _3 w-inline-block s-option" data-select="1" data-value-name="All" value="0" style="border-left: 1px solid rgb(235, 235, 235); border-top: 1px solid rgb(235, 235, 235); border-right: 1px solid rgb(235, 235, 235); border-top-left-radius: 5px; border-top-right-radius: 5px">All</a>
                `+badgeOptions+`
                </div></div>`
                var nav = document.querySelectorAll('.catalog-nav')[0]
                nav.innerHTML = ''
                document
                    .querySelectorAll('.catalog-nav')[0]
                    .insertAdjacentHTML('beforeend', navContent)

                document
                    .querySelectorAll('.catalog-nav')[0]
                    .insertAdjacentHTML('beforeend', filterContent)
                $('.catalog-nav').css('border', 'none')
                $('.catalog-nav').css('overflow', 'visible')
                $('.catalog-nav').css('height', '800px')
                $('.catalog-nav').css('height', '800px')
                $('.w-inline-block').css('border-left', '1px solid #ebebeb')
                $('.w-inline-block').css('border-right', '1px solid #ebebeb')
                $('.w-inline-block-last').css({ 'border-bottom-left-radius': '10px' })
                $('.w-inline-block-last').css('border-bottom-right-radius', '10px')
                //       $('.catalog-nav a').on('click', function() {
                //          $('.catalog-nav a').removeClass('w--current');
                //    			 $(this).toggleClass('w--current');
                //       });
                // Render content categories
                var container = document.querySelectorAll('.contetnt-printbase')[0];
                
                injectData.map(function(item, indexCat) {
                    listItem = ''
                    item.list_base_product.map(function(product, indexProduct) {
                        var badge = ''
                        var customBadge = ''
                        var badgeId = 0
                        var tier = ''
                        var tierToolTip = ''
                        var customBadgeWrapper = ''
                        if(product.group_name == 'Gold Base') {
                            tierToolTip += `<div class="tierToolTip" style="background-color:#fff;position:absolute;top:13%;width:80%;left:30px;display:none;">
                            <p style="color:rgb(110, 122, 129);font-size:14px;line-height:24px;padding:16px;">For each item sold within Gold Base product group, you can receive up to $1 cashback.</p></div>`
                            tier += `<div class="tier-icon" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);position:absolute;left:15px;top:42%;width:36px;height:36px;border-radius:25px;background-color:#fff;">
                            <img style="display:block;margin:auto;padding-top:10px;" src="https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/6017ac42be8e9e3a7743fc56_Gold.svg"></div>`
                        }
                        if(product.group_name == 'Silver Base') {
                            tierToolTip += `<div class="tierToolTip" style="background-color:#fff;position:absolute;top:13%;width:80%;left:30px;display:none;">
                            <p style="color:rgb(110, 122, 129);font-size:14px;line-height:24px;padding:16px;">For each item sold within Silver Base product group, you can receive up to $0.5 cashback.</p></div>`
                            tier += `<div class="tier-icon" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);position:absolute;left:15px;top:42%;width:36px;height:36px;border-radius:25px;background-color:#fff;">
                            <img style="display:block;margin:auto;padding-top:10px;" src="https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/6017ac32c307b439444cb58c_Silver%401x.svg"></div>`
                        }

                        if(allBadge['prod-'+product.id]) {
                            allBadge['prod-'+product.id].forEach( function(item, index) {
                                badgeId = item.badge_id
                                if(item.is_root  !== false) {
                                    badge = "<img src='https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/6013b9c4283fef28a6eab6d5_Best%20selling%401x.svg' style='display:inline-block;width:48px;height:48px;position:absolute;top:7px;left:8px;' />"
                                }else {
                                    customBadge += `<div  style="margin-right: 8px;">
                                        <p style="font-weight:bold;font-size:10px;padding: 4px 6px 4px 6px;border-radius:4px;background-color:`+item.background_color+`;color:`+item.text_color+`;margin-bottom:0px;">`+item.display_name+`</p>
                                    </div>`
                                    customBadgeWrapper = `<div style="display:flex;flex-direction:row;padding: 11px 16px 0 16px;border-top: 1px solid rgb(151, 151, 151, .2) !important;">${customBadge}</div>`
                                    
                                }
                            })
                        }
                        listItem += `<div class="base-products" style="position:relative" data-value-id="${badgeFilter['prod-'+product.id]}" data-cat="${indexCat}" data-index="${indexProduct}" badge-id="${badgeId}" group-name="${
                            product.group_name
                        }" id="${product.title.toSlug()}">
                    <img src="${
                            product.image_catalog
                        }" sizes="(max-width: 479px) 88vw, (max-width: 767px) 55vw, 64vw" alt="" class="image-product">`+badge+tier+tierToolTip+
                        
                    
                    `<div class="detail-content" style="margin-bottom:12px;min-height:171px;">
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
                        <br><span style="${
                            product.default_dimension !== '' ? '' : 'display:none'
                        }">Dimensions: ${product.default_dimension}</span>
                    </p>
                    </div>`
                        +customBadgeWrapper+`
                    </div>
                    `
                    })
                    var cashBackFilter = ''
                    if(indexCat === 0 ) {
                        cashBackFilter = `<div id="cashback_filter">
                        <div id="cashback-select-area" style="">
                        <div style="width: 85%;">
                        <label style="margin-bottom:0;font-weight: 500; font-size: 16px; color: rgba(36, 39, 46, 0.5)">Cashback tier: <span id="select-cashback-value" style="color:rgb(36, 39, 46)">All</span></label>
                        </div>
                        <svg style="width: 15px;" xmlns="http://www.w3.org/2000/svg"  data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                        </div>
                        <div id="cashback_select_options">
                        <a class="s-cashback-option" data-select="1" value="All" >All</a>
                        <a class="s-cashback-option" value="Gold Base"><img style="margin-right:10px;" src="https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/6017ac42be8e9e3a7743fc56_Gold.svg">Gold Base</a>
                        <a class="s-cashback-option" value="Silver Base"><img style="margin-right:10px;" src="https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/6017ac32c307b439444cb58c_Silver%401x.svg">Silver Base</a>
                        </div></div></div>`
                    }
                    var text1 = `<div id="${item.name.toSlug()}" class="base-product-wrap">
                    <div class="text-block-95">${
                        item.name
                    } ${cashBackFilter}</div>
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
                $('#cashback-select-area').on('click', function() {
                    const open = $('#cashback_select_options').css('display');
                    $('#cashback_select_options').css("display", `${open =='none' ? 'block' : 'none'}`)
                })
                $('#select-area').on('click', function() {
                    const open = $('#select_options').css('display');
                    $('#select_options').css("display", `${open =='none' ? 'block' : 'none'}`)
                })
                // Filter
                $('.s-cashback-option').on('click', function(e) {
                    const filterValue =  $(this).attr('value');
                    $('.s-cashback-option').removeAttr('data-select');
                    $(this).attr('data-select', 1);
                    var badgeSelected =  $('.s-option[data-select="1"]').attr('value');
                    $('.base-products').each(function(i, obj) {
                        badgeIds = $(this).attr('data-value-id').split(',')
                        if(badgeSelected == '0') {
                            if (filterValue == 'All' || $(this).attr('group-name') == filterValue ) {
                                $(this).css('display', 'block')
                            } else {
                                $(this).css('display', 'none')
                            }
                        }else {
                            if ((filterValue == 'All' || $(this).attr('group-name') == filterValue) && badgeIds.includes(badgeSelected) ) {
                                $(this).css('display', 'block')
                            } else {
                                $(this).css('display', 'none')
                            }
                        }
                        
                    })
                    $('#select-cashback-value').text(filterValue)
                    $('#cashback_select_options').css('display', 'none')
                })
                $(".tier-icon").hover(function() {
                    $(this).parent().find('.tierToolTip').show();
                }, function() {
                    $(this).parent().find('.tierToolTip').hide();
                })
                // Filter
                $('.s-option').on('click', function(e) {
                    const filterValue =  $(this).attr('value');
                    const filterValueName = $(this).attr('data-value-name');
                    
                    var cashBackSelected =  $('.s-cashback-option[data-select="1"]').attr('value');
                    $('.s-option').removeAttr('data-select');
                    $(this).attr('data-select', 1);
                    $('.base-products').each(function(i, obj) {
                        badgeIds = $(this).attr('data-value-id').split(',')
                        const groupName = $(this).attr('group-name')
                        if(cashBackSelected == 'All') {
                            if ((filterValue == '0' || badgeIds.includes(filterValue))  ) {
                                $(this).css('display', 'block')
                            } else {
                                $(this).css('display', 'none')
                            }
                        }else {
                            if ((filterValue == '0' || badgeIds.includes(filterValue)) && cashBackSelected == groupName ) {
                                $(this).css('display', 'block')
                            } else {
                                $(this).css('display', 'none')
                            }
                        }
                        
                    })
                    $('#select-value').text(filterValueName)
                    $('#select_options').css('display', 'none')
                })

                // Calcu height navi
                var navHeight = 410
                $('.catalog .navi .link-block-8').each(function(index, el) {
                    navHeight += $(el).outerHeight()
                })
                $('.catalog .navi').height(navHeight)
                $(window)
                    .scroll(function() {
                        var windscroll = $(window).scrollTop()
                        if (windscroll >= 100) {
                            $('.contetnt-printbase .base-product-wrap').each(function(
                                index,
                                value
                            ) {
                                var id = $(value).attr('id')
                                if ($(value).position().top <= windscroll + 10) {
                                    if (
                                        $(`.catalog-nav a[href="#${id}"]`) &&
                                        $(`.catalog-nav a[href="#${id}"]`).length > 0
                                    ) {
                                        $('.catalog-nav a').removeClass('w--current')
                                        $(`.catalog-nav a[href="#${id}"]`).addClass('w--current')
                                    }
                                }
                            })
                        }
                    })
                    .scroll()
                $('.base-products').on('click', function(e) {
                    var productId = $(e.currentTarget).attr('id')
                    let [_, hashNav] = window.location.hash.split('#')
                    if (hashNav) {
                        hashNav = decodeURIComponent(hashNav).split('#')[0] || hashNav
                        window.location.href = `#${hashNav}#${productId}`
                    } else {
                        let nav = $(e.currentTarget)
                            .parents('.base-product-wrap')
                            .first()
                            .attr('id')
                        window.location.href = `#${nav}#${productId}`
                    }
                    var shippingZonesData = window.injectDataCatalog.result.shipping_zones
                    var dataCat = $(e.currentTarget).attr('data-cat')
                    var dataIndex = $(e.currentTarget).attr('data-index')
                    var productDescriptionData =
                        injectData[dataCat].list_base_product[dataIndex]
                    var dataArwortFront = productDescriptionData.artworks.filter(
                        (item) =>
                            item.part_name.toUpperCase() === 'FRONT' && item.template_url !== ''
                    )
                    var dataArwortBack = productDescriptionData.artworks.filter(
                        (item) =>
                            item.part_name.toUpperCase() === 'BACK' && item.template_url !== ''
                    )
                    var dataArwort = productDescriptionData.artworks.filter(
                        (item) => item.template_url !== ''
                    )
                    var urlDownloadFrontArtWord =
                        dataArwortFront[0] && dataArwortFront[0].template_url !== ''
                            ? dataArwortFront[0].template_url
                            : '#'
                    var urlDownloadBackArtWord =
                        dataArwortBack[0] && dataArwortBack[0].template_url !== ''
                            ? dataArwortBack[0].template_url
                            : '#'
                    var urlDownloadArtWord =
                        dataArwort[0] && dataArwort[0].template_url !== ''
                            ? dataArwort[0].template_url
                            : '#'
                    var imgDescription = `<img src="${injectData[dataCat].list_base_product[dataIndex].image_catalog}" alt="img-product-description"/>`
                    document.querySelectorAll(
                        '.product-description-popup .detail-popup .image'
                    )[0].innerHTML = ''
                    document
                        .querySelectorAll('.product-description-popup .detail-popup .image')[0]
                        .insertAdjacentHTML('beforeend', imgDescription)
                    var hasWhiteColor =
                        productDescriptionData.size_data.filter(
                            (item) => item.white_color_price !== 0
                        ).length > 0
                    var hasOtherColor =
                        productDescriptionData.size_data.filter(
                            (item) => item.other_color_price !== 0
                        ).length > 0
                    var productDescription = `
        <h1 title="${productDescriptionData.group_name == 'Gold Base' ? ' For each item sold within Gold Base product group, you can receive up to $1 cashback.' : ' For each item sold within Silver Base product group, you can receive up to $0.5 cashback.' }" class="h2">
            ${productDescriptionData.title}
            <span style="${
                        productDescriptionData.group_display_name &&
                        productDescriptionData.group_display_name !== ''
                            ? ''
                            : 'display: none;'
                    }" class="product-group-label ${
                        productDescriptionData.group_display_name === 'Gold Base'
                            ? 'gold'
                            : 'silver'
                    }">${productDescriptionData.group_display_name}</span>
        </h1>
        <p class="description">
            ${productDescriptionData.product_description}
        </p>
        <p><strong>Shipping lines:</strong> USPS, Fedex, YunExpress.</p>
        <p><strong>Processing days:</strong> ${
                        productDescriptionData.min_processing_day
                    } - ${productDescriptionData.max_processing_day} bussiness days</p>
        <p>${productDescriptionData.short_description}</p>`
        
        
        var artWork = `
        <a style="${
                        dataArwort.length === 1 && dataArwort[0] ? '' : 'display:none'
                    }" href="${urlDownloadArtWord}" class="download-template w-inline-block">
            Download Artwork Template
        </a>
        <a style="${
                        dataArwort.length > 1 &&
                        dataArwortFront[0] &&
                        dataArwortFront[0].template_url !== ''
                            ? ''
                            : 'display:none'
                    }" href="${urlDownloadFrontArtWord}" class="download-template w-inline-block">
        Download Artwork Templates Front
            </a>
        <a style="${
                        dataArwort.length > 1 &&
                        dataArwortBack[0] &&
                        dataArwortBack[0].template_url !== ''
                            ? ''
                            : 'display:none'
                    }" href="${urlDownloadBackArtWord}" class="download-template w-inline-block">
        Download Artwork Templates Back
            </a>
        `
                    
                    // Table Size data
                    var sizeData = productDescriptionData.size_data
                    var contentTable = ''
                    sizeData.map(function(data, index) {
                        var row = `<tr>
        <td>${data.size}</td>
        <td style="${hasWhiteColor ? '' : 'display: none;'}">$${
                            data.white_color_price
                        }</td>
        <td style="${hasOtherColor ? '' : 'display: none;'}">$${
                            data.other_color_price
                        }</td>
            </tr>`
                        contentTable += row
                    })
                    var tableSizeData = `<div class="size-data-table size-char-table"><table>
        <thead>
        <tr>
        <td>Size</td>
        <td style="${hasWhiteColor ? '' : 'display: none;'}">${
                        hasWhiteColor && hasOtherColor ? 'White color' : 'Price'
                    }</td>
        <td style="${hasOtherColor ? '' : 'display: none;'}">${
                        hasWhiteColor && hasOtherColor
                            ? `${
                                injectData[dataCat].name.toUpperCase() === 'APPAREL'
                                    ? 'Other color <sup>*</sup>'
                                    : 'Other color'
                            }`
                            : 'Price'
                    }</td>
            </tr>
            </thead>
        <tbody>
        <tr class="first-tr">
            <td><span>0</span></td>
            <td style="${hasWhiteColor ? '' : 'display: none;'}"><span>0</span></td>
            <td style="${hasOtherColor ? '' : 'display: none;'}"><span>0</span></td>
        </tr>
        ${contentTable}
            </tbody>
            </table></div>`
                    document.querySelectorAll('.table-sizechart')[0].innerHTML = ''
                    document
                        .querySelectorAll('.table-sizechart')[0]
                        .insertAdjacentHTML('beforeend', tableSizeData)

                    var shippingProfileData = productDescriptionData.shipping_profile
                    var shippingData = {}
                    for (i = 0; i < shippingProfileData.length; i++) {
                        shippingZonesData.map(function(item) {
                            if (item.id === shippingProfileData[i].shipping_zone_id) {
                                shippingProfileData[i].zone_name = item.zone
                                shippingData[item.zone] = shippingProfileData[i]
                            }
                        })
                    }
                    var headerShippingTable = ''
                    shippingProfileData.map(function(data) {
                        var row = `<td>${data.zone_name}</td>`
                        headerShippingTable += row
                    })
                    // Table Shipping Time

                    var contentShippingTimeTable = ''
                    shippingProfileData.map(function(data) {
                        var row = `
        <td>${shippingData[data.zone_name].shipping_time} <br> business days</td>
            `
                        contentShippingTimeTable += row
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
            </table></div>`
                    document
                        .querySelectorAll('.table-sizechart')[0]
                        .insertAdjacentHTML('beforeend', tableShippingTime)
                    // Table Shipping Cost
                    var contentShippingCostTable = ''
                    //           shippingProfileData.map(function(data) {
                    //             var row = `
                    //   <td>$${shippingData[data.zone_name].shipping_fee}</td>
                    //     `;
                    //             contentShippingCostTable += row;
                    //           })
                    sizeData.map(function(data, index) {
                        var row = `<tr>
                <td style="${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0]
                                .first_item_price
                                ? ''
                                : 'display: none;'
                        }">$${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0]
                                .first_item_price
                                ? data.shipping_rules.filter(
                                (rule) => rule.shipping_zone_id === 1
                                )[0].first_item_price
                                : ''
                        }</td>
                <td style="${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0]
                                .first_item_price
                                ? ''
                                : 'display: none;'
                        }">$${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0]
                                .first_item_price
                                ? data.shipping_rules.filter(
                                (rule) => rule.shipping_zone_id === 2
                                )[0].first_item_price
                                : ''
                        }</td>
        </tr> `
                        contentShippingCostTable += row
                    })
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
            </table></div>`
                    document
                        .querySelectorAll('.table-sizechart')[0]
                        .insertAdjacentHTML('beforeend', tableShippingCost)
                    // Table Additional items
                    var contentAdditionalTable = ''
                    sizeData.map(function(data, index) {
                        var row = `<tr>
                <td style="${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0]
                                .additional_price
                                ? ''
                                : 'display: none;'
                        }">$${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 1)[0]
                                .additional_price
                                ? data.shipping_rules.filter(
                                (rule) => rule.shipping_zone_id === 1
                                )[0].additional_price
                                : ''
                        }</td>
                <td style="${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0]
                                .additional_price
                                ? ''
                                : 'display: none;'
                        }">$${
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)
                                .length > 0 &&
                            data.shipping_rules.filter((rule) => rule.shipping_zone_id === 2)[0]
                                .additional_price
                                ? data.shipping_rules.filter(
                                (rule) => rule.shipping_zone_id === 2
                                )[0].additional_price
                                : ''
                        }</td>
            </tr>`
                        contentAdditionalTable += row
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
            </table></div>`

                    document
                        .querySelectorAll('.table-sizechart')[0]
                        .insertAdjacentHTML('beforeend', tableAdditional)
                    var productDescriptionPopup = document.querySelectorAll(
                        '.product-description-popup .detail-popup .description-popup'
                    )[0]
                    productDescriptionPopup.innerHTML = ''
                    productDescriptionPopup.insertAdjacentHTML(
                        'beforeend',
                        productDescription,
                    )
                    if(productDescriptionData.selling_guide !== null) {
                        var sellingGuide = `<div id="sellingGuide" style="display:flex;flex-direction:row;">
                                <div style="width:20%;"><p><strong>Selling Guide: </strong></p></div>
                                <div class="selling-guide-content" style="display:flex;flex-direction:row;flex-wrap:wrap;align-content: space-around;width:80%;"></div>
                            </div>`;
                        productDescriptionPopup.insertAdjacentHTML(
                            'beforeend',
                            sellingGuide
                        )
                    }
                    
                    if(productDescriptionData.selling_guide !== null) {
                        var flagBlock = $('#sellingGuide').find('.selling-guide-content');
                        $.each(productDescriptionData.selling_guide, function(i, obj) {
                            switch(obj.language) {
                                case 'vi':
                                    flagBlock.append(`<a style='margin: 0 0 5px 5px;' target="_blank" href="${obj.link}">
                                        <img style="width:34px" src='https://www.shopbase.com/blog/wp-content/themes/boostFlow-blog/assets/img/Vietnam.png' />
                                    </a>`)
                                    break;
                                case 'zh':
                                    flagBlock.append(`<a style='margin: 0 0 5px 5px;' target="_blank" href="${obj.link}">
                                        <img style="width:34px" src='https://www.shopbase.com/blog/wp-content/themes/boostFlow-blog/assets/img/cn-flag.png' />
                                    </a>`)
                                    break;
                                case 'en':
                                    flagBlock.append(`<a style='margin: 0 0 5px 5px;' target="_blank" href="${obj.link}">
                                        <img style="width:34px" src='https://www.shopbase.com/blog/wp-content/themes/boostFlow-blog/assets/img/United-States.png' />
                                    </a>`)
                                    break;
                                break;
                                default:
                                    flagBlock.append("<a style='margin: 0 0 5px 5px;background-color:#bcc2be;color:white;width:34px;height:24px;text-decoration:none;text-align:center;' target='_blank' href='"+obj.link+"'>"+obj.language+"</a>")
                            }
                        })
                    }
                    productDescriptionPopup.insertAdjacentHTML(
                        'beforeend',
                        artWork
                    )
                    $('.product-description-popup').fadeIn(100)
                })

                // Jump to hastag
                let [_, hashNav, hashProduct] = window.location.hash.split('#')

                if (hashNav && hashProduct) {
                    const scrollTopOriginal = $(`#${hashProduct}`).offset()
                        ? $(`#${hashProduct}`).offset().top - 90
                        : 0
                    const loop = setInterval(() => {
                        let scrollTop = $(`#${hashProduct}`).offset()
                            ? $(`#${hashProduct}`).offset().top - 90
                            : 0
                        $('html, body').animate({ scrollTop }, 500)
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
            let [_, hashNav, hashProduct] = window.location.hash.split('#')
            if (hashNav && hashProduct) {
                window.history.pushState('', '/', window.location.pathname)
            }
        })
        String.prototype.toSlug = function() {
            return this.toString()
                .toLowerCase()
                .replace(/\s/g, '-')
                .replace(/[^a-zA-Z0-9-]/g, '')
        }

        // Send request
        request.send()
