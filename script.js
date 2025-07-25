const projectDiv = document.getElementById("projects");
const myProjects = [
  { name: "Age Calculator", desc: "This is a fundamental project for me to practice" , img: "./Assets/Age.png" , link: "https://github.com/Marzuuq/My-Frontend-projects/tree/main/Age-calculator" },
  { name: "Mini Calculator", desc: "This is a fundamental project for me to hone my skills." , img:"./Assets/mathematics.png" , link:"https://github.com/Marzuuq/My-Frontend-projects/tree/main/mini-calculator" },
  ,
];
myProjects.forEach((item)=>{
    let card = document.createElement("div");
    card.className="shadow-sm rounded-sm   w-90  md:w-65vw]   p-10 m-3 mt-4  transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white"
    card.innerHTML = `<img src = "${item.img} " class = "h-16 m-auto rounded-xl mb-0.5 "> <h4 class = " text-xl font-bold mt-2"> ${item.name} </h4> <p class = "text-[1em] max-w-[15vw] m-auto mb-2 mt-2"> ${item.desc}</p>
    <a  class = " text-blue-800" href ="${item.link}" target = "blank" > Github Link </a>`;
    projectDiv.appendChild (card);
}
)

function toggleTheme(){
  
}

const projectLearn = document.getElementById("LearningPaths");
const learned = [
  {name: "Learned Java" , desc:"Very Basic" , img:"./Assets/java.png"},
  {name: "Learned C" , desc: "Very Basic" , img: "./Assets/c.png"},
  {name: "Learned JS" , desc: "Very Basic" , img:"./Assets/javascript.png"}
];

learned.forEach((item1) => {
  let cardLearn = document.createElement("div");
  cardLearn.className = "shadow-sm rounded-sm   w-90  md:w-65vw]   p-10 m-3 mt-13 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white"
  cardLearn.innerHTML = `<img src = "${item1.img}" class = "h-16  m-auto mb-5" > <h4 class = "text-xl">  ${item1.name} </h4> <p class = "text-[0.7em]"> ${item1.desc} </p>`;
  projectLearn.appendChild(cardLearn);
}) 
