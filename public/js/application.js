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

   $('.container').on('click', '#another', function(e){
    e.preventDefault()
    $.ajax({
      url: $(e.target).attr('href')
    }).done(function(response){
      $('.workout').attr('src', response)
    })
  })

   $('#start').click(function(e){
    e.preventDefault()
      $('#start').hide()
    
    $.ajax({
      url: $(e.target).attr('href')
    }).done(function(response){
      $('.homeText h2').text('Here is your workout!')
      $('.homeText').after(response)
    })
  })




   $('.container').on('click', '.workout_list', function(e){
    e.preventDefault()

    $('#lightbox').fadeIn()
    $(e.target).removeClass('workout_list')
    $(e.target).addClass('workout_show')
  })


   $('.container').on('click', 'img.workout', function(e){
    e.preventDefault()

    $('#lightbox').fadeIn()
    $(e.target).removeClass('workout')
    $(e.target).addClass('workout_show')
  })


   $('.container').on('click', '.workout_show', function(e){
    e.preventDefault()

    $('#lightbox').fadeOut()
    $(e.target).removeClass('workout_show')
    $(e.target).addClass('workout_list')
  })

   $('.container').on('click', '#lightbox', function(e){
    e.preventDefault()

    $('#lightbox').fadeOut()
    $('.workout_show').addClass('workout_list')
    $('.workout_list').removeClass('workout_show')
  })


   // Changing the users time for countdown
  $('#time_change').submit(function(e){
    e.preventDefault()

    $.ajax({
      url: $(e.target).attr('action'),
      method: $(e.target).attr('method'),
      data: $(e.target).serialize()
    }).done(function(response){
       $('.body').html(response)
    })
  })


  // Adjusting countdown to the users selected time
  $('.container').on('click', '#go', function(e){
    e.preventDefault()
    
    $.ajax({
      url: $(e.target).attr('href')
    }).done(function(response){
      var time = response

      $('#go').hide()
      $('#timmer').fadeIn('slow')
      $('.homeText h2').text('Your time has begun!')

      var countdown = time * 60 * 1000;
      var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

        // Display the result in the element with id="timmer"
        if (min.toString().length < 2) {
          min = '0' + min
        }

        if (sec.toString().length < 2) {
          sec = '0' + sec
        }
        document.getElementById("timmer").innerHTML = min + "m " + sec + "s ";

        $('#profile').click(function(e){
          clearInterval(timerId);
        })

        // If the count down is finished, write some text 
        if (countdown < 0) {
          clearInterval(timerId);
          var sound = new Audio('/airHorn.mp3');
            sound.play();
          $('#start').fadeIn('slow')
          $('#timmer').hide()


          // document.getElementById("start").show()
        }
      }, 1000);
    })
  })

});
