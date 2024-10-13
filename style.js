var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// ----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target.querySelector("h3");
        if (element) {
          let startValue = 9950;
          const endValue = 10000;
          const duration = 2000; // Duration of the animation in milliseconds
          const stepTime = 10; // Interval between updates in milliseconds
          const stepValue = (endValue - startValue) / (duration / stepTime);

          function updateValue() {
            if (startValue < endValue) {
              startValue += stepValue;
              if (startValue > endValue) {
                startValue = endValue;
              }
              element.textContent = Math.floor(startValue).toLocaleString();
              setTimeout(updateValue, stepTime);
            }
          }

          updateValue();

          element.classList.add("inview");
        }
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Adjust this value as needed
  });

  // Target the element with id 'value'
  const target = document.querySelector("#value");
  if (target) {
    observer.observe(target);
  }
});

// ------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var itemSlider = document.getElementById("itemslider");
//   if (itemSlider) {
//     var carousel = new bootstrap.Carousel(itemSlider, {
//       interval: 3000,
//     });
//   }

//   var items = document.querySelectorAll(".carousel-showmanymoveone .item");
//   items.forEach(function (item) {
//     var itemToClone = item;

//     for (var i = 1; i < 6; i++) {
//       itemToClone = itemToClone.nextElementSibling;

//       if (!itemToClone) {
//         itemToClone = item.parentNode.firstElementChild;
//       }

//       var clonedItem = itemToClone.children[0].cloneNode(true);
//       clonedItem.classList.add("cloneditem-" + i);
//       item.appendChild(clonedItem);
//     }
//   });
// });
// ---------------------------------------

// script.js
window.onload = function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show or hide the button based on scroll position
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // Smooth scroll to top when the button is clicked
  backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
//prevent right click

// document.onkeydown= function(e){
//   if(event.keyCode == 123){
//     return false
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//     return false
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//     return false
//   }
//   if(e.ctrlKey &&  e.keyCode == 'U'.charCodeAt(0)){
//     return false
//   }
// }

// ===============================================================
let counted = 0;

window.addEventListener('scroll', function() {
  const counterElement = document.getElementById('counter');
  const oTop = counterElement.getBoundingClientRect().top + window.scrollY - window.innerHeight;

  if (counted === 0 && window.scrollY > oTop) {
    const countElements = document.querySelectorAll('.count');
    
    countElements.forEach(function(element) {
      const countTo = parseInt(element.getAttribute('data-count'), 10);
      let countNum = parseInt(element.textContent, 10);
      const duration = 2000;
      const startTime = performance.now();

      function animateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        countNum = Math.floor(progress * (countTo - countNum) + countNum);
        element.textContent = countNum;

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          element.textContent = countTo; // Ensure it ends at the target number
        }
      }

      requestAnimationFrame(animateCount);
    });

    counted = 1;
  }
});
