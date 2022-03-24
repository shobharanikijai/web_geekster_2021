const reviews = [
   {
    id: 1,
    name: "Rosy Kuki",
    job: "Web Developer",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Integer nec ipsum dapibus, consequat magna quis, placerat diam. Phasellus tincidunt volutpat neque non posuere. In hac habitasse platea dictumst. Integer consectetur id massa vel maximus. Nullam aliquet nulla id iaculis luctus."
   },
   {
    id: 2,
    name: "Nula Showy Anal",
    job: "Backend Developer",
    img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Aliquam pharetra ante vel diam molestie eleifend.Integer nec ipsum dapibus, consequat magna quis, placerat diam. Phasellus tincidunt volutpat neque non posuere. In hac habitasse platea dictumst. Integer consectetur id massa vel maximus. Nullam aliquet nulla id iaculis luctus."
   },
   {
    id: 3,
    name: "Boikim Hangsingh",
    job: "Intern",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Aliquam pharetra ante vel diam molestie eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nec ipsum dapibus, consequat magna quis, placerat diam. "
   },
   {
    id: 4,
    name: "Chingboih Zou",
    job: "Web Designer",
    img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Aliquam pharetra ante vel diam molestie eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nec ipsum dapibus, consequat magna quis, placerat diam. In hac habitasse platea dictumst. Integer consectetur id massa vel maximus. Nullam aliquet nulla id iaculis luctus."
   },
   {
    id: 5,
    name: "Pinky Lyngdoh",
    job: "UX Designer",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat nec urna sed efficitur. Maecenas sollicitudin, dui sit amet efficitur posuere, lorem ipsum molestie eros, eu lobortis orci enim eu lorem. Cras gravida felis sit amet mi feugiat semper. Sed dapibus metus id mi mollis, nec aliquam metus pulvinar."
   },
   
];

var img = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");

var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var randomBtn = document.querySelector(".random-btn");

var currentIndex=0;

//DRY
function updateUserDetaills(){
    img.src=reviews[currentIndex].img;
    author.textContent = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.textContent = reviews[currentIndex].text;
}


prevBtn.addEventListener("click", prevClick);
function prevClick() {
    if(currentIndex === 0){
        currentIndex = reviews.length - 1;
    }else{
        currentIndex--;
    } 
    // console.log(currentIndex);  
    updateUserDetaills();
}

nextBtn.addEventListener("click", nextClick);
function nextClick() {
    if(currentIndex === reviews.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }   
    console.log(currentIndex);
    updateUserDetaills();
}

randomBtn.addEventListener("click", randomClick);
function randomClick(){
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    updateUserDetaills();
}

