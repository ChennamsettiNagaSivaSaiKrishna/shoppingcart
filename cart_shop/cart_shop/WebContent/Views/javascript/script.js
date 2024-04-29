$(document).ready(function() {
		    $.ajax({
		        url: 'http://localhost:8080/cart_shop/AllProductsServlet',
		        method: 'GET',
		        success: function(data) {
		            //$('#item').empty();
		            data = JSON.parse(data);
					console.log(data);
		            $.each(data.AllProducts, function(index, element) {
		                
		                var div='<div class="col-md-3 col-sm-4">'+
						'<div class="single-new-arrival">'+
						'<div class="single-new-arrival-bg">'+
						'<img src="../images/' + element[3] + '" alt="' + element[3] + '">'+
							'<div class="single-new-arrival-bg-overlay"></div>'+
							'<div class="new-arrival-cart">'+
								'<p>'+
									'<span class="lnr lnr-cart"></span>'+
									'<a href="#">'+element[1]+'</a>'+
								'</p>'+
								'<p class="arrival-review pull-right">'+
									'<span class="lnr lnr-heart"></span>'+
									'<span class="lnr lnr-frame-expand"></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<h4>' + element[1] + '</h4>'+
						'<p class="arrival-product-price">' + element[2] + '</p>'+
						'<button id="'+element[0]+'">Add to Cart</button>'+
					'</div>'+
				'</div>';
		                $('.row').append(div);
		            });
		        },
		        error: function(xhr, status, error) {
		            console.error('AJAX request failed:', error);
		        }
		    });
		
		});
		
$(document).ready(function() {
			var url = 'http://localhost:8080/cart_shop/CategoriesServlet';
		    $.ajax({
		        url: url,
		        method: 'GET',
		        success: function(data) {
		            //$('#category').empty();
		            data = JSON.parse(data);
		            $.each(data, function(index, element) {
		                
						var options='<option value='+element+'>'+index+'</option>';
		                $('#category').append(options);
		            });
		        },
		        error: function(xhr, status, error) {
		            console.error('AJAX request failed:', error);
		        }
		    });
		
		});
		
$(document).on('change', '#category', function() {
		    		var scv=$("#category").val();
					console.log(scv)
				     $.ajax({
				        url: 'http://localhost:8080/cart_shop/AllProdByIdServlet',
				        method: 'GET',
						data: {val:scv},
				    success: function(data) {
		            $('.row').empty();
		            data = JSON.parse(data);
					console.log(data);
		            $.each(data.AllProducts, function(index, element) {
		                
		                var div='<div class="col-md-3 col-sm-4">'+
						'<div class="single-new-arrival">'+
						'<div class="single-new-arrival-bg">'+
						'<img src="../images/' + element[3] + '" alt="' + element[3] + '">'+
							'<div class="single-new-arrival-bg-overlay"></div>'+
							'<div class="new-arrival-cart">'+
								'<p>'+
									'<span class="lnr lnr-cart"></span>'+
									'<a href="#">'+element[1]+'</a>'+
								'</p>'+
								'<p class="arrival-review pull-right">'+
									'<span class="lnr lnr-heart"></span>'+
									'<span class="lnr lnr-frame-expand"></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<h4>' + element[1] + '</h4>'+
						'<p class="arrival-product-price">' + element[2] + '</p>'+
						'<button>Add to Cart</button>'+
					'</div>'+
				'</div>';
		                $('.row').append(div);
		            });
		        },
				        error: function(xhr, status, error) {
				            console.error('AJAX request failed:', error);
				        }
				    });		
   });

	$(document).on('click','.single-new-arrival button' ,function(){
				
				console.log("dsdsf")
				var itemCard=$(this).closest('.single-new-arrival');
				var itemname=itemCard.find('h4').text();
				var itemprice=itemCard.find('p').text();
				var itemCard2=$(this).closest('.single-new-arrival .single-new-arrival-bg');
				var itemimage=itemCard2.find('img').attr('src');
				//console.log(itemname+" "+itemprice+itemimage)
				
		});
