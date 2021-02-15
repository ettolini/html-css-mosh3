const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded"); 
    // "toggle" -> if "collapsible--expanded" class exists, it's removed, otherwise, it's applied
  })
);