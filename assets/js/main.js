let yrs = document.querySelector('#yrs');
let this_year = new Date().getFullYear().toString();
let this_year_after_century = this_year.split('20')[1];
let yrs_exp = 0;
if(parseInt(this_year_after_century, 10) >= 30) yrs_exp = parseInt(this_year_after_century.split('')[1], 10) + 10;
else yrs_exp = parseInt(this_year_after_century.split('')[1], 10);
yrs.textContent = yrs_exp;

let projects_div = document.querySelector('#portfolio-items');
(function data() {
        
    let item;
    let projects = [
        {
            "title": "Car Booking API",
            "description": "Backend service for a car booking application written in python. Runs on postgres. Currently under development",
            "image": "blank"
        },
        // {
        //     "title": "Quick Credit",
        //     "description": "Mobile loan application built for the Andela bootcamp challenge, back in 2019",
        //     "image": "blank"
        // },
        // {
        //     "title": "Teamwork",
        //     "description": "Employee social site built for the BuildForSDG program by Andela and Google Africa",
        //     "image": "blank"
        // }
    ];

    if(projects.length === 0) return projects_div.innerHTML = `<div class = 'portfolio-item'><p>No projects available</p></div`

    for(let project = 0; project < projects.length; project++) {
        if(project === 4) {
            item = document.createElement('button');
            item.setAttribute('onclick', 'view_more()');
            item.setAttribute('class', 'primary-btn');
            item.textContent = 'More';
            let br = document.createElement('br');
            projects_div.append(br, item);
            break
        };
        item = document.createElement('div');
        item.setAttribute('class', 'portfolio-item');
        if(projects[project].image === 'blank') item.style.backgroundColor = 'rgb(0, 0, 0)';
        item.innerHTML += `<p class = 'item-title'>${projects[project].title}</p><br/><p class = 'item-description'>${projects[project].description}</p>`;
        projects_div.append(item);
    }
})()