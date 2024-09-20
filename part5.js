const projects = [
    {
        title: "MAPPORAMMA",
        description: "A mapping system with an intuitive UI",
        imgSrc: "/assets/img/Google_maps.png",
        tools: "C++",
        accomplishments: [
            "Used C++ to develop an interactive, usable, and responsive GIS.",
            "Employed graphic design libraries and STL functions, as well as online databases (OSM, GTK) to add accurate routes and intuitive interface.",
            "Implemented pathfinding algorithms such as Dijkstra’s, A* and Greedy and hill-climbing algorithms like two-opt."
        ],
        link: "#",
        github: "#"
    },
    {
        title: "3072 Game",
        description: "A single-player sliding puzzle tile video game",
        imgSrc: "/assets/img/3072_game.png",
        tools: "HTML, CSS, JavaScript, ReactJS",
        accomplishments: [
            "Developed with React.js demonstrating use of functional components, hooks, props, and context.",
            "Integrated Firebase for hosting and real-time updates."
        ],
        link: "https://project-7931456944995520935.web.app/",
        github: "https://github.com/PranitiV/3072-game-2048-clone"
    },
    {
        title: "Wordle Solver",
        description: "A solution app for the popular game Wordle.",
        imgSrc: "/assets/img/wordle_logo.png",
        tools: "React Native",
        accomplishments: [
            "Created an exhaustive, comprehensive, parameterized Wordle-solver in React Native that takes in user input to suggest solutions.",
            "Built the UI from scratch, demonstrating optimum utilization of data flow in a React application."
        ],
        link: "#",
        github: "https://github.com/Tetnofa/WordleSolver"
    },
    {
        title: "HEYLLO",
        description: "A real-time chatting application",
        imgSrc: "/assets/img/heyllo_logo.png",
        tools: "React Native, AWS Authentication, JavaScript",
        accomplishments: [
            "Built the complete frontend of a chatting application in React Native that combines the ‘story’ feature from Instagram with the chatting features of WhatsApp.",
            "Created a GraphQL API and integrated AWS Authentication to register a user and create an account.",
            "Ongoing: troubleshooting the API querying and rendering of real-time data."
        ],
        githubLink: "https://github.com/PranitiV/HEYLLO",
    },
    {
        title: "Emotion Recognition",
        description: "An attention-based classification model that generates an answer for a given input image.",
        imgSrc: "/assets/img/cnn_logo.png",
        tools: "CNN, ANN, Python",
        accomplishments: [
            "Implemented deep learning techniques (CNN, ANN, SGD with momentum, batch-normalization) to build and train a model that recognizes emotions (happy, sad, neutral, fear, surprise, excitement) given an image of a person’s face.",
            "Used 4500+ images to train the model and collected 400+ new images as testing data.",
            "Fine-tuned hyperparameters to improve training accuracy from 64% to 92% and achieved testing accuracy of 80.5% on happy faces, 65% on neutral faces, and 51% on neutral faces."
        ],
        link: "#",
        github: "https://github.com/PranitiV/Emotion_Recognition_CNN"
    }
];


let currentIndex = 0;
const projectsPerPage = 3;

function displayProjects() {
    const projectContainer = document.getElementById('projects-container');

    for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projects.length; i++) {
        const project = projects[i];
        console.log("displayProjects called");

        const projectCard = `
        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img alt="${project.title}" src="${project.imgSrc}" style="height: 100%; width: 100%" class="activator" />
            </div>
            <div class="card-content">
              <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
              <p>${project.description}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
              <ul>
                <li><b>Tools:</b> ${project.tools}</li>
                ${project.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
              </ul>
            </div>
            <div class="card-action">
              <a href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
                <i class="fa fa-external-link"></i>
              </a>
              <a href="${project.github}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      `;

        projectContainer.innerHTML += projectCard;
    }

    currentIndex += projectsPerPage;
    if (currentIndex < projects.length) {
        document.getElementById('load-more').style.display = 'block';
    } else {
        document.getElementById('load-more').style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    displayProjects();
    document.getElementById('load-more').addEventListener('click', displayProjects);
});

