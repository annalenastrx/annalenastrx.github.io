function scroll_to_section(section) {
  $("html").animate({ scrollTop: $(section).offset().top }, "slow");
}

function show() {
  document.getElementById('escape').style.visibility = 'visible';
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html").animate({ scrollTop: 0}, "slow");
}

function showImage(element, show) {
  let img = document.getElementById(element);
  img.style.transition = "opacity 0.3s";
  if (show) {
    img.style.opacity = 1;
  } else {
    img.style.opacity = 0;
  }

}

function hideText(element, hide) {
  if (hide) {
    document.getElementById(element).style.display = 'none';
  } else {
    document.getElementById(element).style.display = 'inline';
  }

}

