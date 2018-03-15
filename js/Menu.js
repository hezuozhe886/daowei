/**
 * Created by Administrator on 2018/3/14.
 */
$(function(){
  home();
  //1. 鼠标移入显示,移出隐藏(.hover()方法,有显示show()和隐藏hide()两个方法)
  //鼠标移动切换二级导航菜单的切换显示和隐藏
  function home() {
    $('.home-menu-child-list').hover(function(){
      $('this').children('div').show()
    },function () {
      $('this').children('div').hide()
    })
  }
})