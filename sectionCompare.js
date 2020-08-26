if (window.sectionCompareData) {
	var sectionCompareheading = window.sectionCompareData.sectionCompareheading;
	var sectionCompareSubHeading = window.sectionCompareData.sectionCompareSubHeading;
	var dataBrand = window.sectionCompareData.dataBrand;
	var dataCompare = window.sectionCompareData.dataCompare;
	var listBrand = "";
	Object.keys(dataBrand.logo).map(function(key) {
		listBrand += `<figure class="logo-brand logo-${key}"><img src="${dataBrand.logo[key]}" alt="logo-${key}" /></figure>`;
	});


	var tableCompareContent = ``;
	var listInfoByBrand = function(listBrand) {
		var data = "";
		Object.keys(listBrand).map(function(key) {
			if (key !== "title" && key != "subTitle") {
				data += `<div class="info-item info-${key}">${listBrand[key]}</div>`
			}
		})
		return data;
	};
	Object.keys(dataCompare).map(function(item) {
		var titleItem = `<h4 class="title-item" data-target="${item}-content">${item}<span class="toogle-icon"></span></h4>`;
		var rowData = ``;
		Object.keys(dataCompare[item]).map(function(dataItem) {
			rowData += `<div class="content-row-item">
			<div class="description-item">
				<h5>${dataCompare[item][dataItem].title}</h5>
				<p style="${dataCompare[item][dataItem].subTitle ? '' : 'display:none;'}">${dataCompare[item][dataItem].subTitle}</p>
			</div>
			<div class="info-item-wrapper">
				${listInfoByBrand(dataCompare[item][dataItem])}
			</div>
		</div>`
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
	var targetShowSectionCompare = window.sectionCompareData.targetShowSectionCompare;
	if (document.querySelectorAll(targetShowSectionCompare).length > 0) {
		document.querySelectorAll(targetShowSectionCompare)[0].insertAdjacentHTML('afterbegin', contentSectionCompare);
		$('.row-item').hide();
		$('.title-item').eq(0).addClass('isOpen');
		$('.row-item').eq(0).show();
		$('.title-item').on('click', function() {
  			var attrTarget = $(this).attr('data-target');
  			$(this).toggleClass('isOpen');
  			$(`.row-item[data-target="${attrTarget}"]`).slideToggle(200);
		});
	};
}
