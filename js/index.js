const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
const navBar = document.querySelectorAll("nav a");
for (let i = 0; i < navBar.length; i++){
  navBar[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
};

//CTA text
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"]

//CTA button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

//CTA image
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main content
//Top content
const topContentHeaders = document.querySelectorAll(".main-content .top-content h4");
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];

const topContentParagraphs = document.querySelectorAll(".main-content .top-content p")
topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Bottom content
const bottomContentHeaders = document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomParagraphs= document.querySelectorAll(".main-content .bottom-content p");
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];



