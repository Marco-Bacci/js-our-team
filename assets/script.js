const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// definisco funzione struttura card
const generateCard = (member) => {
  const memberCard = `<div class="col-12 col-md-4">
            <div class="box d-flex gap-2 bg-dark text-white">
              <div class="box-photo">
                <img class="w-100" src="./assets/${member.img}" alt="">
              </div>
              <div class="box-info d-flex flex-column justify-content-center">
                <h5 class="text-uppercase">${member.name}</h4>
                <p>${member.role}</p>
                <p class="text-info">${member.email}</p>
              </div>
            </div>
          </div`;
          return memberCard;
};

// recuper elemento DOM della row
const teamContainer = document.getElementById(`team-member`);


for(let i = 0; i<teamMembers.length; i++){
  let card = generateCard(teamMembers[i])
  teamContainer.innerHTML += card;
}