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
    "description": "A chatbot built on OpenAI GPT4 model as part of team coding challenges",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/chatbot.png",
    "link": "https://smart-text-generator-production.up.railway.app/chat",
    "tags": ["nodejs", "handlebars.js", "openAI"]
  },
  {
    "title": "Notes App",
    "description": "A notes tracking native mobile app built as part of team coding challenges",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/notes.png",
    "link": "https://github.com/ClaudWatari95/notes_app",
    "tags": ["flutter", "nodejs", "mongodb"]
  },
  {
    "title": "JavaScript Calculator",
    "description": "A basic calculator app created for the Andela pre-bootcamp interview (2019)",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/calculator.png",
    "link": "https://watariclaud.info/JavaScript-Calculator/",
    "tags": ["es6", "javascript", "html/ css"]
  },
  {
    "title": "Weather App",
    "description": "A basic weather application created for the Facebook/Andela DevC project (2019)",
    "image": "https://raw.githubusercontent.com/ClaudWatari95/claudwatari95.github.io/main/assets/images/weather.png",
    "link": "https://weatherapp-byclaud-970ac.web.app/",
    "tags": ["javascript", "firebase", "openweathermap-api"]
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
          <p class="item-description">
            ${item.tags.map((tag) =>  "<span class='tag'>" + tag + " </span>").join('')}
          </p>
        </div>
      </a>
    </div>
  `;
})
