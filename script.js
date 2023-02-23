function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img lgt
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se nn, manter img default
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
