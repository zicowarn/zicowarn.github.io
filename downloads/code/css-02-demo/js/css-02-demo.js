
//切换左侧按钮事件处理函数
function toggleLinks(evt, link_content_id) {
  // hide all links contents 
  $(".navilinks").each(function () {
    $(this).hide();
  });
  $('#' + link_content_id).show();
  $(".mdl-navigation__link").each(function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {}
  });
  $(evt.currentTarget).addClass('is-active');
};


function initChartDemo(){
  $('.content-block').each(function(){
    let thisparent = $(this).parent();
    if (thisparent.css("display") === "block") {
      console.log(" #Shown#" + thisparent[0].id + ' width: ' + thisparent.width()+ ' height: ' + thisparent.height());
      console.log(" #Shown#" + this.id + ' width: ' + $(this).width()+ ' height: ' + $(this).height());
    } else {
      thisparent.css({ visibility: "hidden", display: "block" });
      console.log(" #Hided#" + thisparent[0].id + ' width: ' + thisparent.width()+ ' height: ' + thisparent.height());
      console.log(" #Hided#" + this.id + ' width: ' + $(this).width()+ ' height: ' + $(this).height());
      thisparent.css({ visibility: "", display: "none" });
    }
  
    
  })
  }




