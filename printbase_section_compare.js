if (window.sectionCompareData) {
    var sectionCompareheading = window.sectionCompareData.sectionCompareheading;
    var sectionCompareSubHeading = window.sectionCompareData.sectionCompareSubHeading;
    var dataBrand = window.sectionCompareData.dataBrand;
    var dataCompare = window.sectionCompareData.dataCompare;
    var listBrand = "";
    var optionListBrand = "";
    Object.keys(dataBrand.logo).map(function(key) {
      listBrand += `<figure class="logo-brand logo-${key}"><img src="${dataBrand.logo[key]}" alt="logo-${key}" /></figure>`;
    });
    var tableCompareContent = ``;
    var listInfoByBrand = function (listBrand) {
      var data = "";
      Object.keys(listBrand).map(function (key) {
        if (key !== "title" && key != "subTitle") {
          data += `<div class="info-item info-${key}">${listBrand[key]}</div>`;
        }
      });
      return data;
    };
    Object.keys(dataCompare).map(function (item) {
      var titleItem = `<h4 class="title-item" data-target="${item}-content">${item}<span class="toogle-icon"></span></h4>`;
      var rowData = ``;
      Object.keys(dataCompare[item]).map(function (dataItem) {
        rowData += `<div class="content-row-item">
              <div class="description-item">
                  <h5>${dataCompare[item][dataItem].title}</h5>
                  <p style="${dataCompare[item][dataItem].subTitle ? "" : "display:none;"}">${dataCompare[item][dataItem].subTitle}</p>
              </div>
              <div class="info-item-wrapper">
                  ${listInfoByBrand(dataCompare[item][dataItem])}
              </div>
          </div>`;
      });
      tableCompareContent += titleItem + `<div class="row-item" data-target="${item}-content">${rowData}</div>`;
    });
    var contentSectionCompare = `<div id="section-compare" class="section-compare">
          <div class="w-container">
              <header class="section-compare-heading"><h4>${sectionCompareheading}</h4><p>${sectionCompareSubHeading}</p></header>
              <div class="section-compare-content">
                  <div class="section-compare-logo-branch">
                      <div class="spacing-block"></div>
                      <div class="logo-wrap">${listBrand}</div>
                  </div>
                  <div class="section-compare-table">
                      ${tableCompareContent}
                  </div>
              <div>
          </div>
    </div>`;
  
    //-----Mobile------//
    Object.keys(dataBrand.title).map(function (key) {
      if (key !== "printBase") optionListBrand += `<option value="${key}">${dataBrand.title[key]}</option>`;
    });
    var listInfoByBrandMobile = function (listBrand, choosedBrand) {
      var data = "";
      Object.keys(listBrand).map(function (key) {
        if (key !== "title" && key != "subTitle" && (key === "printBase" || key === choosedBrand)) {
          data += `<div class="info-item info-${key}">${listBrand[key]}</div>`;
        }
      });
      return data;
    };
    var getTableCompareContent = (selectedBrand = "teeChip") => {
      var tableCompareContentMobile = "";
      Object.keys(dataCompare).map(function (item) {
        var titleItem = `<h4 class="title-item" data-target="${item}-content">${item}<span class="toogle-icon"></span></h4>`;
        var rowData = ``;
        Object.keys(dataCompare[item]).map(function (dataItem) {
          rowData += `<div class="content-row-item">
        <div class="description-item">
          <h5>${dataCompare[item][dataItem].title}</h5>
          <p style="${dataCompare[item][dataItem].subTitle ? "" : "display:none;"}">${dataCompare[item][dataItem].subTitle}</p>
        </div>
        <div class="info-item-wrapper">
          ${listInfoByBrandMobile(dataCompare[item][dataItem], selectedBrand)}
        </div>
      </div>`;
        });
        tableCompareContentMobile += titleItem + `<div class="row-item" data-target="${item}-content">${rowData}</div>`;
      });
      return tableCompareContentMobile;
    };
    var contentSectionCompareMobile = `<div id="section-compare-mobile" class="section-compare-mobile">
      <div class="w-container">
        <header class="section-compare-heading"><h4>${sectionCompareheading} Mobile</h4><p>${sectionCompareSubHeading}</p></header>
        <div class="section-compare-content">
          <div class="section-compare-logo-branch">
            <div class="spacing-block"></div>
            <div class="logo-wrap">
            <figure class="logo-brand logo-printBase"><img src="https://uploads-ssl.webflow.com/5ed4c2a86103a3136bf1e97c/5fdc6235833b9c07d790003e_Printbase%401x.svg" alt="logo-printBase" /></figure>
              <select class="logo-brand select-brand">${optionListBrand}</select>
            </div>
          </div>
          <div class="section-compare-table">
            ${getTableCompareContent()}
          </div>
        <div>
      </div>
    </div>`;
    var targetShowSectionCompare = window.sectionCompareData.targetShowSectionCompare;
    if (document.querySelectorAll(targetShowSectionCompare).length > 0) {
      document.querySelectorAll(targetShowSectionCompare)[0].insertAdjacentHTML("afterbegin", contentSectionCompare);
      document.querySelectorAll(targetShowSectionCompare)[0].insertAdjacentHTML("afterbegin", contentSectionCompareMobile);
      // $('.row-item').hide();
      // $('.title-item').eq(0).addClass('isOpen');
      // $('.row-item').eq(0).show();
      $(".title-item").addClass("isOpen");
      $(".title-item").on("click", function () {
        var attrTarget = $(this).attr("data-target");
        $(this).toggleClass("isOpen");
        $(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
      });
    }
    $(document).ready(function () {
      $(".select-brand").change(function () {
        var selectedBrand = $(this).children("option:selected").val();
        $(".section-compare-mobile .w-container .section-compare-content .section-compare-table").remove();
        $( `<div class="section-compare-table">${getTableCompareContent(selectedBrand)}</div>` ).insertAfter( ".section-compare-mobile .w-container .section-compare-content .section-compare-logo-branch" );
      });
    });
  }
