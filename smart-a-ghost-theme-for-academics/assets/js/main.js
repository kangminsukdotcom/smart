"use strict";var gridContainers=document.querySelectorAll(".grid-container-home");gridContainers.forEach(function(e){var t=e.querySelectorAll(".card");e.classList.add("grid-container-home-".concat(t.length))});var mobileNavBtn=document.getElementById("mobile-nav-btn"),mobileMenu=document.querySelector(".mobile-nav-menu"),mobileHamburger=document.querySelector(".hamburger"),mobileMenuInner=document.querySelector(".mobile-nav-menu-inner");function closeMobileNavMenu(){mobileHamburger.classList.remove("is-active"),mobileMenu.classList.add("nav-menu-hidden"),mobileMenu.classList.remove("nav-menu-expanded"),mobileMenu.setAttribute("aria-expanded",!1)}function closeByEsc(e){"Escape"===e.key&&(closeMobileNavMenu(),document.body.removeEventListener("keydown",closeByEsc))}function openMobileNavMenu(){mobileHamburger.classList.add("is-active"),mobileMenu.classList.remove("nav-menu-hidden"),mobileMenu.classList.add("nav-menu-expanded"),mobileMenu.addEventListener("click",closeMobileNavMenu),mobileMenu.setAttribute("aria-expanded",!0),document.body.addEventListener("keydown",closeByEsc)}mobileNavBtn.addEventListener("click",function(){mobileMenuInner.addEventListener("click",function(e){e.stopPropagation()}),mobileMenu.classList.contains("nav-menu-hidden")?openMobileNavMenu():closeMobileNavMenu()});var lastKnownScrollPos=0,ticking=!1,progressBar=document.querySelector(".post-reading-progress"),shareBar=document.querySelector(".post-share-bar"),footer=document.querySelector(".footer"),buffer=50,postImg=document.querySelector(".post-img"),postContentHeight=document.querySelector(".post-content");function readingBarProgress(e){var t=Math.ceil(e/postContentHeight.clientHeight*100);progressBar.style.width="".concat(t,"%")}function shareBarAnimation(){postImg.getBoundingClientRect().bottom+buffer<shareBar.getBoundingClientRect().top&&shareBar.getBoundingClientRect().bottom<footer.getBoundingClientRect().top-buffer?(1024<window.innerWidth?shareBar.style.marginLeft="0":shareBar.style.marginBottom="0",shareBar.style.opacity="1"):(1024<window.innerWidth?shareBar.style.marginLeft="-200px":shareBar.style.marginBottom="-100px",shareBar.style.opacity="0")}progressBar&&window.addEventListener("scroll",function(){lastKnownScrollPos=window.scrollY,ticking||(window.requestAnimationFrame(function(){readingBarProgress(lastKnownScrollPos),shareBarAnimation(),ticking=!1}),ticking=!0)});var copyButton=document.getElementById("copy-button");copyButton&&copyButton.addEventListener("click",function(){var e=window.location.href,t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)});var subBtns=document.querySelectorAll(".navbar-subscribe-btn"),searchBtns=document.querySelectorAll(".navbar-search-btn");function modalOpen(e){var t=e.currentTarget.dataset.id.toString(),n=document.querySelector(".".concat(t,"-modal"));n.style.marginLeft="0",n.setAttribute("aria-expanded","true")}subBtns.forEach(function(e){e.addEventListener("click",function(e){return modalOpen(e)})}),searchBtns.forEach(function(e){e.addEventListener("click",function(e){return modalOpen(e)})});var modalClose=document.querySelectorAll(".modal-close");modalClose.forEach(function(e){return e.addEventListener("click",function(e){e.currentTarget.parentElement.parentElement.setAttribute("aria-expanded","false"),e.currentTarget.parentElement.parentElement.style.marginLeft="100%"})});var tables=document.querySelectorAll(".post-content > table");function tablePrepend(e){var t=document.createElement("div");t.setAttribute("style","width: 100%; overflow-x: auto; margin: 1em 0;"),e.parentNode.insertBefore(t,e),t.appendChild(e)}tables.forEach(function(e){return tablePrepend(e)});