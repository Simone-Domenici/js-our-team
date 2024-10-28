const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function displayTeam() {
  const teamContainer = document.getElementById("teamContainer");
  teamContainer.innerHTML = "";
  
  teamMembers.forEach(member => {
    const memberCard = `
      <div class="card col-4 bg-black text-white">
        <div class="row">
          <div class="col-md-4">
            <img src="${member.img}" class="img-fluid rounded-start" alt="${member.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title team__name">${member.name}</h5>
              <p class="card-text">${member.role}</p>
              <p class="card-text text-info">${member.email}</p>
            </div>
          </div>
        </div>
      </div>
    `
    teamContainer.insertAdjacentHTML("beforeend", memberCard);
  });
}

document.getElementById("addMemberForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const newMember = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    email: document.getElementById("email").value,
    img: document.getElementById("img").value
  };
  
  teamMembers.push(newMember);
  displayTeam();
  
  this.reset();
});

displayTeam()