
// this is the initial state Object
let store = {
    user: { name: "William" },
    apod: '',
    rovers: ['curiosity', 'opportunity', 'spirit'],
}

// Rovers Object that will hold the info retrieved when the rover tabs are clicked
let rovers = {
    curiosity: [],
    opportunity: [],
    spirit: [],
}

// add our markup to the page
const root = document.getElementById('root')

// listener function for load event
window.addEventListener('load', () => {
    getImageOfTheDay(store)
})

//update store function updates the store object, AND calls the render to redo the page info
const updateStore = (store, newState) => {
    store = Object.assign(store, newState);
    render(root, store);
}

//pure function per REQUIREMENTS
function updateRovers(rovers, response, rover) {
    rovers[rover] = response;
}

// create content for the initial page before a tab has been clicked
const App = (state) => {
    let { apod } = state;
    return `
        <main>
            <h3>Hi: ${(store.user.name)} </h3>
            <section>
                <h2>Image of the Day:</h2>
                    ${ImageOfTheDay(apod)}
            </section>
        </main>
    `
}

//creates the content to be repeated from fetch
function create_content_rover(curr_rover) {

    return `
            <div>
                <h3>Rover: ${curr_rover.rover.name}</h3>
                <p>Launch Date: ${curr_rover.rover.launch_date} - Landing Date: ${curr_rover.rover.landing_date}</p>
                <p>STATUS: ${curr_rover.rover.status}</p>
                <p>Photo Date: ${curr_rover.earth_date}</p>
                <img src="${curr_rover.img_src}" height="325px" width="100%" />
            </div>   `
}


const render = (root, state) => {
    root.innerHTML = App(state);

}

const renderRover = async (root, rover_name) => {
    root.innerHTML = await AppRover(rover_name)
}


const AppRover = async (rover_name) => {

    let curr_rover = rovers[rover_name]

    if (curr_rover.length == 0) {
        await getImageOfRover(rover_name)
        curr_rover = rovers[rover_name];
    } else {
        curr_rover = rovers[rover_name];
    }
    // MAP function per requirements
    return curr_rover.map(pic => create_content_rover(pic)).join(' ');
}


// ------------------------------------------------------  COMPONENTS

//Immutable mapped Object per requirements
const greeting = Immutable.Map({
    name: 'William Sisson'
})

// HOF function that renders conditional information
const Greeting = (name) => {
    if (name) {
        return `
            <h1>Welcome, ${name}!</h1>
        `
    } else {
        return `
        <h1>No name in object</h1>
            `
    }
}
// Example of a pure HOF function that renders infomation requested from the Nasa API
const ImageOfTheDay = (apod) => {
    // check if the photo of the day is a video
    if (apod.media_type === "video") {
        return `
            <p>See today's video <a href="${apod.url}">here</a></p>
            <p>${apod.title}</p>
            <p>${apod.explanation}</p>
        `
    }
    return `
            <img src="${apod.image.url}" height="350px" width="100%" />
            <p>${apod.image.explanation}</p>
        `
}


// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    let { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

    return apod
}

const getImageOfRover = async (rover_name) => {

    await fetch(`http://localhost:3000/rover/${rover_name}`)
        .then(res => res.json())
        .then(response => {
            updateRovers(rovers, Immutable.List(response.image.latest_photos), rover_name)
        })

    return rover_name
}

document.getElementById("curiosity-link").addEventListener("click", function (event) {
    renderRover(root, "curiosity")
    event.preventDefault();
})

document.getElementById("opportunity-link").addEventListener("click", function (event) {
    renderRover(root, "opportunity")
    event.preventDefault();
})

document.getElementById("spirit-link").addEventListener("click", function (event) {
    renderRover(root, "spirit")
    event.preventDefault();
})