const projectcards = document.querySelector(".projectcards");
const projectcardspersonal = document.querySelector(".projectcardspersonal");

// Array of objects for professional projects
const projects = [
  {
    title: "C13Features A Podcast Movie Studio",
    cardImage: "assets/images/project-page/static/features-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/features-gif.gif",
    Previewlink: "https://c13features.com",
  },
  {
    title: "Cadence 13 Podcast Showhub",
    cardImage: "assets/images/project-page/static/showhub-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
    Previewlink: "https://shows.cadence13.com",
  },
  {
    title: "Cadence13.com",
    cardImage: "assets/images/project-page/static/cadence-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/cadence-gif.gif",
    Previewlink: "https://cadence13.com",
  },
  {
    title: "Pineapple Street Studios",
    cardImage: "assets/images/project-page/static/pineapple-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/pineapple-gif.gif",
    Previewlink: "https://www.pineapple.fm",
  },
  {
    title: "Sofia Franklyn",
    cardImage: "assets/images/project-page/static/sofia-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/sofia-gif.gif",
    Previewlink: "https://sofiafranklyn.com",
  },
  {
    title: "Ramble",
    cardImage: "assets/images/project-page/static/ramble-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/ramble-gif.gif",
    Previewlink: "https://jovial-bohr-a0a648.netlify.app",
  },
  {
    title: "Email Template",
    cardImage: "assets/images/project-page/static/email-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/email-gif.gif",
    Previewlink: "https://jamalrizki.github.io/email-template/",
  },
  {
    title: "Fly On The Wall Podcast - Email Marketing",
    cardImage: "assets/images/project-page/static/fly-on-the-wall-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/fly-on-the-wall-gif.gif",
    Previewlink: "https://jamalrizki.github.io/fly-on-the-wall-email/",
  },
  {
    title: "Showtime UI",
    cardImage: "assets/images/project-page/static/showtime-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showtime-gif.gif",
    Previewlink: "https://www.jrizki.com/projects.html",
  },
  {
    title: "Player",
    cardImage: "assets/images/project-page/static/player-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/player-gif.gif",
    Previewlink: "https://shows.cadence13.com/player/the-sunshine-place",
  },
  {
    title: "We Can Do Hard Things Podcast - Glennon Doyle",
    cardImage: "assets/images/project-page/static/we-can-do-hard-things-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/we-can-do-hard-things-gif.gif",
    Previewlink: "http://wecandohardthingspodcast.com",
  },
];

// Array of objects for personal projects
const personal = [
  {
    title: "Photography Website",
    cardImage: "assets/images/project-page/static/photography-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/photography-gif.gif",
    Previewlink: "https://sad-neumann-cd33a2.netlify.app/gallery2",
  },
  {
    title: "Music Website",
    cardImage: "assets/images/project-page/static/music-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/music-gif.gif",
    Previewlink: "https://stoic-colden-5af388.netlify.app",
  },
  {
    title: "Netflix Clone",
    cardImage: "assets/images/project-page/static/netflix-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/netflix-gif.gif",
    Previewlink: "https://netflix-clone-d4b36.web.app",
  },
  {
    title: "Apple Clone",
    cardImage: "assets/images/project-page/static/apple-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/apple-gif.gif",
    Previewlink: "https://jamalrizki.github.io/apple-clone",
  },
  {
    title: "Cocktail App - React Native",
    cardImage: "assets/images/project-page/static/cocktail-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/cocktail-gif.gif",
    Previewlink: "https://youtu.be/kk5hkRLbeP4",
  },
  {
    title: "Tesla Clone",
    cardImage: "assets/images/project-page/static/tesla-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/tesla-gif.gif",
    Previewlink: "https://tesla-clone-d09a2.web.app",
  },
  {
    title: "Medium",
    cardImage: "assets/images/project-page/static/medium-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/medium-gif.gif",
    Previewlink: "https://fluffy-pasca-3faeee.netlify.app/post/my-first-post",
  },
  {
    title: "Car Company Template",
    cardImage: "assets/images/project-page/static/car-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/car-gif.gif",
    Previewlink: "https://jamalrizki.github.io/car-website/",
  },
  {
    title: "D3 Emissions",
    cardImage: "assets/images/project-page/static/d3-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/d3-gif.gif",
    Previewlink: "https://jamalrizki.github.io/d3-emissions/",
  },
  {
    title: "Expense Tracker",
    cardImage: "assets/images/project-page/static/expense-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/expense-gif.gif",
    Previewlink: "https://expense-tracking.netlify.app",
  },
  {
    title: "Airbnb clone",
    cardImage: "assets/images/project-page/static/airbnb-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/airbnb-gif.gif",
    Previewlink: "https://air-bb-clone.web.app",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, gifUrl }) => {
    output += `
      <div class="column skill-card card">
        <a href="${gifUrl}" target="_blank" rel="noopener noreferrer">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcards.innerHTML = output;
};


const showCards1 = () => {
  let output = "";
  personal.forEach(({ title, cardImage, gifUrl }) => {
    output += `
      <div class="column skill-card card">
        <a href="${gifUrl}" target="_blank" rel="noopener noreferrer">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcardspersonal.innerHTML = output;
};

// Call both functions to display the project cards
document.addEventListener('DOMContentLoaded', () => {
  showCards();
  showCards1();
});


