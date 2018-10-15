$(function () {
  setCoupon($('.coupon-title'));

  function setCoupon(dom, callback) {
      Route.getcoupon(function( data ) {
          var html = template('couponTitle', data);
          dom.html(html);
      });
  }
});