<link href="../../Content/StyleSheet.css" rel="stylesheet"/> 

# [Vulkan Renderer](https://github.com/DaanDemaecker/VulkanRenderer)

<div class="nav-bar">
  <md-block>

<a href="../../">Home</a>
- <a href="../../Projects/" class="selected">Projects</a>
- <a href="../../AboutMe/">About Me</a>
- <a href="../../Resume/">Resume</a>

  </md-block>
</div>

<img src="../../Content/VulkanRenderer3D.gif" alt="drawing"/>

## Motivation
While studying Game Development at Digital Arts and Entertainment in Kortrijk, Belgium, I followed a Graphics Programming class. We made a self-made software rasterizer and a DirectX rasterizer in this class. These were later [combined](https://github.com/DaanDemaecker/DualRasterizer) and can be found on my GitHub.  
This made me look into more rendering APIs and I landed on Vulkan to make my own Renderer.  
This renderer is also integrated into my [self-made engine](https://github.com/DaanDemaecker/D3D-Lite-Engine), as my engine project grew, this project became more of a testing ground for Vulkan.  

## Initial goals
I wanted to deepen my understanding of graphics programming and in the long run, build a small engine that I built myself from scratch.  
I wanted to create a renderer completely by myself (with the help of tutorials but no starting project) as a challenge to see how far I could get.  

# Vulkan renderer 3D
## Current capabilities
- ***Model loading***  
3D model can be loaded from .obj files and displayed on screen.  

- ***Texture loading***  
Textures can be loaded from a variety of file types. Textures can be used in materials to be sent to shaders so the user can use it however they want. Currently diffuse, gloss, specular, and normal maps are supported.  

- ***Pipeline loading***
  The user can create a pipeline with their own shaders, shaders I have created include support for:
    - Diffuse map
    - Normal map
    - Gloss map
    - Specular map

- ***Global light***  
Currently, there is a single global directional light that is used for shading in any way the user wants to. The light has a direction, color, and intensity that can be customized.  

- ***Camera movement***  
A simple camera movement is implemented so that the user can see their objects from different angles. 

- ***GUI***  
ImGui has been implemented and can be used for debugging purposes or anything else the user wants to.  

- ***Skybox rendering***  
The renderer can render a simple skybox when given 6 images to form a cube map.  

- ***Shadow mapping***  
The single, directional light now casts shadows, objects can be toggled for shadow mapping when the user doesn't want an object to cast a shadow.  

## Future goals
- ***Particles***    
Particles are often an essential part of making a game look finished and giving the player feedback on his actions. They have always fascinated me and I have wondered for a long time how they work, so that's why I would love to get into implementing them myself and seeing how they work.  

- ***Compute shaders***   
I have not read a lot about compute shaders, but what I do know about them makes them seem extremely powerful and useful so I would love to learn all about them.  

- ***Instanced rendering***  
Instanced rendering has always seemed like a very interesting concept to me and I would love to deepen my understanding of it and how to apply it in my renderer.  

- ***More lights***  
Currently, my renderer only supports a single directional light, this is of course not ideal for any 3D application.  
I would like to add support for multiple lights at the same time.

- ***More light types***  
There are many different types of light in graphics, I would like to implement as many of them as I can.  
Currently, the lights I would like to add are:
  - Point light  
  - Spotlight
  - Skylight  

## Libraries 
- ***Window handling and input***  
For window handling I chose GLFW, in class we always used OpenGl and SDK and I wanted to explore other options, the Vulkan Tutorial also advised using GLFW.  

- ***GUI***  
In class, we learned about Dear ImGui, but I feel we didn't explore it to its full potential so I chose to explore it further on my own and implement it into my renderer.  

- ***Math***  
For math support, GLM I chose GLM as it was the library I was most familiar with, I usually enjoy experimenting and learning new libraries but a math library didn't seem interesting enough to explore for me. GLM also seems to be the best at communicating with Vulkan.  

- ***JSON file reading***  
I had worked with JSON files before in C# but never in C++, so I had to learn and look for a library that could fit my requirements and I ended up choosing RapidJSON.

- ***Image loading***   
Image loading is done with the STB library, as suggested by the Vulkan tutorial.  

- ***.obj loading**
As suggested by the Vulkan tutorial, .obj files are loaded in by using the TinyObjLoader library.
