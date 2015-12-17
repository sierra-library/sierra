![Sierra cover](http://sierra-library.github.io/img/github/github-cover.png)

Sierra library
========================================

The smallest and lightest scss library (formerly known as penguin library)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sierra-library/sierra?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

### Installation

`$ bower install sierra --save`

### Online demo

[Visit demo website](http://sierra-library.github.io/).


### What's the difference with other SCSS libraries?

This is a tiny SCSS library to help you build websites faster than ever, without hundreds of (never used) selectors.

* Only 36.46 kB (7.02 kB gzipped)
* Modular ready
* 2 grid systems ([bootstrap](http://getbootstrap.com/) and [flexboxgrid](http://flexboxgrid.com/))
* Adjust colors, borders & sizes in the variables.scss file
* Responsive

### Included files

    src/
	 ├── entry.scss                         /* Import main library scss file and configuration variables */
     ├── _sierra.scss                       /* Import library modules from scss folder */
     ├── _variables.scss                    /* Configure grid system, colors, font family, font size, borders... */
     └── scss/
           ├── background-colors.scss
           ├── bootstrapgrid/               /* Bootstrap grid system */
           │     ├── grid.scss
           │     └── grid-frameworks.scss
           ├── bootstrapgrid.scss           /* Bootstrap main grid file */
           ├── buttons.scss
           ├── flexboxgrid/                 /* Flexboxgrid system */
           │      └── grid.scss
           ├── flexboxgrid.scss             /* Flexfox main grid file */
		   ├── utils/
		   │      └── mixins.scss
		   ├── vendor/
		   │      └── reset.scss
           ├── forms.scss
           ├── helpers.scss                 /* Utilities and modifiers */
           ├── layout.scss
           ├── loading-bar.scss
           ├── loading-spinner.scss
           ├── main.scss
           ├── placeholders.scss
           ├── tables.scss
           ├── tabs.scss
           └── typography.scss

### Tested in production environments

[![appszoom.com][1]][2] [![appszoom.com/developers][3]][4] [![mobonaut.com][5]][6]

[1]: http://sierra-library.github.io/img/github/logo-appszoom-s.png
[2]: http://www.appszoom.com

[3]: http://sierra-library.github.io/img/github/logo-appszoom-developers-s.png
[4]: http://www.appszoom.com/developers

[5]: http://sierra-library.github.io/img/github/logo-mobonaut-s.png
[6]: http://www.mobonaut.com

###  Suggesting enhacements and reporting bugs
Use [GitHub Issues](https://github.com/Sierra-Library/sierra/issues) for suggesting enhancements and reporting bugs.

###  Contributing rules

- Open Pull Requests with your changes.
- Do not include many different commits in the same PR.
- Use editorconfig file located in the root folder.
- Use the .scss-lint file located in the root folder.
- In order to make this library easy to maintain you can use mixins, placeholders and even functions if necessary. The golden rule here is keeping it as simple as possible. Sometimes is better a simple solution that takes a few more lines of code, rather than one that adds complexity for the sake of one-liners. Just use common sense here. In case of doubt join our chat at [sierra-library gitter](https://gitter.im/sierra-library/sierra).
- Many selector names can be improved, but try to avoid changing them (do it only if strictly necessary). We will change them in the V2 with BEM naming.
- If you want to make a big change, suggest it in the [sierra-library gitter](https://gitter.im/sierra-library/sierra) chat. Just to be sure everybody feels confortable with that.

- Happy contributing everyone!

### Thanks
Many thanks to [Angela Lareki](http://larekidesign.squarespace.com/)  for collaborating in the design process and [Joan Leon](https://twitter.com/nucliweb) for all the advices and linting files.

### License

This library is licensed under the [GNU General Public License v2.0](https://github.com/sierra-library/sierra/blob/master/LICENSE.md).
