// -----------------------------------
// Carousel
// -----------------------------------
const carouselImages =
[
    "Content/DDM3-Lite-Engine.webm",
    "Content/VulkanRenderer3D.webm",
    "Content/IMPossible.webm"
];

const carouselTitles =
[
    "DDM-Lite-Engine",
    "VulkanRenderer",
    "IMPossible"
];

const carouselLinks =
[
    "DDM-Lite-Engine",
    "VulkanRenderer",
    "IMPossible"
];


let currentCarouselIndex = 0;

function moveCarousel(amount)
{
    currentCarouselIndex += amount;

    if(currentCarouselIndex < 0)
    {
        currentCarouselIndex = carouselImages.length - 1;
    }
    else if (currentCarouselIndex >= carouselImages.length)
    {
        currentCarouselIndex = 0;
    }

    let carouselImage = document.getElementById("CarouselImage");

    carouselImage.pause();

    carouselImage.setAttribute("src", carouselImages[currentCarouselIndex]);
    carouselImage.load();

    carouselImage.play().catch(err => {
        console.log("Autoplay blocked or failed:", err);
    });

    let carouselTitle = document.getElementById("CarouselTitle");

    carouselTitle.innerHTML = carouselTitles[currentCarouselIndex];

    carouselTitle.href = carouselLinks[currentCarouselIndex];

    let carouselLink = document.getElementById("CarouselLink");
    
    carouselLink.href = carouselLinks[currentCarouselIndex];
}

// -----------------------------------
// Tabs
// -----------------------------------
function OpenTab(evt, tabLabel)
{
    let contents = document.getElementsByClassName("navbarContent");

    for(let i = 0; i < contents.length; ++i)
    {
        contents[i].style.display = "none";
    }

    let tabs = document.getElementsByClassName("navbarButton");

     for(i = 0; i < tabs.length; ++i)
    {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }


    let currentContent = document.getElementById(tabLabel);
    if(currentContent != null)
    {
        currentContent.style.display = "block";
    }

    evt.currentTarget.className += " active";
}

// -----------------------------------
// Projects
// -----------------------------------
async function PickProject(evt, projectName)
{
    let file = await fetch(`Projects/${projectName}.html`);

    let text = await file.text();

    let content = document.getElementById("CurrentProject");

    content.innerHTML = text;

    OpenTab(null, "CurrentProject");
}

async function SelectCarouselProject()
{
    let file = await fetch(`Projects/${carouselLinks[currentCarouselIndex]}.html`);

    let text = await file.text();

    let content = document.getElementById("CurrentProject");

    content.innerHTML = text;


    OpenTab(null, "CurrentProject");
}

document.getElementById("Home").style.display = "block";