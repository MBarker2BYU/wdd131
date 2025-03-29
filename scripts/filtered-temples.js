const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "April 25, 1993",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-39281.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Fort Lauderdale, Florida",
        dedicated: "May 4, 2014",
        area: 30500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3792.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida",
        dedicated: "October 11, 1994",
        area: 70000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51569.jpg"
    },
    // Add more temple objects here...
];

createTempleCards(temples);

const allFilter = document.querySelector("#all-filter");
const oldFilter = document.querySelector("#old-filter");
const newFilter = document.querySelector("#new-filter");
const largeFilter = document.querySelector("#large-filter");
const smallFilter = document.querySelector("#small-filter");

allFilter.addEventListener("click", () =>
{
    createTempleCards(temples);
}); 

oldFilter.addEventListener("click", () => 
{    
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    createTempleCards(filteredTemples);   
});

newFilter.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    createTempleCards(filteredTemples);
});

largeFilter.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(filteredTemples);
});

smallFilter.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(filteredTemples);
});

const allFilter2 = document.querySelector("#all-filter2");
const oldFilter2 = document.querySelector("#old-filter2");
const newFilter2 = document.querySelector("#new-filter2");
const largeFilter2 = document.querySelector("#large-filter2");
const smallFilter2 = document.querySelector("#small-filter2");

allFilter2.addEventListener("click", () =>
{
    createTempleCards(temples);
}); 

oldFilter2.addEventListener("click", () => 
{    
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    createTempleCards(filteredTemples);   
});

newFilter2.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    createTempleCards(filteredTemples);
});

largeFilter2.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(filteredTemples);
});

smallFilter2.addEventListener("click", () =>
{
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(filteredTemples);
});

function createTempleCards(filteredTimples) 
{
    document.querySelector(".album").innerHTML = ""; // Clear previous cards

    filteredTimples.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString('en')} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
                
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector(".album").appendChild(card);
    });
}

function showSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}