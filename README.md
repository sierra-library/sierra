![Sierra cover](http://sierra-library.github.io/img/github/github-cover.png)

Sierra Library
========================================

The smallest and lightest scss library (formerly known as penguin library)

[![Backers on Open Collective](https://opencollective.com/sierra/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/sierra/sponsors/badge.svg)](#sponsors)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sierra-library/sierra?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![npm version](https://badge.fury.io/js/sierra-library.svg)](https://badge.fury.io/js/sierra-library) [![Bower version](https://badge.fury.io/bo/sierra.svg)](https://badge.fury.io/bo/sierra)
[![diamond](https://diamond.js.org/badge.svg)](https://diamond.js.org)

#### Online demo

[Visit demo website](http://sierra-library.github.io/).


What's the difference with other SCSS libraries?
-----------

This is a micro SCSS library to help you build websites, without all the arbitrary selectors.

&nbsp; &nbsp; ✓ Only 37.03 kB (8.9 kB gzipped)<br>
&nbsp; &nbsp; ✓ Modular<br>
&nbsp; &nbsp; ✓ 2 configurable grid systems ([bootstrap](http://getbootstrap.com/) and [flexboxgrid](http://flexboxgrid.com/))<br>
&nbsp; &nbsp; ✓ Adjust colors, borders, radius & sizes in the variables.scss file<br>
&nbsp; &nbsp; ✓ Responsive

Installation
-----------

#### 1. Grab a copy of the library

Using bower

```bash
bower install sierra --save
```


Using npm

```bash
npm install sierra-library --save-dev
```


Using diamond
```bash
diamond install sierra
```

or manually [download the library](https://github.com/sierra-library/sierra/archive/master.zip).

#### 2. Load the css stylesheet in your html file

```html
<link rel="stylesheet" href="dist/sierra.min.css">
```

Note: when using diamond, import it into your Sass like so:
```scss
@import '~sierra';
```

#### 3. Load [FontAwesome](https://fortawesome.github.io/Font-Awesome/) if applicable (requried when using forms)

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.1/css/font-awesome.min.css">
```

Customization
-----------
#### 1. Edit variables.scss file
This micro library is ready to be customized by editing the [variables.scss](https://github.com/sierra-library/sierra/blob/master/src/_variables.scss) file.

Change these variables and you will have a new customized look for your website:

| Variable description | Variable name | Original value | Alternative value |
| -------- | ----- | --- | --------- |
| Base font | `$basefont` | `Lato` | `Arial` |
| Brand primary color | `$brand-primary` | `#1abc9c` | `#3498db` |
| Brand secondary color | `$brand-secondary` | `#9b59b6` | `#2ecc71` |
| Brand dark | `$brand-dark` | `#18232f` | `#18537a` |
| Tables, forms and other elements bg color | `$brand-light` | `#34495e` | `#f1f1f1` |
| Buttons border radius | `$button-border-radius` | `2em` (rounded) | `3px` |
| Body background | `$body-bg` | `#2c3e50` | `$white` |
| Body text color | `$text-body` | `$white` | `#404040` |
| Border color | `$border-color` | `#465f78` | `#dddddd` |


#### 2. Install dependencies
After editing, run `$ npm install` from the projects root folder to install all dependencies (needs [nodejs](https://nodejs.org/) installed).

#### 3. Compile the files
Run `$ gulp` to generate a new development file:  `dev/sierra.css`.

or

Run `$ gulp build` to generate a new production file:  `dist/sierra.min.css`.

Suggesting enhancements and reporting bugs
-----------
Since we're a very small community, we will appreciate every contribution   regardless of the size.

We will be happy to discuss new features and possible enhancements, so feel free to use [GitHub Issues](https://github.com/Sierra-Library/sierra/issues) for suggesting enhancements, new features and reporting bugs.

Once your enhancement/new feature is approved, you can open a Pull Request.

For small changes or misspellings, don't hesitate to open a pull request directly.

Contributing
-----------
Before creating a new Pull Request, open an issue at [GitHub Issues](https://github.com/Sierra-Library/sierra/issues). Just to make sure everybody feels comfortable with the change.
Remember to specify if you are able or unable, to develop the enhancement/feature.


#### Contributing rules
- Do not include unrelated commits in the same Pull Request.
- Use .editorconfig file located in the root folder. [More info](http://editorconfig.org/)
- Use the .scss-lint file located in the root folder.
- In order to make this library easy to maintain you can use mixins, placeholders and even functions if necessary. The golden rule here is keeping it as simple as possible. Sometimes is better a simple solution that takes a few more lines of code, rather than one that adds complexity for the sake of one-liners. Just use common sense here. In case of doubt join our chat at [sierra-library gitter](https://gitter.im/sierra-library/sierra).
- Many selector names can be improved, but try to avoid changing them (do it only if strictly necessary). We will change them in the V2 with BEM naming.


- Happy contributing everyone!

Who's Using This?
-----------
- [Appszoom](http://www.appszoom.com)
- [Appszoom developers](http://www.appszoom.com/developers)
- [Mobonaut](http://www.mobonaut.com)

Are you using Sierra Library in your awesome project too? Let us know in our  [Gitter chat](https://gitter.im/sierra-library/sierra) or simply [drop me](mailto:dpam23@gmail.com) an email.



## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/sierra#backer)]

<a href="https://opencollective.com/sierra/backer/0/website" target="_blank"><img src="https://opencollective.com/sierra/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/1/website" target="_blank"><img src="https://opencollective.com/sierra/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/2/website" target="_blank"><img src="https://opencollective.com/sierra/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/3/website" target="_blank"><img src="https://opencollective.com/sierra/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/4/website" target="_blank"><img src="https://opencollective.com/sierra/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/5/website" target="_blank"><img src="https://opencollective.com/sierra/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/6/website" target="_blank"><img src="https://opencollective.com/sierra/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/7/website" target="_blank"><img src="https://opencollective.com/sierra/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/8/website" target="_blank"><img src="https://opencollective.com/sierra/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/9/website" target="_blank"><img src="https://opencollective.com/sierra/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/10/website" target="_blank"><img src="https://opencollective.com/sierra/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/11/website" target="_blank"><img src="https://opencollective.com/sierra/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/12/website" target="_blank"><img src="https://opencollective.com/sierra/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/13/website" target="_blank"><img src="https://opencollective.com/sierra/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/14/website" target="_blank"><img src="https://opencollective.com/sierra/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/15/website" target="_blank"><img src="https://opencollective.com/sierra/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/16/website" target="_blank"><img src="https://opencollective.com/sierra/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/17/website" target="_blank"><img src="https://opencollective.com/sierra/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/18/website" target="_blank"><img src="https://opencollective.com/sierra/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/19/website" target="_blank"><img src="https://opencollective.com/sierra/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/20/website" target="_blank"><img src="https://opencollective.com/sierra/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/21/website" target="_blank"><img src="https://opencollective.com/sierra/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/22/website" target="_blank"><img src="https://opencollective.com/sierra/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/23/website" target="_blank"><img src="https://opencollective.com/sierra/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/24/website" target="_blank"><img src="https://opencollective.com/sierra/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/25/website" target="_blank"><img src="https://opencollective.com/sierra/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/26/website" target="_blank"><img src="https://opencollective.com/sierra/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/27/website" target="_blank"><img src="https://opencollective.com/sierra/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/28/website" target="_blank"><img src="https://opencollective.com/sierra/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/sierra/backer/29/website" target="_blank"><img src="https://opencollective.com/sierra/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/sierra#sponsor)]

<a href="https://opencollective.com/sierra/sponsor/0/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/1/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/2/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/3/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/4/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/5/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/6/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/7/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/8/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/9/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/10/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/11/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/12/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/13/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/14/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/15/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/16/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/17/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/18/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/19/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/20/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/21/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/22/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/23/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/24/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/25/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/26/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/27/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/28/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/sierra/sponsor/29/website" target="_blank"><img src="https://opencollective.com/sierra/sponsor/29/avatar.svg"></a>


---
Made by [Joan Claret](http://joanclaret.github.io/) ([@dpam23](https://twitter.com/dpam23)) and [contributors](https://github.com/sierra-library/sierra/graphs/contributors) &nbsp;|&nbsp; This library is licensed under the [GNU General Public License v2.0](https://github.com/sierra-library/sierra/blob/master/LICENSE.md).

Many thanks to [Angela Lareki](http://larekidesign.squarespace.com/) for designing some modules and [Joan Leon](https://twitter.com/nucliweb) for all the advices and linting files.




