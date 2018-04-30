var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);    
});

$(document).ready(function(){
	var product_yanthai = Get_yanthai.get()
	
	productList.init("productList",product_yanthai);	

});

var productList = (function(){
	var data = {
		modal:{
			close:`<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>`,
			body:`
				<div class="row">
					<div class="map-product-content">
						<ul class="nav nav-pills ct-blue map-product-main"></ul>
					</div>
					<hr>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-2 col-md-2">
						<div class="list-img">
							<div class="list-img-0"></div>
							<div class="list-img-1"></div>
							<div class="list-img-2"></div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-5 col-md-5">
						<div class="active-img">
							<img src="https://displate.com/image-visualisation/standard/16/2018-04-24/e5f9a44ecece7ff774f15ea8983b5092_a0296512a844355d01e11c6280bbb0d3.jpg?w=640&amp;h=640&amp;v=3" >
						</div>
					</div>
					<div class="col-xs-12 col-sm-5 col-md-5">
						<div class="detail-content">
							<h3>Test</h3>
							<div>
								<span>Select Size: </span><span class="show-size"></span>
								<ul class="nav nav-pills ct-blue">
									<li class="active product-size" typ="m"><a href="#">M</a></li>
								    <li class='product-size' typ='l'><a href="#">L</a></li>
								    <li class='product-size' typ='xl'><a href="#">XL</a></li>
								</ul>
								
							</div>
							<p class="detail-desc">
								products detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detailproducts detail
							</p>
							<div class="row">
								<div class="col-md-2"><b>Quantity:</b></div>
								<div class="col-md-2">
									<input type="number" value="1" placeholder="Quantity" class="form-control" />
								</div>
								<div class="col-md-3">
									<button class="btn btn-primary btn-fill"><i class="far fa-credit-card"></i> Buy Now</button>
								</div>
								<div class="col-md-3">
									<button class="btn btn-primary btn-fill"><i class="fas fa-cart-plus"></i> Add to cart</button>
								</div>
								<div class=" col-md-2"></div>
							</div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-4">
									<p>
										Delivery to Thailand
										Estimated 4-5 days
									</p>
								</div>
								<div class="col-md-4"></div>

								
							</div>
						</div>
					</div>
				</div>
			`,
			footer:`
				
			`,
			productActive:0,
			sizeActive:'m'
		},
		component:`
			<div class="col-sm-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top learnMore" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 370px; width: 100%; display: block;" src="https://displate.com/image-visualisation/standard/16/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg?w=640&h=640&v=3" data-holder-rendered="true">
                <div class="card-body">
                  <a class="learnMore"><h4>AAA</h4></a>
                  <p class="card-text">
                  	This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  	This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  	This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="text-center">
                  	<button class="btn btn-primary btn-fill addToCart"><i class="fas fa-cart-plus"></i> Add to cart</button>
                  	<button class="btn btn-primary learnMore">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
		`,
		element:'',
		products:{}
	}
	var init = function(element,products){
		data.element = element;
		data.products = products;
		careateProductList();
		events()
	}
	var careateProductList = function(){
		$.each(data.products, function(index,product){
			var newComponent = $(data.component);
			$('img',newComponent).attr('src',product.imgs.ex);
			$('h4',newComponent).text(product.name);
			$('.addToCart',newComponent).attr('typ',index);
			$('.learnMore',newComponent).attr('typ',index);
			$('#'+data.element).append(newComponent);
		});

	}

	var events = function(){
		$('.learnMore').click(learnMore);
	}

	var learnMore = function(){
		let typ = $(this).attr('typ');
		let item = data.products[typ]
		console.log( item )
		let modal = BootstrapModal();
	        modal.header.append( '<i class="fas fa-shopping-bag"></i> Shopping Room', data.modal.close );
	        modal.body.append( createShowProduct(typ) );
	        modal.footer.append( data.modal.footer );
	        modal.shown(function(){
	        	$('body').css({'overflow':'hidden'});
	        });
	        modal.hidden(function(){
	        	$('body').css({'overflow':'auto'});
	        });
	        setTimeout(function(){
						updateProductSelectedUI({product:typ,size:data.modal.sizeActive});
	        },200);
	        modal.open();
	}

	var createShowProduct = function(typ){

		let bodyElement = $(data.modal.body);
		let bodyToShow = '';

		//create body product
		createBodyProduct(bodyElement,typ);

		bodyToShow = bodyElement;
		return bodyToShow;
	}

	var createBodyProduct = function( bodyElement,typ ){
		$.each(data.products,function(index,product){
			var newImg = $('<a>').attr({'typ':index}).append($('<img>').addClass('map-product-img').attr({'src':product.imgs.ex}));
			var newLi  = $('<li>').append(newImg);
			$(bodyElement).find('div.map-product-content > ul').append(newLi);
		});

		$('.map-product-main > li > a',bodyElement).click(function(){
			updateProductSelectedUI({product:$(this).attr('typ'),size:data.modal.sizeActive});
		});
		$('.list-img > div',bodyElement).click(function(){
			console.log($(this).attr('url'))
			$('.active-img > img').attr('src',$(this).attr('url'));
		});
		$('.product-size',bodyElement).click(function(){
			$('.product-size').removeClass('active');
			$(this).addClass('active');
			updateProductSelectedUI({product:$('.map-product-active').attr('typ'),size:$(this).attr('typ')});
			//show size
			showSize($('.map-product-active').attr('typ'),$(this).attr('typ'),bodyElement);
		});
		showSize( typ, data.modal.sizeActive, bodyElement );
	}

	var showSize = function(product,size,bodyElement){
		let textSize = [
			'<b>',
			data.products[product].details.itemsize[size].h,
			' '+data.products[product].details.typesize+' ',
			' / ',
			data.products[product].details.itemsize[size].w+' ',
			data.products[product].details.typesize+' ',
			'</b>'
		].join('\n');
		$('.show-size',bodyElement).html( textSize );
	}

	var updateProductSelectedData = function( params ){
		data.modal.productActive = params.product;
		data.modal.sizeActive = params.size;
	}

	var updateProductSelectedUI = function(params){
		console.log("[Before] product: "+params.product+"size: "+params.size)
		updateProductSelectedData(params)
		// console.log("[After] product: "+params.product+"size: "+params.size)

		//update map product selected at the top
		$('.map-product-active').removeClass('map-product-active');
		$('.map-product-main > li > a[typ='+params.product+']').addClass('map-product-active');
		//update more product actvie
		$('.list-img-0').css({
			'background-image':'url("'+data.products[params.product].details.itemsize[params.size].imgs[0]+'")',
			'width':'100px',
			'height':'100px'
		}).attr('url',data.products[params.product].details.itemsize[params.size].imgs[0]);
		$('.list-img-1').css({
			'background-image':'url("'+data.products[params.product].details.itemsize[params.size].imgs[1]+'")',
			'width':'100px',
			'height':'100px'
		}).attr('url',data.products[params.product].details.itemsize[params.size].imgs[1]);
		$('.list-img-2').css({
			'background-image':'url("'+data.products[params.product].details.itemsize[params.size].imgs[2]+'")',
			'width':'100px',
			'height':'100px'
		}).attr('url',data.products[params.product].details.itemsize[params.size].imgs[2]);
		//update product active
		$('.active-img > img').attr({
			'src':data.products[params.product].details.itemsize[params.size].imgs[2],
			'data-zoom-image':data.products[params.product].details.itemsize[params.size].imgs[2]
		});
		//update product detail wording

	}

	/*########## ########## ########## ##########   ##########*/
	/*########## [START]Lazy To Use Bootstrap Modal ##########*/
	/*########## ########## ########## ##########   ##########*/

	var BootstrapModal = function() {

	  var Modal = {

	    main: $("<div>").attr({class:"modal fade",role:"dialog"}),
	    dialog: $("<div>").attr("class","modal-dialog"),
	    content: $("<div>").attr("class","modal-content"),
	    header: $("<div>").attr("class","modal-header"),
	    body: $("<div>").attr("class","modal-body"),
	    footer: $("<div>").attr("class","modal-footer"),
	    open:function(){
	      Modal.main.append(Modal.dialog,Modal.content)
	      Modal.content.append(Modal.header,Modal.body,Modal.footer)
	      Modal.dialog.append(Modal.content)
	      $(Modal.main).modal('show')
	      
	      $(Modal.main).modal('show').promise().done(function(){
	        Modal.hidden()
	        Modal.shown()
	      })
	    },
	    hide:function(e){
	      return e
	    },
	    show:function(e){
	      return e
	    },
	    hidden:function(hide){
	      if (typeof hide == "function"){
	        $(Modal.main).on('hidden.bs.modal', function () {
	          $(this).data('bs.modal', null).remove()
	          Modal.hide(hide())
	        })
	      }
	    },
	    shown:function(show){
	      if (typeof show == "function"){
	        $(Modal.main).on('shown.bs.modal', function () {
	          Modal.show(show())
	        })
	      }
	    }
	      
	  }//end modal


	    return Modal
	}

	/*########## ########## ########## ##########   ##########*/
	/*########## [END]Lazy To Use Bootstrap Modal ##########*/
	/*########## ########## ########## ##########   ##########*/

	return { init:init }
})()

