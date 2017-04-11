function create(){
  var body = document.getElementById("body");
  var section = document.createElement("section");
  var container = document.createElement("div");
  var titulo = document.createElement("h2");
  var texto = document.createElement("h4");
  var div = document.createElement("div");
  var img = document.createElement("img");
  var subtitle = document.createElement("h5");
  body.appendChild(section);
  section.appendChild(container);
  container.classList.add("container");
  container.appendChild(titulo);
  titulo.classList.add("text-uppercase");
  titulo.classList.add("text-services");
  titulo.classList.add("mt-0");
  container.netxtElementSibling="Work";
  container.appendChild(texto);
  container.appendChild(div);
  div.classList.add("box-work");
  div.appendChild(img);
  img.setAttribute("src","assets/img/hero.png");


   console.log("hola");
}
 create();
