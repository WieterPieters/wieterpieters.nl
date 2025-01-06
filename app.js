// app.js

// Controleer of een gebruiker is ingelogd
function checkLogin() {
    const user = localStorage.getItem("user");
    if (!user) {
        alert("Je moet inloggen om deze pagina te bekijken.");
        window.location.href = "login.html";
    }
}

// Inloggen
function login(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username && password) {
        localStorage.setItem("user", JSON.stringify({ username, password }));
        alert("Inloggen succesvol!");
        window.location.href = "home.html";
    } else {
        alert("Vul alle velden in.");
    }
}

// Kanaal aanmaken
function createChannel(event) {
    event.preventDefault();
    const channelName = document.querySelector("#channelName").value;
    const channels = JSON.parse(localStorage.getItem("channels")) || [];

    if (channelName && !channels.includes(channelName)) {
        channels.push(channelName);
        localStorage.setItem("channels", JSON.stringify(channels));
        alert(`Kanaal '${channelName}' aangemaakt!`);
    } else {
        alert("Kanaalnaam is ongeldig of bestaat al.");
    }
}

// Posts ophalen
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postsContainer = document.querySelector("#posts");

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Kanaal:</strong> ${post.channel}</p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Nieuwe post aanmaken
function createPost(event) {
    event.preventDefault();
    const channel = document.querySelector("#postChannel").value;
    const title = document.querySelector("#postTitle").value;
    const content = document.querySelector("#postContent").value;
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (channel && title && content) {
        posts.push({ channel, title, content });
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("Post geplaatst!");
    } else {
        alert("Vul alle velden in.");
    }
}
