let currentDate = document.getElementsByClassName("current-date")[0];
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
let now = new Date();
currentDate.textContent = now.toLocaleString('en-us', options);
setInterval(function () {
  'use strict';
  now = new Date();
  currentDate.textContent = now.toLocaleString('en-us', options);
}, 1000);
let prevInfoContainer = document.getElementById("previous-info");
function prevInfoHide () {
  'use strict';
  prevInfoContainer.children[0].style.opacity = "0";
  prevInfoContainer.children[1].style.opacity = "0";
}
function prevInfoShow (current) {
  'use strict';
  let currentPrevInfo = document.getElementsByClassName("previnfo");
  prevInfoContainer.children[0].textContent = currentPrevInfo[current].children[0].textContent;
  prevInfoContainer.children[1].textContent = currentPrevInfo[current].children[1].textContent;
  prevInfoContainer.children[0].style.opacity = "1";
  prevInfoContainer.children[1].style.opacity = "1";
}
window.onload = function () {
  'use strict';
  $('#previous-chairmans').on('slide.bs.carousel', function (e) {
    prevInfoHide ();
  })
  $('#previous-chairmans').on('slid.bs.carousel', function (e) {
    prevInfoShow ($(this).find('.active').index());
  })
};
let pageLinks = document.getElementsByClassName("page-link");
let pages = document.getElementsByClassName("page");
for (let i = 0; i < pageLinks.length; i++){
  pageLinks[i].onclick = function (e) {
    'use strict';
    e.preventDefault();
    pageNavigation(pageLinks[i]);
  }
}
function pageNavigation (pageLink) {
  'use strict';
  if (! pageLink.parentElement.classList.contains("active")) {
    let oldPage = "";
    let linkParent = pageLink.parentElement;
    let linkChildrens = linkParent.parentElement.children;
    if (pageLink.textContent == 2) {
      oldPage = document.getElementsByClassName(linkParent.previousElementSibling.children[0].getAttribute("data-ref"))[0];
    } else {
      oldPage = document.getElementsByClassName(linkParent.nextElementSibling.children[0].getAttribute("data-ref"))[0];
    }
    let newPage = document.getElementsByClassName(pageLink.getAttribute("data-ref"))[0];
    oldPage.style.opacity = "0";
    setTimeout (function () {
      'use strict';
      oldPage.style.display = "none";
      newPage.style.display = "block";
    }, 500);
    newPage.style.opacity = "1";
    for (let j = 0; j < linkChildrens.length; j++){
      linkChildrens[j].classList.remove("active");
    }
    linkParent.classList.add("active");
  }
}
