let key = "diJvg7NL89Z8UuoCpusmaFfbI3kRNFrZrNDXbZhV3Qs";
let key2 = "B2Qfumcywaj1NRsILDSS55HS73pF6TxlRLNGXh6Y4GA";

let button_reference = document.getElementById('initButton');
let search = document.getElementById("search");

button_reference.addEventListener('click', showImages); 
function imageClicked (event) {
  var img_prev_r = document.getElementById("img_preview");
  img_prev_r.classList.remove("d-none");
  var img_r = img_prev_r.children[0];
  img_r.src = event.target.src;
}
function showImages(element) {
  element.preventDefault();
  var container_ref = document.getElementById("gallery_container"); 

  container_ref.innerText = "";
  let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${search.value}`
  fetch(url)
  .then((x) => x.json())
  .then((res) => {
    for (let i = 0; i <res.results.length; i = i + 1) {
      let single_result = res.results[i];
      let single_url = single_result.urls.regular;
      console.log(single_url);
      var img_ref = document.createElement("img"); 
      img_ref.src = single_url;
      img_ref.addEventListener('click', imageClicked)
      container_ref.appendChild(img_ref);
    }
  });
  search.value = "";
}
x.addEventListener('click', Close);
function Close(){
  var img_prev_r = document.getElementById("img_preview");
  img_prev_r.classList.add("d-none");
}