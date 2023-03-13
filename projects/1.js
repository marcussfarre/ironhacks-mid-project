let project;

window.addEventListener("load", (event) => {
    manageInformation();
  });


async function loadApiInfo() {
    return fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Parsed response: ", data);
        return data;
    })
    .catch((err) => console.log(err));
}

async function manageInformation() {
    let response = await loadApiInfo();
    console.log(response);
    let id = getUrlId();

    if (id && response) {
        response.forEach(r => {
            if (r.uuid === id) {
                project = r;
            }
        });
    } else {
        response = 'No response';
    }

    if (project) {
        createChild(project.completed_on, 'completedOn', 'p');
        createChild(project.name, 'name', 'h1');
        createChild(project.description, 'description', 'h4');
        createChild(project.content, 'content', 'p');
        document.getElementById("projectImage").src = project.image;
    } 

    console.log(project);
}

function getUrlId() {
    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    return id ?? null;
}

function createChild(data, divName, typeElement) {
    const elementChild = document.createElement(typeElement);
    const node = document.createTextNode(data);
    elementChild.appendChild(node);
    const element = document.getElementById(divName);
    element.appendChild(elementChild);
}