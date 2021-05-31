var timeCheck = 0;
var hadParams = false;
var paramsLayer = {};
var intervalCheckParams = setInterval(function () {
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.forEach(function (layer) {
      if (layer["shop.id"]) {
        hadParams = true;
        paramsLayer = layer;
      }
    });
  }
  timeCheck++
  if (timeCheck === 15 || hadParams) {
    console.log("check done");
    clearInterval(intervalCheckParams);
    var list_test_user = [87205, 87211, 87212, 87213, 87214, 87215, 87217, 87219, 87220, 87221, 87222]
    var can_display = paramsLayer['can_display'];
    var mss = paramsLayer['mss'];
    var first_pay = paramsLayer['first_pay'];
    var first_order = paramsLayer['first-order'];
    var owner_id = paramsLayer['shop_owner.id']
    console.log(can_display, mss, first_pay, first_order, owner_id)

    if (can_display && (mss || first_pay || first_order) && list_test_user.indexOf(owner_id) !== -1) {
      if (localStorage.getItem('trust_pilot_display') == 'true') {
        closeTrustPilot(true)
      } else {
        var html_ele = "<div class='trust-pilot-border' onclick='closeTrustPilot()''><iframe src='https://www.trustpilot.com/evaluate/embed/livestreamtuongtac.com' title='TrustPilot Integration' frameborder='0' width='350px' height='400px' allowfullscreen style='position: fixed; bottom: 0; right: 0;'/></div>"
        var appElement = document.getElementById('app');
        appElement.insertAdjacentHTML('beforebegin', html_ele);
        localStorage.setItem("trust_pilot_display", true);
      }
    }
  }
}, 1000)

function closeTrustPilot(isReload) {
  if (!isReload) {
    console.log("not reload")
    document.getElementsByClassName("trust-pilot-border")[0].remove()
  }
  localStorage.removeItem("trust_pilot_display");
  var data = { shop_id: paramsLayer['shop.id'], display: false };
  fetch('https://gapi.dev.shopbase.net/admin/setting/disable-trust-pilot', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
