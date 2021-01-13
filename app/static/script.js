$(document).ready(()=>{
   //Menu
    $(".box").bind("click", ()=>{
        $("body").toggleClass('open');
        $('.bar').toggleClass('open');
        $('.menu_drop').toggleClass('open');
        $('.box').toggleClass('open');
    });
    //FooterPanel
      var triggerTabList =[].slice.call(document.querySelectorAll('#myList a'));
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl);
      triggerEl.addEventListener('click', function (event) {
        event.preventDefault();
        tabTrigger.show();
      });
    });
});