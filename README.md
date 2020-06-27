poppy-simu
==========

Visualize Poppy creatures in the browser.

**Warning: even if its goal is to work with every Poppy robots, at the moment it only works with [Poppy Ergo Jr](https://github.com/poppy-project/poppy-ergo-jr)**.

![poppy-simu](http://docs.poppy-project.org/en/img/visu/python-setup.gif)


## Installation

The viewer is in a web browser. Yet, **you still need to install software on your computer that will run the robot**.

First you need to install Python, if you don't have any knowledge in scientific Python we strongly recommend to use a pre-packaged distribution such as [Anaconda](http://continuum.io/downloads).

Then, you have to install the creature software. For Poppy Ergo Jr robot you need to install the [poppy-ergo-jr](https://github.com/poppy-project/poppy-ergo-jr/tree/master/software) package (the easiest way is with `pip install poppy-ergo-jr`).

**For more informations, refer to the [Poppy documentation](http://docs.poppy-project.org/en/installation/index.html)**.

## Run the simulated creature

If you have installed everything correctly, you can control from Snap<em>!</em> with

```bash
poppy-services --poppy-simu --snap poppy-ergo-jr
```

Or in Python with

```python
from pypot.creatures import PoppyErgoJr
robot = PoppyErgoJr(simulator='poppy-simu')
```

## Run the poppy-simu web interface

### I - Online version

An online version is available at http://simu.poppy-project.org.  
This is the recommended way to use it, as it does not require any other installation on your side.

### II - Download and serve the latest version

You can download it locally from the `gh-pages` branch [archive](https://github.com/poppy-project/poppy-simu/archive/gh-pages.zip).

This setup requires a running webserver.

For instance, using Python:
```bash
cd /path/to/poppy-simu-gh-pages/
python -m SimpleHTTPServer
```
You can open the website with the URL `http://127.0.0.1:8000` on your web browser.


### III - Serve from the source code

This is not the way you should choose unless you need to modify the `poppy-simu` website code.

You have to clone the git repository and build it with [Jekyll](http://jekyllrb.com/).

```bash
git clone https://github.com/poppy-project/poppy-simu.git && cd poppy-simu
gem install bundler
bundle install
bundle exec jekyll serve
```

## Support

You need support?
The [Poppy forum](https://forum.poppy-project.org) is the right place to ask for help!

## Contributing

You can share your experience, new design, ideas or questions on the [Poppy project forum](https://forum.poppy-project.org/).

To contribute to this repository, you can [fork it](https://help.github.com/articles/fork-a-repo/) and propose a [pull request](https://help.github.com/articles/using-pull-requests/) *([Another useful link](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/))*

## License

See [LICENSE](LICENSE.md) file.

## The Poppy project history

The Poppy project is born in 2012 in the [Flowers laboratory](https://flowers.inria.fr/) at [Inria Bordeaux Sud-Ouest](http://www.inria.fr/en/centre/bordeaux).
It was initiated during [Matthieu Lapeyre](https://github.com/matthieu-lapeyre)'s PhD Thesis supervised by [Pierre Yves Oudeyer](http://www.pyoudeyer.com/). At the beginning, the development team was composed by [Matthieu Lapeyre](https://github.com/matthieu-lapeyre) (mechanics & design), [Pierre Rouanet](https://github.com/pierre-rouanet) (software) and [Jonathan Grizou](http://jgrizou.com/) (electronics).

This project is initially a fundamental research project financed by [ERC Grant Explorer](http://erc.europa.eu/) to explore the role of embodiment and morphology properties on cognition and especially on the learning of sensori-motor tasks.

## More on the project

- [Website](https://www.poppy-project.org)
- [Forum](https://forum.poppy-project.org)
- [Youtube](https://www.youtube.com/channel/UC3iVGSr-vMgnFlIfPBH2p7Q)
- [Twitter](https://twitter.com/poppy_project)
- [Facebook](https://www.facebook.com/poppycommunity/)
- [Flickr](https://www.flickr.com/photos/poppy-project)
- [Vimeo](https://vimeo.com/poppyproject)
- [Thingiverse](http://www.thingiverse.com/poppy_project/)
