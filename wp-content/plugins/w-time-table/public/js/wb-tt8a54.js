(function( $ ) {
	'use strict';
	$(document).ready(function(){

		// filter
		var myList = [];
		$('#wb_fiter_select li').each(function() {
			// get all of label and collect
		    myList.push($(this).text())
		});

		$( '#wb_fiter_select li' ).on('click',function(){
			 var lable = $( this ).text();
			 var lablee = $( this ).prop('class');
			 $('li.wb_all_filter').html(lable);
			$.each(myList,function( index,value ){
		        $("td").each(function(){
		          var td = $(this);
			  	  td.find('.wb_filter_find').css('visibility','visible');
		          if (! td.hasClass( lable ) ){
		            td.find('.wb_filter_find').css('visibility','hidden');
		            $('.time').css('visibility','visible');
		          }
		          if( lablee == 'wb_filter_fi' || lablee == 'wb_all_filter' ){
		          	td.find('.wb_filter_find').css('visibility','visible');
		          }
		        });
			});
		});


		// background hover color
		$('.wb_time_table').find('tbody').find('tr.wb_table').children('td:not(.time)').hover( function() {
			var $this			 = $(this),
				bg_hover_color	 = $this.data('bghover'),
				text_hover_color = $this.find('span.wb_course').data('txhover');

			if ( typeof bg_hover_color !== 'undefined' && bg_hover_color != '' ) {
				$this.css('background-color', bg_hover_color);
			}

			if ( typeof text_hover_color !== 'undefined' && text_hover_color != '' ) {
				$this.children('span').find('span').css('color', text_hover_color);
			}
		}, function() {
			var $this			= $(this),
				bg_color		= $this.data('bgcolor') ? $this.data('bgcolor') : '#f4f6f6',
				text_color		= $this.find('span.wb_course').data('txcolor');

			if ( typeof bg_color !== 'undefined' && bg_color != '' ) {
				$this.css('background-color', bg_color);
			}

			if ( typeof text_color !== 'undefined' && text_color != '' ) {
				$this.children('span').find('span').css('color', text_color);
			} else {
				$this.children('span').find('span').css('color', '');
			}
		});

	});

})( jQuery );
