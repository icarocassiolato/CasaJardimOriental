  jQuery(document).ready(function($) {

		// Quando uma imagem é carregada
//		$('#myCarousel .item img').on('load', function() {
//			// Obter a altura da imagem carregada
//			var imageHeight = $(this).height();
			
			// Definir a altura do carousel com base na altura da imagem
//			$('#myCarousel').height(imageHeight);

//		});

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());				
		});
});