import './menu.scss'
const $ = require('jquery')

$(function() {
  $('.menu').find('a').click(function(e) {
      e.preventDefault()
      $(this.hash).show().siblings().hide()
      $('.menu').find('a').parent().removeClass('menu__item_active')
      $(this).parent().addClass('menu__item_active')
  })
})