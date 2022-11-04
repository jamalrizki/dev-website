//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/c13.jpg",
    place: "Cadence 13",
    time: "(June, 2021 - present)",
    desp: "<li><a class='link-text' href='https://c13features.com' target='_blank'>c13features.com</a> - Designed wireframes for this highly visible, podcast movie concept site with HTML, CSS, and JavaScript.</li> <li><a class='link-text' href='https://shows.cadence13.com' target='_blank'>shows.cadence13.com</a> - Created and updated micro-sites hosting podcasts with Python/React and Jenkins/Docker Pipeline.</li> <li><a class='link-text' href='https://cadence13.com' target='_blank'>cadence13.com </a> - Updated, maintained, and improved the company’s website, including all site content with WordPress.</li><li><a class='link-text' href='https://www.rambleofficial.com' target='_blank'>rambleofficial.com</a> - Project Lead over the establishment of a dedicated influencer website with HTML, CSS, and JavaScript.</li><li><a class='link-text' href='http://wecandohardthingspodcast.com' target='_blank'>wecandohardthingspodcast.com</a> - Leveraged a Cornerstone Theme in a WordPress environment to maintain the site.</li><li><a class='link-text' href='https://sofiafranklyn.com' target='_blank'>Sofiafranklyn.com </a> - Performed basic CSS maintenance and updates on the client’s Shopify store.</li>",
  },
  {
    title: "Associate Instructor",
    cardImage: "assets/images/experience-page/thrive.jpg",
    place: "Thrive DX",
    time: "(May, 2022 - present)",
    desp: "<b>Multiple Locations (NYU, University at Buffalo, North Carolina State University, NJIT, and Old Dominion University)</b><li>Facilitate co-teaching programs as part of a software development bootcamp for American universities.</li><li>Serve as a subject matter expert for website development tools and technologies as well as Agile methodologies/frameworks.</li><li>Promote a professional learning culture grounded in adult learning theory and cutting-edge web development instruction.</li><li>Assist the Lead Instructor with managing classroom learning and the creation of teaching materials.</li><li>Provide instruction, guidance, and advisement to students on the JavaScript Milestone project and CSS Frameworks modules.</li><li>Create and deliver student assessments, testing, and analysis of progress performance.</li>",
  },
  {
    title: "Musician",
    cardImage: "assets/images/experience-page/gat3.jpg",
    place: "Worldwide",
    time: "(2007 - 2020)",
    desp:"<li>Musician (Guitarist) | Multiple Cruise Lines, International Hotels (Dubai & Abu Dhabi), & Private Clients | 15+ Years</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

// Programs
var gage = {
  init: function(){
      // restart used for demo purposes - change to $('.gage').each(function(i){
    $('.chart span').css({"width" : "0"}).parent().each(function(i){
      // Loop through .gage elements
      $('p', this).html($(this).attr("data-label"));
      // Set p html value to the data-label attr set in the element
      var timeout = parseInt(i) * 60 + 1100;
      // Set a timeout based on the iteration multiplied by 60 (will affect delay between animations) 
      $('span', this).delay(timeout).animate({"opacity" : "1"}, 0, function(){
        //Delay  
        $(this).css({"width" : $(this).parent().attr("data-level") + "%"});
      });
    });
  }
}

$(document).ready(function(){
  // Call gage init function
  gage.init();
  // Interval used for demo purposes - remove if using  
  setInterval(function() {
      gage.init();
  }, 5000);
});

