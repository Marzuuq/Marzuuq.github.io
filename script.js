const projectDiv = document.getElementById("projects");
const myProjects = [
  { name: "Lorem2", desc: "Lorem10" },
  { name: "Lorem2", desc: "Lorem10" },
  { name: "Lorem2", desc: "Lorem10" },
];
myProjects.forEach((item)=>{
    let card = document.createElement("div");
    card.className="shadow-sm rounded-sm p-10 m-3 "
    card.innerHTML = `<h4 class = " text-xl"> ${item.name} </h4> <p class = "text-[0.5em]"> ${item.desc}</p>`;
    projectDiv.appendChild (card);
}
)
// const mainImagesOfLearning = document.getElementById("MainIMages");
// const myLearningImages = [
//   "Assets/github.png"

// ]



const projectLearn = document.getElementById("LearningPaths");
const learned = [
  {name: "Learned Java" , desc:"Very Basic" , img:"./Assets/java.png"},
  {name: "Learned C" , desc: "Very Basic" , img: "./Assets/c.png"},
  {name: "Learned JS" , desc: "Very Bsic" , img:"./Assets/javascript.png"}
];

learned.forEach((item1) => {
  let cardLearn = document.createElement("div");
  cardLearn.className = "shadow-sm rounded-sm p-10 m-3"
  cardLearn.innerHTML = `<img src = "${item1.img}" class = "h-16 w16 m-auto" > <h4 class = "text-xl">  ${item1.name} </h4> <p class = "text-[0.7em]"> ${item1.desc} </p>`;
  projectLearn.appendChild(cardLearn);
}) 
