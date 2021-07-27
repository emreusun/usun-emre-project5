(() => {
  const button = document.querySelector('#button'),
        burgerCon = document.querySelector("#burgerCon"),
        navLinks = burgerCon.querySelectorAll("a");

        function showNavigation()  {
         button.classList.toggle("expanded");

         // show the mobile Navigation
         burgerCon.classList.toggle("slideToggle");
        }

        // event handling goest at the bottom
        button.addEventListener("click",showNavigation);

        for (link of navLinks) {
          link.addEventListener("click",showNavigation);
        }
        for (plan of planSelectorNav ) {
          plan.addEventListener("click", switchPlan);
        }
       })();
