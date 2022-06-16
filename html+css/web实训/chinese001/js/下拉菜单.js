 $(function () {
      $(".navs>li").hover(function(){
         $(this).children("ul").slideDown(100)
      },function(){
         $(this).children("ul").slideUp(100)
      })
      // 事件切换 hover 鼠标经过和鼠标离开都会触发这个函数
      // $(".navs>li").hover(function(){
      //    $(this).children("ul").slideToggle(100) })
    })