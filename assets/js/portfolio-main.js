const div = document.querySelectorAll(".portfolio-items")[0];
const portfolio_list = [
  {
    "title": "ProLearnerHub",
    "description": "An eLearning Platform where anyone can learn the fundamentals of Computer Science",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/code.png",
    "link": "https://prolearnerhub.tech",
    "tags": ["react", "nodejs", "postgres", "cloud"]
  },
  {
    "title": "Smart Text Generator",
    "description": "A chatbot built on GPT4 OpenAI model as part of team coding challenges",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/chatbot.png",
    "link": "https://smart-text-generator.up.railway.app/chat",
    "tags": ["nodejs", "handlebars.js", "openAI"]
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native mobile app built as part of team coding challenges",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
    "tags": ["flutter", "nodejs", "mongodb"]
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
          <br/><br/>
          <section class="tags">
            ${item.tags.map((tag) =>  "<span class='tag'>" + tag + " </span>").join('')}
          </section>
        </div>
      </a>
    </div>
  `;
})
