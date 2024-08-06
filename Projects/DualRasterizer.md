# [Dual Rasterizer](https://github.com/DaanDemaecker/DualRasterizer)

## | [Projects](https://daandemaecker.github.io)  |    [About me](https://daandemaecker.github.io/AboutMe.html)  |

## Intro
For my Graphics Programming 1 class, we made a rasterizer that switches from DirectX to a self made CPU rasterizer.  
One of them is obviously more performant (try to guess which one), but it also taught us a lot more about the process of rasterising. 
The CPU version will never be usable for bigger projects, but it was very satisfying to se built week by week.  

<img src="../Content/DualRasterizer.gif" alt="drawing"/>  
blue background = directX | gray background = CPU

## Capabilities
### Shared
- Load and render meshes with diffuse texture.
- Movable camera.  
- Toggle rasterizer mode from hardware to software
### Hardware
- Load and display diffuse textures with support for opacity.
- Enable different sampler types:
    - Linear
    - Point
    - Anisotropic
### Software
- Toggle shading mode:
    - Combined (Specular, normal map and gloss included)
    - Observed area only
    - Diffuse only
    - Specular only
- Toggle normal map
- Toggle depth buffer visualizationn
- Toggle bounding boxes visualization


## Topics we learned
- ***Rasterization process**
  The entire process of getting a 3D model displayed on screen is way more complicated than any of us thought, but thanks to this course, we learned every step needed to get there.

- ***Clipping***
  As objects that are off screen aren't usefull to be rendered, they are just discarded. As a child playing games i would have never thought of this.

- ***Culling mode***
  Just like clipping objects that are of screen, which side of each triangle is rendered never seemed important to me, i turns out i was very wrong.  




  
