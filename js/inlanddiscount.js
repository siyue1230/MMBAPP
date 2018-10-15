var count = 0;
        function rotate() {
            var elem2 = document.querySelector('.loading');
            elem2.style.MozTransform = 'scale(0.5) rotate(' + count + 'deg)';
            elem2.style.WebkitTransform = 'scale(0.5) rotate(' + count + 'deg)';
            if (count == 360) {
                count = 0
            }
            count += 45;
            window.setTimeout(rotate, 100);
        }
        window.setTimeout(rotate, 100);

        $(function() {
          setProductList($('.inland-discount-list'))
      
          function setProductList(dom, callback) {
              Route.getinlanddiscount(function( data ){
                  var html = template("productList", data);
                  dom.html(html);
                  $('.loading').hide();
              });
          }
      });