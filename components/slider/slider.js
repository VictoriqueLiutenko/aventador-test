import './slider.scss'
const $ = require('jquery')

$(document).ready(function() {
  let $slides = $('.js-slide')
  let $arrowNext = $('.js-next')
  let $arrowPrev = $('.js-prev')

  const transition_time = 200
  const time_between_slides = 3000

  let current = 0

  $slides.fadeOut()
  $slides.first().addClass('active')
  $slides.first().fadeIn(transition_time)
  
  let slide = setInterval(increment, time_between_slides)

  $arrowNext.click(function() {
    increment()
    clearInterval(slide)
    slide = setInterval(increment, time_between_slides)
  })
  $arrowPrev.click(function() {
    decrement()
    clearInterval(slide)
    setTimeout(time_between_slides)
    slide = setInterval(increment, time_between_slides)
  })

  function increment() {
    $slides.eq(current).removeClass('active')
    $slides.eq(current).fadeOut(transition_time)

    if (current >= $slides.length - 1) {
      current = 0
    } else {
      current++
    }

    $slides.eq(current).fadeIn(transition_time)
    $slides.eq(current).addClass('active')
  }

  function decrement() {
    $slides.eq(current).removeClass('active')
    $slides.eq(current).fadeOut(transition_time)

    if (current == 0) {
      current = $slides.length - 1
    } else {
      current--
    }

    $slides.eq(current).fadeIn(transition_time)
    $slides.eq(current).addClass('active')
  }
})