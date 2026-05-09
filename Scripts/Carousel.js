const carouselImages =
[
    "Content/DDM3-Lite-Engine.gif",
    "Content/VulkanRenderer3D.gif",
    "Content/IMPossible.gif"
];

const carouselTitles =
[
    "DDM3-Lite-Engine",
    "VulkanRenderer",
    "IMPossible"
];

const carouselLinks =
[
    "Projects/DDM3-Lite-Engine/index.html",
    "Projects/VulkanRenderer/index.html",
    "Projects/IMPossible/index.html"
];

carouselImages.forEach(src=>
{
    const img = new Image();
    img.src = src;
}
);

let currentIndex = 0;

function moveCarousel(amount)
{
    currentIndex += amount;

    if(currentIndex < 0)
    {
        currentIndex = carouselImages.length - 1;
    }
    else if (currentIndex >= carouselImages.length)
    {
        currentIndex = 0;
    }

    let carouselImage = document.getElementById("CarouselImage");

    carouselImage.src = carouselImages[currentIndex];

    let carouselTitle = document.getElementById("CarouselTitle");

    carouselTitle.innerHTML = carouselTitles[currentIndex];

    carouselTitle.href = carouselLinks[currentIndex];

    let carouselLink = document.getElementById("CarouselLink");
    
    carouselLink.href = carouselLinks[currentIndex];
}