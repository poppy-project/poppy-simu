poppy-simu
==========

Visualize Poppy creatures in the browser.

**Warning: even if its goal is to work with every Poppy robots, at the moment it only works with [Poppy Ergo Jr](https://github.com/poppy-project/poppy-ergo-jr)**.

![poppy-simu](http://docs.poppy-project.org/en/getting-started/poppy-visu.gif)


## Installation

The viewer is in a web browser. Yet, you still need to install software on your computer that will run the robot.

First you need to install Python, if you don't have any knowledges in scientific Python we strongly recommand to use a pre-packaged distribution such as [Anaconda](http://continuum.io/downloads).

Then, you have to install the creature software. for Poppy Ergo Jr robot you need to install the  [poppy-ergo-jr](https://github.com/poppy-project/poppy-ergo-jr/tree/master/software) package (the easiest way is with `pip install poppy-ergo-jr`).

**For more informations, refer to the [poppy documentation](http://docs.poppy-project.org/en/installation/index.html)**.


## Run poppy-simu website 

If you have installed everything correctly, you can controll from Snap_!_ with 
```
poppy-services --poppy-simu --snap poppy-ergo-jr
```

Or in Python with
```python
from poppy.creatures import PoppyErgoJr
robot = PoppyErgoJr(simulator='poppy-simu')
```

To use poppy-simu website, you can:
- **use the online version at http://simu.poppy-project.org (prefered solution)**
- fetch it locally from the 'gh-pages' git branch if you want to use it offline (you'll have to setup a webserver)
```bash
git clone https://github.com/poppy-project/poppy-simu.git && cd poppy-simu
git checkout gh-pages
python -m SimpleHTTPServer
```
- clone the git repository and build it with jekyll (for development only)
```bash
git clone https://github.com/poppy-project/poppy-simu.git && cd poppy-simu
bundle install
jekyll serve
```

## Support

You need support ?
The [Poppy forum](https://forum.poppy-project.org) is the best (and single) place to ask for help !

## Contributing

You can share your experience, new design, ideas or questions on the [Poppy project forum](https://forum.poppy-project.org/).

To contribute to this repository, you can [fork it](https://help.github.com/articles/fork-a-repo/) and propose a [pull request](https://help.github.com/articles/using-pull-requests/) *([Another useful link](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/))*

## License

All the technological development work made in the Poppy project is freely available under open source licenses. Only the name usage *"Poppy"* is restricted and protected as an international trademark, please contact us if you want to use it or have more information.

|   License     |     Hardware    |   Software      |
| ------------- | :-------------: | :-------------: |
| Title  | [Creative Commons BY-SA](http://creativecommons.org/licenses/by-sa/4.0/)  |[GPL v3](http://www.gnu.org/licenses/gpl.html)  |
| Logo  | [![Creative Commons BY-SA](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) ](http://creativecommons.org/licenses/by-sa/4.0/)  |[![GPL V3](https://www.gnu.org/graphics/gplv3-88x31.png)](http://www.gnu.org/licenses/gpl.html)  |


## The Poppy project history

The Poppy project is born in 2012 in the [Flowers laboratory](https://flowers.inria.fr/) at [Inria Bordeaux Sud-Ouest](http://www.inria.fr/en/centre/bordeaux).
It was initiated during [Matthieu Lapeyre](https://github.com/matthieu-lapeyre)'s PhD Thesis surpervised by [Pierre Yves Oudeyer](http://www.pyoudeyer.com/). At the beginning, the development team was composed by [Matthieu Lapeyre](https://github.com/matthieu-lapeyre) (mechanics & design), [Pierre Rouanet](https://github.com/pierre-rouanet) (software) and [Jonathan Grizou](http://jgrizou.com/) (electronics).

This project is initially a fundamental research project financed by [ERC Grant Explorer](http://erc.europa.eu/) to explore the role of embodiement and morphology properties on cognition and especially on the learning of sensori-motor tasks.


## More on the project

- [Website](https://www.poppy-project.org)
- [Forum](https://forum.poppy-project.org)
- [Youtube](https://www.youtube.com/channel/UC3iVGSr-vMgnFlIfPBH2p7Q)
- [Twitter](https://twitter.com/poppy_project)
- [Facebook](https://www.facebook.com/poppycommunity/)
- [Flickr](https://www.flickr.com/photos/poppy-project)
- [Vimeo](https://vimeo.com/poppyproject)
- [Thingiverse](http://www.thingiverse.com/poppy_project/)

