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
    current.textContent = this_year;
    loading.classList.add('c');
    let loading_text = 'Loading..';
    loading.textContent = loading_text;
    let i = 0, j = 0, d = 0, response = false, c = 0, k = 0, done = false;
    let remote = ((url, counter) => {
        // if(counter === 1) return response = false;
        fetch(url).then((data) => {
            return response =  true;
        }).catch((error) => {
            if(error.message === 'Failed to fetch') {
                return response = false;
                // return response = true;
            };
        });
        return;
    });
    function load_data(self_count) {
        if(self_count === 1) {
            console.log('loading info...');
            document.querySelector('#mid').classList.remove('vh');
            document.querySelector('#mid').style.display = 'block';
        }
        if(self_count === 2) {
            console.log('loading gallery...');
            document.querySelector('#mid-next').classList.remove('vh');
            document.querySelector('#mid-next').style.display = 'block';
        }
        if(self_count === 3) {
            console.log('loading projects...');
            document.querySelector('#mid-next-after').classList.remove('vh');
            document.querySelector('#mid-next-after').style.display = 'block';
        }
        if(self_count === 4) {
            console.log('loading contacts...\n\n');
            document.querySelector('#bottom').classList.remove('vh');
            document.querySelector('#bottom').style.display = 'block';
            document.querySelector('#reload-btn').style.display = 'block';
            console.log('all done');
            clearInterval(j);
            if(document.querySelector('#e')) document.querySelector('#e').remove();
            done = true;
        }
        return true;
    }
    let int = () => {
        remote('https://jsonplaceholder.typicode.com');
        loading_text = 'Loading..';
        j = setInterval(() => {
            i ++;
            loading.textContent = loading_text += '.'
            if(i % 3 === 0) {
                if(!response) {
                    loading.innerHTML = `Connection error, check your internet<br/><button class = 'primary-btn' id = 'reload'>Retry</button`;
                    document.querySelector('#reload').addEventListener('click', () => {
                        i = 0;
                        int();
                    });
                    clearInterval(j);
                    return console.log('connection error');;
                }
                else {
                    loading.style.display = 'none';
                    console.log('loading intro....');
                    container.style.display = 'block';
                    document.querySelector('#top').style.display = 'block';
                    console.log('intro loaded\n\n');
                    let error_message = `
                        <div id = 'e' class = 'c_'><br/><br/><br/>
                        <p>Fetching content....</p><br/><br/>
                        </div>
                    `;
                    if(document.querySelector('#e')) {}
                    else document.body.innerHTML += error_message;
                    d = setInterval(() => {
                        c ++;
                        try {
                            if(!done) {
                                remote('https://jsonplaceholder.typicode.com', c);
                                if(!response) throw new Error('....oops, something happened');
                                load_data(c);
                            }
                            else {
                                c = 0;
                                clearInterval(d);
                                clearInterval(j);
                            }
                        }
                        catch(e) {
                            console.log('interrupted at count', c, '\n\n');
                            // console.log(e);
                            let error_message = `
                                <div id = 'e' class = 'c_'><br/><br/>
                                <p>could not load data....</p><br/>
                                <button class = 'primary-btn' id = 'retry'>Retry</button>
                                </div>
                            `;
                            if(document.querySelector('#e')) {
                                if(document.querySelector('#e').getElementsByTagName('p')[0].textContent.includes('Fetching content')) {
                                    document.querySelector('#e').remove();
                                    document.body.innerHTML += error_message;
                                }
                            }
                            else document.body.innerHTML += error_message;
                            document.querySelector('#retry').addEventListener('click', () => {
                                console.log('recovering from error at count', c, '\n\n');
                                error_message = `
                                    <div id = 'e' class = 'c_'><br/><br/><br/>
                                    <p>Retrying to fetch....</p><br/><br/>
                                    </div>
                                `;
                                document.querySelector('#e').remove();
                                document.body.innerHTML += error_message;
                                k = setInterval(() => {
                                    load_data(c);
                                    c ++;
                                }, 1500);
                            });
                            clearInterval(d);
                        }
                        clearInterval(j);
                        clearInterval(k);
                    }, 1500);
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
    let top = document.querySelector('#top');
    let mid = document.querySelector('#mid');
    let mid_next_after = document.querySelector('#mid-next-after');
    let bottom = document.querySelector('#bottom');
})();

function reload() {
    return window.location.reload();
}
function toggle_top() {
    if(document.querySelector('#top').style.display === 'block') {
        document.querySelector('#top-msg').textContent = 'Expand top section';
        document.querySelector('#top-msg').style.display = 'block';
        document.querySelector('#top-msg').style.height = '60px';
        document.querySelector('#top-msg').style.borderBottom = '1px solid gray';
        document.querySelector('#top').style.display = 'none';
        document.querySelector('#mid').style.marginTop = '30px';
     } else {
        document.querySelector('#top-msg').textContent = 'Collapse';
        document.querySelector('#top-msg').style.display = 'none';
        document.querySelector('#top').style.display = 'block';
        document.querySelector('#mid').style.marginTop = '0';
     }
}
function toggle_mid() {
    if(document.querySelector('#mid').style.display === 'block') {
        document.querySelector('#mid-msg').textContent = 'Expand info section';
        document.querySelector('#mid-msg').style.display = 'block';
        document.querySelector('#mid-msg').style.height = '60px';
        document.querySelector('#mid-msg').style.borderBottom = '1px solid gray';
        document.querySelector('#mid').style.display = 'none';
        document.querySelector('#mid-next').style.marginTop = '60px';
     } else {
        document.querySelector('#mid-msg').textContent = 'Collapse';
        document.querySelector('#mid-msg').style.display = 'none';
        document.querySelector('#mid').style.display = 'block';
        document.querySelector('#mid-next').style.marginTop = '0';
     }
}
function toggle_mid_next() {    
    if(document.querySelector('#mid-next').style.display === 'block') {
        document.querySelector('#mid-next-msg').textContent = 'Expand gallery section';
        document.querySelector('#mid-next-msg').style.display = 'block';
        document.querySelector('#mid-next-msg').style.height = '60px';
        document.querySelector('#mid-next-msg').style.borderBottom = '1px solid gray';
        document.querySelector('#mid-next').style.display = 'none';
        document.querySelector('#mid-next-after').style.marginTop = '60px';
     } else {
        document.querySelector('#mid-next-msg').textContent = 'Collapse';
        document.querySelector('#mid-next-msg').style.display = 'none';
        document.querySelector('#mid-next').style.display = 'block';
        document.querySelector('#mid-next-after').style.marginTop = '0';
     }
}
function toggle_mid_next_after() {
    if(document.querySelector('#mid-next-after').style.display === 'block') {
        document.querySelector('#mid-next-after-msg').textContent = 'Expand projects section';
        document.querySelector('#mid-next-after-msg').style.display = 'block';
        document.querySelector('#mid-next-after-msg').style.height = '60px';
        document.querySelector('#mid-next-after-msg').style.borderBottom = '1px solid gray';
        document.querySelector('#mid-next-after').style.display = 'none';
        document.querySelector('#bottom').style.marginTop = '60px';
    } else {
        document.querySelector('#mid-next-after-msg').textContent = 'Collapse';
        document.querySelector('#mid-next-after-msg').style.display = 'none';
        document.querySelector('#mid-next-after').style.display = 'block';
        document.querySelector('#bottom').style.marginTop = '0';
    }
}
function toggle_bottom() {
    let new_sector = document.createElement('div');
    new_sector.setAttribute('id', 'placeholder');
    new_sector.style.height = '100px';
    if(document.querySelector('#bottom').style.display === 'block') {
        document.querySelector('#bottom-msg').textContent = 'Expand contacts section';
        document.querySelector('#bottom-msg').style.display = 'block';
        document.querySelector('#bottom-msg').style.height = '60px';
        document.querySelector('#bottom-msg').style.borderBottom = '1px solid gray';
        document.querySelector('#bottom').style.display = 'none';
        document.body.append(new_sector);
     } else {
        document.querySelector('#bottom-msg').textContent = 'Collapse';
        document.querySelector('#bottom-msg').style.display = 'none';
        bottom.style.display = 'block';
        new_sector = document.querySelector('#placeholder');
        new_sector.remove(new_sector);
     }
}