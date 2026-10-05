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
}

// -----------------------------------
// Tabs
// -----------------------------------
function OpenTab(evt, tabLabel, addToHistory = true)
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

    if(evt != null)
    {
        evt.currentTarget.className += " active";
    }

    if(addToHistory)
    {
        AddToHistory(tabLabel);
    }
}

function AddToHistory(tabLabel, projectName = "")
{
    let tabName = `#${tabLabel}`;

    if(tabLabel == "CurrentProject")
    {
        tabName = tabName + `#${projectName}`;
    }

    console.log(tabName);


    history.pushState(
            { tab: tabLabel, project: projectName },
            '',
            tabName
        );
}

// -----------------------------------
// Projects
// -----------------------------------
async function PickProject(evt, projectName, addToHistory = true)
{
    let file = await fetch(`Projects/${projectName}.html`);

    let text = await file.text();

    let content = document.getElementById("CurrentProject");

    content.innerHTML = text;

    OpenTab(null, "CurrentProject", false);

    if(addToHistory)
    {
        AddToHistory("CurrentProject", projectName);       
    }
}

async function SelectCarouselProject()
{
    PickProject(null, carouselLinks[currentCarouselIndex], true);
}


window.addEventListener('popstate', (event) => {
    const tab = event.state?.tab || 'Home';
    console.log(tab);
    if(tab == "CurrentProject")
    {
        const project = event.state?.project;
        PickProject(null, project, false);
    }
    else
    {
        OpenTab(null, tab, false);
    }
});

document.getElementById("Home").style.display = "block";
moveCarousel(0);