$(document).ready(function() {
  $('#login').click(function(e){
  	e.preventDefault()

  	$.ajax({
  		url: $(e.target).attr('href')
  	}).done(function(response){
  		$('.body').html(response)
  	})
  })


 //  $('body').on('submit', '#form_login', function(e){
	// e.preventDefault()

 //  	$.ajax({
 //  		url: $(e.target).attr('action'),
 //  		method: $(e.target).attr('method'),
 //  		data: $(e.target).serialize()
 //  	}).done(function(response){
 //  		$('.body').html(response)
 //  	}).fail(function(error){
 //  		$(e.target).prepend(error.responseText)
 //  	})
 //  })


   $('#register').click(function(e){
  	e.preventDefault()

  	$.ajax({
  		url: $(e.target).attr('href')
  	}).done(function(response){
  		$('.body').html(response)
  	})
  })

 //   $('body').on('submit', '#form_register', function(e){
	// e.preventDefault()
	
 //  	$.ajax({
 //  		url: $(e.target).attr('action'),
 //  		method: $(e.target).attr('method'),
 //  		data: $(e.target).serialize()
 //  	}).done(function(response){
 //  		$('.body').html(response)
 //  	}).fail(function(error){
 //  		$(e.target).prepend(error.responseText)
 //  	})
 //  })


   $('#profile').click(function(e){
  	e.preventDefault()
  	$.ajax({
  		url: $(e.target).attr('href')
  	}).done(function(response){
  		$('.body').html(response)
  	})
  })


   $('#start').click(function(e){
  	e.preventDefault()
  	$.ajax({
  		url: $(e.target).attr('href')
  	}).done(function(response){
  		$('#start').fadeOut()
  		$('.homeText').after(response)
  	})
  })
});
