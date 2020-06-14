window.addEventListener("load", () => {
  document.getElementById("name").classList.add("invisible");
  document.getElementById("about").classList.add("invisible");
  document.getElementById("btn-portfolio").classList.add("invisible");

  setTimeout(() => {
    document.getElementById("name").classList.add("init-transition");
    document.getElementById("about").classList.add("init-transition");
    document.getElementById("btn-portfolio").classList.add("init-transition");
    document.getElementById("name").classList.remove("invisible");
    document.getElementById("about").classList.remove("invisible");
    document.getElementById("btn-portfolio").classList.remove("invisible");
  }, 1000);
},false)

toProjects = () => {
  document.getElementById("home").classList.add("home-transition");
  setTimeout(() => {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("projects").classList.remove("hidden"); 
    document.getElementById("name-header").classList.remove("invisible");
    document.getElementById("mask").classList.add("mask-transition");
  }, 1500);
  setTimeout(() => {
    document.getElementById("mask").classList.add("hidden");
  }, 3000);
}

toHome = () => {
  document.getElementById("projects").classList.add("hidden");
  document.getElementById("name-header").classList.add("invisible");
  document.getElementById("home").classList.remove("home-transition");
  document.getElementById("home").classList.remove("hidden"); 
  document.getElementById("footer").classList.remove("hidden");
  document.getElementById("mask").classList.remove("hidden"); 
}