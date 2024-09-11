let cont_respuesta = document.getElementById("respuesta");

let api_key = "Aqui va la apiKEy"; /*nEk2p9LlZ5MF5uQ8yUsstJj1CgEAVLeK*/

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  datos = new FormData(form);
  let busqueda = datos.get("buscar");

  let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${busqueda}&limit=1&offset=0&rating=r&lang=es&bundle=clips_grid_picker`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (data.data && data.data.length > 0) {
          gif = data.data[0].embed_url;
          console.log(gif);
        cont_respuesta.innerHTML =''
          cont_respuesta.innerHTML +=`
            <iframe src="${gif}" frameborder="0"></iframe>
          `
        } else {
          console.error("No se encontraron datos en la respuesta.");
          cont_respuesta.innerHTML =``
          cont_respuesta.innerHTML +=`
          <p>No hay Gifs (caritatriste)</p>
          `
        }
      })
    .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    
    
});
