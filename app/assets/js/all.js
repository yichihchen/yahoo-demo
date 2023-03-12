var i, panelsShifts, tabsLinks;
function openTabs(event, tabsType) {

  //讓所有tabs內容先消失
  panelsShifts = document.getElementsByClassName("panels-shifts");
  for (i = 0; i < panelsShifts.length; i++) {
    panelsShifts[i].style.display = "none";  //取得所有class="tabcontent" 先用js讓它隱藏
  }

  //若html 按鈕active開起就讓它關閉
  tabsLinks = document.getElementsByClassName("tabslinks");
  for (i = 0; i < tabsLinks.length; i++) {
    tabsLinks[i].className = tabsLinks[i].className.replace("active", "");
  }

  //將active附加到其現有的className屬性值中
  //id名稱要和function的tabsType能夠連結
  document.getElementById(tabsType).style.display = "block";
  event.currentTarget.className += "active";

}