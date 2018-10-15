$(function() {
  setProductList($('.money-product'), $.getUrlParam('productid'));

  function setProductList(dom, productid, callback) {
      Route.getmoneyctrlproduct( productid, function( data ) {
          var html = template("moneyProduct",data);
          dom.html(html);
      })
  }
});
