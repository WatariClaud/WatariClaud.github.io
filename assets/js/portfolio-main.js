const div = document.querySelectorAll(".portfolio-items")[0];
const portfolio_list = [
  {
    "title": "ProLearnerHub",
    "description": "An eLearning Platform where anyone can learn the fundamentals of Computer Science",
    "image": "./assets/images/code.png",
    "link": "https://prolearnerhub.tech",
  },
  {
    "title": "Smart Text Generator",
    "description": "A chatbot built on GPT4 OpenAI model as part of team coding challenges",
    "image": "./assets/images/chatbot.png",
    "link": "https://smart-text-generator-production.up.railway.app/chat",
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native app as part of team coding challenges",
    "image": "./assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native app as part of team coding challenges",
    "image": "./assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native app as part of team coding challenges",
    "image": "./assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native app as part of team coding challenges",
    "image": "./assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
  },
];

portfolio_list.forEach(item => {
  div.innerHTML += `
    <div  class = "portfolio-item card">
      <a href="${item.link === "" ? "#" : item.link}" target="_blank">
        <div>
          <h3>${item.title}</h3>
          <br/>
          <p class="item-description">${item.description}</p>
          <img src="${item.image}" class="portfolio-item-image"/>
        </div>
      </a>
    </div>
  `;
})