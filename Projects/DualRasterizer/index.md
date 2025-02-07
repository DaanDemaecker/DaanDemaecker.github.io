<link href="../../Content/StyleSheet.css" rel="stylesheet"/> 

# [Dual Rasterizer](https://github.com/DaanDemaecker/DualRasterizer)

<div class="nav-bar">
  <md-block>

<a href="../../">Home</a>
- <a href="../../Projects/" class="selected">Projects</a>
- <a href="../../AboutMe/">About Me</a>
- <a href="../../Resume/">Resume</a>

  </md-block>
</div>

## Intro
For my Graphics Programming 1 class, we made a rasterizer that switches from DirectX to a self-made CPU rasterizer.  
One of them is obviously more performant (try to guess which one), but it also taught us a lot more about the process of rasterizing. 
The CPU version will never be usable for bigger projects, but it was very satisfying to see built week by week.  

<img src="../../Content/DualRasterizer.gif" alt="drawing"/>  
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
- Toggle depth buffer visualization
- Toggle bounding boxes visualization


## Topics we learned
- ***Rasterization process***
  The entire process of getting a 3D model displayed on screen is way more complicated than any of us thought, but thanks to this course, we learned every step needed to get there.

- ***Clipping***
  As off-screen objects aren't useful to be rendered, they are just discarded. As a child playing games, I would have never thought of this.

- ***Culling mode***
  Just like clipping objects that are on screen, which side of each triangle is rendered never seemed important to me, it turns out I was very wrong.  



## Conclusion
This project was my first experience with graphics programming and it made me really interested and made me want to stay on this path in the future.
  
