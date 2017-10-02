$(window).on('scroll', function(){
    if ($(window).scrollTop() >= ($(window).innerHeight() - 200)) {
        if (!$('.header').hasClass('hidden-menubar')) {
            $('.header').addClass('hidden-menubar')
        }
    }

    if ($(window).scrollTop() <= $(window).innerHeight()) {
        if ($('.header').hasClass('hidden-menubar')) {
            $('.header').removeClass('hidden-menubar')
        }
    }
})
$('.soc-btn-cn a').hover(function(){
	$('#inf-cnt').css({'opacity': 0, 'filter': 'blur(10px)'})
	var tht = this
	setTimeout(function(){
		$('#inf-cnt').text($(tht).attr('inf'))
		$('#inf-cnt').css({'opacity': 1, 'filter': 'blur(0px)'})
	}, 300)
}, function(){
	$('#inf-cnt').css({'opacity': 0, 'filter': 'blur(10px)'})
	setTimeout(function(){
		$('#inf-cnt').text('Stay in touch.')
		$('#inf-cnt').css({'opacity': 1, 'filter': 'blur(0px)'})
	}, 300)
})

$('#msgsend').on('click', function(){
    if (!$('#msgtxtbx').val() == '') {
        $('.msgs').append('<div class="msg rgt"><p>' +  $('#msgtxtbx').val() + '</p><p class="time-stamp">' + new Date().toLocaleTimeString() + '</p></div><div style="clear: both;"></div>')
        $('#msgtxtbx').val('')
        $('.msgs').scrollTop($('.msgs')[0].scrollHeight)
    }
})

$('#msgsend-gchat').on('click', function(e){
    e.stopPropagation();
    if (!$('#msgtxtbx-gchat').val() == '') {
        $('.gchats').append('<div class="gchat-msg rgt"><p>' +  $('#msgtxtbx-gchat').val() + '</p><p class="time-stamp">' + new Date().toLocaleTimeString() + '</p></div><div style="clear: both;"></div>')
        $('#msgtxtbx-gchat').val('')
        $('.gchats').scrollTop($('.gchats')[0].scrollHeight)
    }
})

$('#msgtxtbx').keypress(function(e) {
    if (e.key == "Enter" || e.keyCode == 13) {
        $('#msgsend').click();
        $('#msgtxtbx').val('')
    }
})

$('#msgtxtbx-gchat').keypress(function(e) {
    if (e.key == "Enter" || e.keyCode == 13) {
        $('#msgsend-gchat').click();
        $('#msgtxtbx-gchat').val('')
    }
})

$('#gc').on('click', function(e){
    e.stopPropagation();
    var offset = document.querySelector('#gc').getBoundingClientRect()
    $('.drpdn').css({
        'left': offset.left
    })
    if ($(this).hasClass('ds')) {
        $(this).removeClass('ds')
    } else {
        $(this).addClass('ds')
    }
    $('.drpdn').toggleClass('drpshowed')
})

$('#menu-toggle-btn').on('click', function(e){
    e.stopPropagation();
    $('.mobile-menu').toggleClass('mob-menu-showed')
})


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

$(window).on('click', function(){
    if ($('#gc').hasClass('ds')) {
        $('#gc').removeClass('ds')
    }

    if ($('.drpdn').hasClass('drpshowed')) {
        $('.drpdn').removeClass('drpshowed')
    }

    if ($('.mobile-menu').hasClass('mob-menu-showed')) {
        $('.mobile-menu').removeClass('mob-menu-showed')
    }

    if ($('.profile').hasClass('pf-toggle')) {
        $('.profile').removeClass('pf-toggle')
    }

    if ($('.gchat').hasClass('gchat-showed')) {
        $('.gchat').removeClass('gchat-showed')
    }
})

// Resize function to hide mobile menu when screen width > 640 
$(window).on('resize', function(){
    if (window.innerWidth > 640) {
        $('.mobile-menu').removeClass('mob-menu-showed')
    }

    if ($('.drpdn').hasClass('drpshowed')) {
        $('.drpdn').removeClass('drpshowed')
    }
})

$('.pf').on('click', function(e){
    e.stopPropagation();
    $('.profile').toggleClass('pf-toggle')
})

$('.drpdn a').on('click', function(e){
    e.stopPropagation();
    $(window).click(); // Simulate window click
    var mode = this.innerText
    switch (mode) {
        case 'PCMB':
            $('#proctor-name').text('PCMB Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'PCMC':
            $('#proctor-name').text('PCMC Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'PCME':
            $('#proctor-name').text('PCME Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'CsSBA':
            $('#proctor-name').text('Miss Poornima N');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening! Can you send me computer science lab record pic?</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<img src="notes.jpg"><p><span class="user-sent">Student 1</span> Sure</p><p class="time-stamp">05:24 PM</p>')
            break;
        case 'HEBA': 
            $('#proctor-name').text('HEBA Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'MEBA':
            $('#proctor-name').text('MEBA Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        default:
            console.log('Invalid');
    }

    if (!$('.gchat').hasClass('gchat-showed')) {
        $('.gchat').addClass('gchat-showed')
    }
    //$('.gchat').toggleClass('gchat-showed')
})

$('.mobile-menu a').on('click', function(e){
    e.stopPropagation();
    var mode = this.innerText
    switch (mode) {
        case 'PCMB':
            $('#proctor-name').text('PCMB Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'PCMC':
            $('#proctor-name').text('PCMC Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'PCME':
            $('#proctor-name').text('PCME Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'CsSBA':
            $('#proctor-name').text('Miss Poornima N');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening! Can you send me computer science lab record pic?</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<img src="notes.jpg"><p><span class="user-sent">Student 1</span> Sure</p><p class="time-stamp">05:24 PM</p>')
            break;
        case 'HEBA': 
            $('#proctor-name').text('HEBA Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'MEBA':
            $('#proctor-name').text('MEBA Proctor');
            $('#stwo').html('<p><span class="user-sent">Student 2</span> Good evening!</p><p class="time-stamp">05:23 PM</p>')
            $('#sone').html('<p><span class="user-sent">Student 1</span> How was your day?</p><p class="time-stamp">05:23 PM</p>')
            break;
        case 'Profile':
            $('.pf').click()
            break;
        default:
            console.log('Invalid');
    }

    if (!$('.gchat').hasClass('gchat-showed')) {
        $('.gchat').addClass('gchat-showed')
    }
    //$('.gchat').toggleClass('gchat-showed')
})

$('#msgtxtbx-gchat').on('click', function(e){
    e.stopPropagation()
})

//alert('The website is not fully functional, it is just a proof of concept')