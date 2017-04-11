function create(){
  /*var body = document.getElementById("body");
  var section = document.createElement("section");
  var container = document.createElement("div");
  var titulo = document.createElement("h2");
  var texto = document.createElement("h4");
  var div = document.createElement("div");
  var img = document.createElement("img");
  var subtitle = document.createElement("h5");
  body.appendChild(section);
  section.setAttribute("id","work");
  section.appendChild(container);
  container.classList.add("container");
  container.appendChild(titulo);
  titulo.classList.add("text-uppercase");
  titulo.classList.add("text-services");
  titulo.classList.add("mt-0");
  titulo.innerHTML = "Work";
  container.appendChild(texto);
  texto.innerHTML = "Lorem   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit eligendi adipisci," + "<br>"  +
    "esse accusantium provident sint tenetur, laborum commdi ad, eius dolore numqui.";
  container.appendChild(div);
  div.classList.add("container");
  div.appendChild(img);
  img.setAttribute("src","assets/img/hero.png");
  img.setAttribute("width","1000");*/
 console.log("hola");
}

function addImage(){
  var content = document.getElementById("content-image");
    for(var i=1; i<13;i++){
        var div = document.createElement("div");
        div.classList.add("box-work");
        var image = document.createElement("img");
        image.setAttribute("src","assets/img/img-"+i+".jpg");
        image.setAttribute("width","500");
        var span = document.createElement("span");
        div.appendChild(image);
        div.appendChild(span);
        content.appendChild(div);
 }
}
addImage();
