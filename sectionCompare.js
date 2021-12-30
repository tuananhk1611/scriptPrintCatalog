if (window.sectionCompareData) {
  var sectionCompareheading = window.sectionCompareData.sectionCompareheading;
  var sectionCompareSubHeading =
    window.sectionCompareData.sectionCompareSubHeading;
  var dataBrand = window.sectionCompareData.dataBrand;
  var dataCompare = window.sectionCompareData.dataCompare;
  var listBrand = "";
  var optionListBrand = "";
  Object.keys(dataBrand.logo).map(function (key) {
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
    var titleItem = `<label class="title-item" data-target="${item}-content">${item}<span class="toogle-icon"></span></label>`;
    var rowData = ``;
    Object.keys(dataCompare[item]).map(function (dataItem) {
      rowData += `<div class="content-row-item">
			<div class="description-item">
				<span>${dataCompare[item][dataItem].title}</span>
				<p style="${dataCompare[item][dataItem].subTitle ? "" : "display:none;"}">${
        dataCompare[item][dataItem].subTitle
      }</p>
			</div>
			<div class="info-item-wrapper">
				${listInfoByBrand(dataCompare[item][dataItem])}
			</div>
		</div>`;
    });
    tableCompareContent +=
      titleItem +
      `<div class="row-item" data-target="${item}-content">${rowData}</div>`;
  });
  var contentSectionCompare = `<div id="section-compare" class="section-compare">
		<div class="w-container">
			<header class="section-compare-heading"><h2>${sectionCompareheading}</h2><p>${sectionCompareSubHeading}</p></header>
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
    if (key !== "shopBase")
      optionListBrand += `<option value="${key}">${dataBrand.title[key]}</option>`;
  });
  var listInfoByBrandMobile = function (listBrand, choosedBrand) {
    var data = "";
    Object.keys(listBrand).map(function (key) {
      if (
        key !== "title" &&
        key != "subTitle" &&
        (key === "shopBase" || key === choosedBrand)
      ) {
        data += `<div class="info-item info-${key}">${listBrand[key]}</div>`;
      }
    });
    return data;
  };
  var getTableCompareContent = (selectedBrand = "shopify") => {
    var tableCompareContentMobile = "";
    Object.keys(dataCompare).map(function (item) {
      var titleItem = `<label class="title-item" data-target="${item}-content">${item}<span class="toogle-icon"></span></label>`;
      var rowData = ``;
      Object.keys(dataCompare[item]).map(function (dataItem) {
        rowData += `<div class="content-row-item">
      <div class="description-item">
        <span>${dataCompare[item][dataItem].title}</span>
        <p style="${
          dataCompare[item][dataItem].subTitle ? "" : "display:none;"
        }">${dataCompare[item][dataItem].subTitle}</p>
      </div>
      <div class="info-item-wrapper">
        ${listInfoByBrandMobile(dataCompare[item][dataItem], selectedBrand)}
      </div>
    </div>`;
      });
      tableCompareContentMobile +=
        titleItem +
        `<div class="row-item" data-target="${item}-content">${rowData}</div>`;
    });
    return tableCompareContentMobile;
  };
  var contentSectionCompareMobile = `<div id="section-compare-mobile" class="section-compare-mobile">
    <div class="w-container">
      <header class="section-compare-heading"><h2>${sectionCompareheading} Mobile</h2><p>${sectionCompareSubHeading}</p></header>
      <div class="section-compare-content">
        <div class="section-compare-logo-branch">
          <div class="spacing-block"></div>
          <div class="logo-wrap">
            <figure class="logo-brand logo-shopBase"><img src="https://uploads-ssl.webflow.com/5e941e9c459693aeff757d94/5f48d1d7567cda752fdadabf_logo%201%401x.svg" alt="logo-shopBase" /></figure>
            <select class="logo-brand select-brand">${optionListBrand}</select>
          </div>
        </div>
        <div class="section-compare-table">
          ${getTableCompareContent()}
        </div>
      <div>
    </div>
  </div>`;
  var targetShowSectionCompare =
    window.sectionCompareData.targetShowSectionCompare;
  if (document.querySelectorAll(targetShowSectionCompare).length > 0) {
    document
      .querySelectorAll(targetShowSectionCompare)[0]
      .insertAdjacentHTML("afterbegin", contentSectionCompare);
    document
      .querySelectorAll(targetShowSectionCompare)[0]
      .insertAdjacentHTML("afterbegin", contentSectionCompareMobile);
    // $('.row-item').hide();
    // $('.title-item').eq(0).addClass('isOpen');
    // $('.row-item').eq(0).show();
//     $(".title-item").addClass("isOpen");
//     $(".title-item").on("click", function () {
//       var attrTarget = $(this).attr("data-target");
//       $(this).toggleClass("isOpen");
//       $(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
//     });
  }
  $(document).ready(function () {
    $(".title-item").addClass("isOpen");
    $(".section-compare .title-item").on("click", function () {
        var attrTarget = $(this).attr("data-target");
        $(this).toggleClass("isOpen");
        $(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
      });
    $(".section-compare-mobile .title-item").on("click", function () {
      var attrTarget = $(this).attr("data-target");
      $(this).toggleClass("isOpen");
      $(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
    });
    $(".select-brand").change(function () {
      var selectedBrand = $(this).children("option:selected").val();
      $(
        ".section-compare-mobile .w-container .section-compare-content .section-compare-table"
      ).remove();
      $(
        `<div class="section-compare-table">${getTableCompareContent(
          selectedBrand
        )}</div>`
      ).insertAfter(
        ".section-compare-mobile .w-container .section-compare-content .section-compare-logo-branch"
      );
      $(".section-compare-mobile .title-item").addClass("isOpen");
      $(".section-compare-mobile .title-item").on("click", function () {
        var attrTarget = $(this).attr("data-target");
        $(this).toggleClass("isOpen");
        $(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
      });
    });
  });
}
