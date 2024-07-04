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
    cardImage: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
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

// Function to display professional project cards
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, gifUrl }) => {
    let cardImageUrl = `url(${gifUrl}) center / cover no-repeat`;

    if (window.innerWidth > 768) {
      cardImageUrl = `url(${cardImage}) center / cover no-repeat`;
    }

    output += `
      <div class="column skill-card card">
        <a href="${Previewlink}" target="_blank">
          <div class="wrapper lazy-div" style="background: ${cardImageUrl}" data-gif-url="${gifUrl}">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcards.innerHTML = output;

  const lazyLoadDivs = () => {
    const lazyDivs = document.querySelectorAll('.lazy-div');
    const divObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target;
          const gifUrl = div.dataset.gifUrl;
          div.style.backgroundImage = `url(${gifUrl})`;
          observer.unobserve(div);
        }
      });
    });

    lazyDivs.forEach((lazyDiv) => {
      divObserver.observe(lazyDiv);
    });
  };

  lazyLoadDivs();

  const wrappers = document.querySelectorAll('.wrapper');
  wrappers.forEach((wrapper) => {
    const bgImage = wrapper.style.backgroundImage;
    const cardImageUrl = bgImage.slice(5, -2);
    const gifUrl = wrapper.dataset.gifUrl;

    wrapper.addEventListener('mouseover', () => {
      wrapper.style.backgroundImage = `url(${gifUrl})`;
    });

    wrapper.addEventListener('mouseout', () => {
      wrapper.style.backgroundImage = `url(${cardImageUrl})`;
    });
  });
};

// Function to display personal project cards
const showCards1 = () => {
  let output = "";
  personal.forEach(({ title, cardImage, Previewlink, gifUrl }) => {
    let cardImageUrl = `url(${gifUrl}) center / cover no-repeat`;

    if (window.innerWidth > 768) {
      cardImageUrl = `url(${cardImage}) center / cover no-repeat`;
    }

    output += `
      <div class="column skill-card card">
        <a href="${Previewlink}" target="_blank">
          <div class="wrapper lazy-div" style="background: ${cardImageUrl}" data-gif-url="${gifUrl}">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcardspersonal.innerHTML = output;

  const lazyLoadDivs = () => {
    const lazyDivs = document.querySelectorAll('.lazy-div');
    const divObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target;
          const gifUrl = div.dataset.gifUrl;
          div.style.backgroundImage = `url(${gifUrl})`;
          observer.unobserve(div);
        }
      });
    });

    lazyDivs.forEach((lazyDiv) => {
      divObserver.observe(lazyDiv);
    });
  };

  lazyLoadDivs();

  const wrappers = document.querySelectorAll('.wrapper');
  wrappers.forEach((wrapper) => {
    const bgImage = wrapper.style.backgroundImage;
    const cardImageUrl = bgImage.slice(5, -2);
    const gifUrl = wrapper.dataset.gifUrl;

    wrapper.addEventListener('mouseover', () => {
      wrapper.style.backgroundImage = `url(${gifUrl})`;
    });

    wrapper.addEventListener('mouseout', () => {
      wrapper.style.backgroundImage = `url(${cardImageUrl})`;
    });
  });
};

// Call both functions to display the project cards
document.addEventListener('DOMContentLoaded', () => {
  showCards();
  showCards1();
});

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");


  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}

// /* Project Cards */

// const projectcards = document.querySelector(".projectcards");

// // Array of object for projects
// const projects = [
//   {
//     title: "C13Features A Podcast Movie Studio",
//     cardImage: "assets/images/project-page/static/features-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/features-gif.gif",
//     Previewlink: "https://c13features.com",

//   },
//   {
//     title: "Cadence 13 Podcast Showhub",
//     cardImage: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
//     Previewlink: "https://shows.cadence13.com",

//   },
//   {
//     title: "Cadence13.com",
//     cardImage: "assets/images/project-page/static/cadence-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/cadence-gif.gif",
//     Previewlink: "https://cadence13.com",

//   },
//   {
//     title: "Pineapple Street Studios",
//     cardImage: "assets/images/project-page/static/pineapple-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/pineapple-gif.gif",
//     Previewlink: "https://www.pineapple.fm",

//   },
//     {
//     title: "Photography Website",
//     cardImage: "assets/images/project-page/static/photography-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/photography-gif.gif",
//     Previewlink: "https://sad-neumann-cd33a2.netlify.app/gallery2",
   
//   },
//   {
//     title: "Music Website",
//     cardImage: "assets/images/project-page/static/music-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/music-gif.gif",
//     Previewlink: "https://stoic-colden-5af388.netlify.app",
    
//   },
//   {
//     title: "Sofia Franklyn",
//     cardImage: "assets/images/project-page/static/sofia-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/sofia-gif.gif",
//     Previewlink: "https://sofiafranklyn.com",

//   },
//    {
//     title: "Netflix Clone",
//     cardImage: "assets/images/project-page/static/netflix-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/netflix-gif.gif",
//     Previewlink: "https://netflix-clone-d4b36.web.app",

//   },

//   {
//     title: "Ramble",
//     cardImage: "assets/images/project-page/static/ramble-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/ramble-gif.gif",
//     Previewlink: "https://jovial-bohr-a0a648.netlify.app",

//   },
 
//   {
//     title: "Email Template",
//     cardImage: "assets/images/project-page/static/email-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/email-gif.gif",
//     Previewlink: "https://jamalrizki.github.io/email-template/",

//   },
//   {
//     title: "Fly On The Wall Podcast - Email Marketing",
//     cardImage: "assets/images/project-page/static/fly-on-the-wall-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/fly-on-the-wall-gif.gif",
//     Previewlink: "https://jamalrizki.github.io/fly-on-the-wall-email/",

//   },
//   {
//     title: "Cocktail App - React Native",
//     cardImage: "assets/images/project-page/static/cocktail-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/cocktail-gif.gif",
//     Previewlink: "https://youtu.be/kk5hkRLbeP4",

//   },
//   {
//     title: "Tesla Clone",
//     cardImage: "assets/images/project-page/static/tesla-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/tesla-gif.gif",
//     Previewlink: "https://tesla-clone-d09a2.web.app",

//   },
//   {
//     title: "Medium",
//     cardImage: "assets/images/project-page/static/medium-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/medium-gif.gif",
//     Previewlink: "https://fluffy-pasca-3faeee.netlify.app/post/my-first-post",

//   },
//   {
//     title: "Car Company Template",
//     cardImage: "assets/images/project-page/static/car-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/car-gif.gif",
//     Previewlink: "https://jamalrizki.github.io/car-website/",

//   },
//   {
//     title: "Showtime UI",
//     cardImage: "assets/images/project-page/static/showtime-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showtime-gif.gif",
//     Previewlink: "https://www.jrizki.com/projects.html",

//   },
//   {
//     title: "Apple Clone",
//     cardImage: "assets/images/project-page/static/apple-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/apple-gif.gif",
//     Previewlink: "https://jamalrizki.github.io/apple-clone",

//   },
//    {
//     title: "Player",
//     cardImage: "assets/images/project-page/static/player-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/player-gif.gif",
//     Previewlink: "https://shows.cadence13.com/player/the-sunshine-place",

//   },
//   {
//     title: "We Can Do Hard Things Podcast - Glennon Doyle",
//     cardImage: "assets/images/project-page/static/we-can-do-hard-things-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/we-can-do-hard-things-gif.gif",
//     Previewlink: "http://wecandohardthingspodcast.com",
 
//   },
//   {
//     title: "D3 Emissions",
//     cardImage: "assets/images/project-page/static/d3-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/d3-gif.gif",
//     Previewlink: "https://jamalrizki.github.io/d3-emissions/",

//   },
//   {
//     title: "Expense Tracker",
//     cardImage: "assets/images/project-page/static/expense-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/expense-gif.gif",
//     Previewlink: "https://expense-tracking.netlify.app",

//   },
//   {
//     title: "Airbnb clone",
//     cardImage: "assets/images/project-page/static/airbnb-static.jpg",
//     gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/airbnb-gif.gif",
//     Previewlink: "https://air-bb-clone.web.app",

//   },
// ];


// // const showCards = () => {
// //   let output = "";
// //   projects.forEach(
// //     ({ title, cardImage, tags, Previewlink, Githublink, gifUrl }) => {
// //       let cardImageUrl = `url(${cardImage}) center / cover no-repeat`;
// //       if (gifUrl && window.innerWidth > 768) {
// //         cardImageUrl = `url(${cardImage}) center / cover no-repeat`;
// //       } else if (gifUrl) {
// //         cardImageUrl = `url(${gifUrl}) center / cover no-repeat`;
// //       }

// //       output += `
// //       <div class="column skill-card card">
// //         <a href="${Previewlink}" target="_blank">
// //           <div class="wrapper lazy-div'" style="background: ${cardImageUrl}" data-gif-url="${gifUrl}">
// //             <div class="header">
// //             </div>
// //           </div>
// //         </a>
// //       </div>`;
// //     }
// //   );

// //   projectcards.innerHTML = output;

// //   const wrappers = document.querySelectorAll(".wrapper");
// //   wrappers.forEach((wrapper) => {
// //     const bgImage = wrapper.style.backgroundImage;
// //     const cardImageUrl = bgImage.slice(5, -2);
// //     const gifUrl = wrapper.dataset.gifUrl;

// //     wrapper.addEventListener("mouseover", () => {
// //       wrapper.style.backgroundImage = `url(${gifUrl})`;
// //     });

// //     wrapper.addEventListener("mouseout", () => {
// //       wrapper.style.backgroundImage = `url(${cardImageUrl})`;
// //     });
// //   });
// // };

// // document.addEventListener("DOMContentLoaded", showCards);

// // function myFunction() {
// //   // Declare variables
// //   var input, button, i, skillcard, card, title;
// //   input = document.getElementById("myInput").value;
// //   input = input.toUpperCase();
// //   skillcard = document.getElementsByClassName("skill-card");
// //   card = document.getElementsByClassName("card");
// //   title = document.getElementsByClassName("title");

// //   // Loop through all list items, and hide those who don't match the search query
// //   for (i = 0; i < button.length; i++) {
// //     if (
// //       button[i].innerHTML.toUpperCase().includes(input) ||
// //       title[i].innerHTML.toUpperCase().includes(input)
// //     ) {
// //       skillcard[i].style.display = "";
// //       card[i].style.display = "";
// //     } else {
// //       skillcard[i].style.display = "none";
// //       card[i].style.display = "none";
// //     }
// //   }
// // }

// //// with lazy loading



// const showCards = () => {
//   let output = "z";
//   projects.forEach(({ title, cardImage, tags, Previewlink, Githublink, gifUrl }) => {
//     let cardImageUrl = `url(${gifUrl}) center / cover no-repeat`;

//     if (window.innerWidth > 768) {
//       cardImageUrl = `url(${cardImage}) center / cover no-repeat`;
//     }

//     output += `
//       <div class="column skill-card card">
//         <a href="${Previewlink}" target="_blank">
//           <div class="wrapper lazy-div" style="background: ${cardImageUrl}" data-gif-url="${gifUrl}">
//             <div class="header"></div>
//           </div>
//         </a>
//       </div>`;
//   });

//   projectcards.innerHTML = output;

//   const lazyLoadDivs = () => {
//     const lazyDivs = document.querySelectorAll('.lazy-div');
//     const divObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const div = entry.target;
//           const gifUrl = div.dataset.gifUrl;
//           div.style.backgroundImage = `url(${gifUrl})`;
//           observer.unobserve(div);
//         }
//       });
//     });

//     lazyDivs.forEach((lazyDiv) => {
//       divObserver.observe(lazyDiv);
//     });
//   };

//   document.addEventListener('DOMContentLoaded', lazyLoadDivs);

//   const wrappers = document.querySelectorAll('.wrapper');
//   wrappers.forEach((wrapper) => {
//     const bgImage = wrapper.style.backgroundImage;
//     const cardImageUrl = bgImage.slice(5, -2);
//     const gifUrl = wrapper.dataset.gifUrl;

//     wrapper.addEventListener('mouseover', () => {
//       wrapper.style.backgroundImage = `url(${gifUrl})`;
//     });

//     wrapper.addEventListener('mouseout', () => {
//       wrapper.style.backgroundImage = `url(${cardImageUrl})`;
//     });
//   });
// };

// document.addEventListener('DOMContentLoaded', showCards);

// function myFunction() {
//   // Declare variables
//   var input, button, i, skillcard, card, title;
//   input = document.getElementById("myInput").value;
//   input = input.toUpperCase();
//   skillcard = document.getElementsByClassName("skill-card");
//   card = document.getElementsByClassName("card");
//   title = document.getElementsByClassName("title");

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < button.length; i++) {
//     if (
//       button[i].innerHTML.toUpperCase().includes(input) ||
//       title[i].innerHTML.toUpperCase().includes(input)
//     ) {
//       skillcard[i].style.display = "";
//       card[i].style.display = "";
//     } else {
//       skillcard[i].style.display = "none";
//       card[i].style.display = "none";
//     }
//   }
// }
