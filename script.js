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
const projectLearn = document.getElementById("LearningPaths");
const learned = [
  {name: "Learned Java" , desc:"Very Basic"},
  {name: "Learned C" , desc: "Very Basic"},
  {name: "Learned JS" , desc: "Very Bsic"}
];

learned.forEach((item1) => {
  let cardLearn = document.createElement("div");
  cardLearn.className = "shadow-sm rounded-sm p-10 m-3"
  cardLearn.innerHTML = `<h4 class = "text-xl"> ${item1.name} </h4> <p class = "text-[0.7em]"> ${item1.desc} </p>`;
  projectLearn.appendChild(cardLearn);
}) 
