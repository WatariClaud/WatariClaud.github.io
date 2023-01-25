(function data() {
    console.log('establishing connection....\n\n');
    let yrs = document.querySelector('#yrs');
    let this_year = new Date().getFullYear().toString();
    let this_year_after_century = this_year.split('20')[1];
    let yrs_exp = 0;
    if(parseInt(this_year_after_century, 10) >= 30) yrs_exp = parseInt(this_year_after_century.split('')[1], 10) + 10;
    else yrs_exp = parseInt(this_year_after_century.split('')[1], 10);
    yrs.textContent = yrs_exp;
    let projects_div = document.querySelector('#portfolio-items');
    let loading = document.querySelector('#loading');
    let container = document.querySelector('#container');
    let current = document.querySelector('#current');
    let collapse_top = document.querySelector('#collapse-top');
    let collapse_mid = document.querySelector('#collapse-mid');
    let collapse_mid_next = document.querySelector('#collapse-mid-next');
    let collapse_mid_next_after = document.querySelector('#collapse-mid-next-after');
    let collapse_bottom = document.querySelector('#collapse-bottom');
    current.textContent = this_year;
    let top = document.querySelector('#top');
    let mid = document.querySelector('#mid');
    let mid_next = document.querySelector('#mid-next');
    let mid_next_after = document.querySelector('#mid-next-after');
    let bottom = document.querySelector('#bottom');
    let reload_btn = document.querySelector('#reload-btn');
    loading.classList.add('c');
    let loading_text = 'Loading';
    loading.textContent = loading_text;
    let i = 0, j = 0;
    let response = false;
    let remote = ((url) => {
        fetch(url).then((data) => {
            return response =  true;
        }).catch((error) => {
            if(error.message === 'Failed to fetch') {
                // return response = false;
                return response = true;
            };
        });
        return;
    });
    let int = () => {
        remote('https://github.com');
        loading_text = 'Loading';
        return j = setInterval(() => {
            i ++;
            loading.textContent = loading_text += '.'
            if(i % 3 === 0) {
                if(!response) {
                    loading.style.fontSize = '2rem';
                    loading.innerHTML = `Connection error, check your internet<br/><button class = 'primary-btn' id = 'reload'>Retry</button`;
                    console.log('connection error');
                    document.querySelector('#reload').addEventListener('click', () => {
                        window.location.reload();
                    });
                    clearTimeout(j);
                    return console.log('failed from here...');
                }
                else {
                    loading.style.display = 'none';
                    console.log('loading intro....');
                    container.style.display = 'block';
                    top.style.display = 'block';
                    console.log('intro loaded\n\n')
                    let c = 0;
                    let d = setInterval(() => {
                        c ++;
                        try {
                            if(c === 1) {
                                console.log('loading info...')
                                mid.style.display = 'block';
                                reload_btn.style.display = 'block';
                            }
                            if(c === 2) {
                                console.log('loading gallery...')
                                mid_next.style.display = 'block';
                            }
                            if(c === 3) {
                                console.log('loading projects...')
                                mid_next_after.style.display = 'block';
                            }
                            if(c === 4) {
                                console.log('loading contacts...\n\n')
                                bottom.style.display = 'block';
                                console.log('all done')
                                clearTimeout(d)
                            }
                        }
                        catch(e) {
                            console.log('interrupted....');
                            let error_message = `
                                <br/><br/>
                                <div class = 'c_'>
                                <p>could not load data....</p><br/>
                                <button class = 'primary-btn' id = 'reload'>Retry</button>
                                </div>
                            `;
                            document.body.innerHTML += error_message;
                            document.querySelector('#reload').addEventListener('click', () => {
                                window.location.reload();
                            });
                            clearTimeout(d);
                        }
                    }, 1000);
                    clearTimeout(j);
                }
            }
        }, 1000);
    };
    int();
    let item;
    let projects = [
        {
            "title": "Car Booking API",
            "description": "Backend service for a car booking application written in python. Runs on postgres. Currently under development",
            "image": "blank"
        },
        {
            "title": "Quick Credit",
            "description": "Mobile loan application built for the Andela bootcamp challenge, back in 2019",
            "image": "blank"
        },
        {
            "title": "Teamwork",
            "description": "Employee social site built for the BuildForSDG program by Andela and Google Africa",
            "image": "blank"
        },
    ];
    if(projects.length === 0) return projects_div.innerHTML = `<div class = 'portfolio-item'><p>No projects available</p></div`;
    for(let project = 0; project < projects.length; project++) {
        if(project === 3) {
            item = document.createElement('button');
            item.setAttribute('onclick', 'view_more()');
            item.setAttribute('class', 'primary-btn');
            item.textContent = 'More';
            let br = document.createElement('br');
            projects_div.append(br, item);
            mid_next_after.style.height = mid_next_after.style.height.split('vh')[0] + '60px';
            break
        };
        item = document.createElement('div');
        item.setAttribute('class', 'portfolio-item');
        if(projects[project].image === 'blank') item.style.backgroundColor = 'rgb(0, 0, 0)';
        item.innerHTML += `<p class = 'item-title'>${projects[project].title}</p><br/><p class = 'item-description'>${projects[project].description}</p>`;
        projects_div.append(item);
    }
    reload_btn.addEventListener('click', () => {
        window.location.reload();
    });
    collapse_top.addEventListener('click', () => {
        if(top.style.display === 'block') {
            document.querySelector('#top-msg').textContent = 'Expand top section';
            document.querySelector('#top-msg').style.display = 'block';
            document.querySelector('#top-msg').style.height = '60px';
            document.querySelector('#top-msg').style.borderBottom = '1px solid gray';
            top.style.display = 'none';
            mid.style.marginTop = '60px';
         } else {
            document.querySelector('#top-msg').textContent = 'Collapse';
            document.querySelector('#top-msg').style.display = 'none';
            top.style.display = 'block';
            mid.style.marginTop = '0';
         }
    });
    collapse_mid.addEventListener('click', () => {
        if(mid.style.display === 'block') {
            document.querySelector('#mid-msg').textContent = 'Expand info section';
            document.querySelector('#mid-msg').style.display = 'block';
            document.querySelector('#mid-msg').style.height = '60px';
            document.querySelector('#mid-msg').style.borderBottom = '1px solid gray';
            mid.style.display = 'none';
            mid_next.style.marginTop = '60px';
         } else {
            document.querySelector('#mid-msg').textContent = 'Collapse';
            document.querySelector('#mid-msg').style.display = 'none';
            mid.style.display = 'block';
            mid_next.style.marginTop = '0';
         }
    });
    collapse_mid_next.addEventListener('click', () => {
        if(mid_next.style.display === 'block') {
            document.querySelector('#mid-next-msg').textContent = 'Expand gallery section';
            document.querySelector('#mid-next-msg').style.display = 'block';
            document.querySelector('#mid-next-msg').style.height = '60px';
            document.querySelector('#mid-next-msg').style.borderBottom = '1px solid gray';
            mid_next.style.display = 'none';
            mid_next_after.style.marginTop = '60px';
         } else {
            document.querySelector('#mid-next-msg').textContent = 'Collapse';
            document.querySelector('#mid-next-msg').style.display = 'none';
            mid_next.style.display = 'block';
            mid_next_after.style.marginTop = '0';
         }
    });
    collapse_mid_next_after.addEventListener('click', () => {
        if(mid_next_after.style.display === 'block') {
            document.querySelector('#mid-next-after-msg').textContent = 'Expand projects section';
            document.querySelector('#mid-next-after-msg').style.display = 'block';
            document.querySelector('#mid-next-after-msg').style.height = '60px';
            document.querySelector('#mid-next-after-msg').style.borderBottom = '1px solid gray';
            mid_next_after.style.display = 'none';
            bottom.style.marginTop = '60px';
         } else {
            document.querySelector('#mid-next-after-msg').textContent = 'Collapse';
            document.querySelector('#mid-next-after-msg').style.display = 'none';
            mid_next_after.style.display = 'block';
            bottom.style.marginTop = '0';
         }
    });
    collapse_bottom.addEventListener('click', () => {
        let new_sector = document.createElement('div');
        new_sector.setAttribute('id', 'placeholder');
        new_sector.style.height = '100px';
        if(bottom.style.display === 'block') {
            document.querySelector('#bottom-msg').textContent = 'Expand contacts section';
            document.querySelector('#bottom-msg').style.display = 'block';
            document.querySelector('#bottom-msg').style.height = '60px';
            document.querySelector('#bottom-msg').style.borderBottom = '1px solid gray';
            bottom.style.display = 'none';
            document.body.append(new_sector);
         } else {
            document.querySelector('#bottom-msg').textContent = 'Collapse';
            document.querySelector('#bottom-msg').style.display = 'none';
            bottom.style.display = 'block';
            new_sector = document.querySelector('#placeholder');
            new_sector.remove(new_sector);
         }
    });
})()