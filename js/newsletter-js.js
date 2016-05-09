(function( window, $, undefined ) {
	'use strict';

	var $document = $( document );

	function newsletterSignUp() {

		var $newsletterFormWrap = $( '.newsletter-signup_wrapper' ),
			$newsletterTitle, $newsletterForm, $newsletterFormHeight;

		if ( 0 === $newsletterFormWrap.length ) {
			return;
		}

		$newsletterTitle = $newsletterFormWrap.find( '.gform_title' );

		if ( 0 === $newsletterTitle.length ) {
			return;
		}

		$newsletterForm       = $newsletterFormWrap.find( 'form' );
		$newsletterFormHeight = $newsletterForm.height();

		$newsletterTitle.on( 'click', function() {
			var $that = $( this );

			$newsletterFormWrap.addClass( 'open' ).height( $newsletterFormHeight );
		})
	};

	// Document ready.
	$document.ready(function() {
		newsletterSignUp();
	});
})( this, jQuery );