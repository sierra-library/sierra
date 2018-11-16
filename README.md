<p align="center">
    <a href="https://sierra-library.github.io/" target="_blank"><img width="500" src="http://sierra-library.github.io/img/github/github-cover-2.svg"></a><br>
    The smallest and lightest scss library
</p>

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sierra-library/sierra?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![npm version](https://badge.fury.io/js/sierra-library.svg)](https://badge.fury.io/js/sierra-library) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


#### Online demo

[Visit demo website](https://sierra-library.github.io/).

[Visit a theme customization example](https://sierra-library.github.io/examples/example1/index.html).


What's the difference with other SCSS libraries?
-----------

This is a micro SCSS library to help you build websites

&nbsp; &nbsp; ✓ Only 32.9 kB (8.2 kB gzipped)<br>
&nbsp; &nbsp; ✓ Modular<br>
&nbsp; &nbsp; ✓ Customize colors, borders, radius & sizes<br>
&nbsp; &nbsp; ✓ Responsive

Quick install
-----------

Using npm
```bash
npm install sierra-library --save-dev
```

Import
-----------
In sass files (recommended)
```scss
@import 'sierra-library/lib/index';
```

or directly in your html
```html
<link rel="stylesheet" href="dist/sierra.min.css">
```

Customize
-----------
If you want to customize Sierra library's theme, create your own `custom-settings` file and add it just **before** importing sierra files:

```scss
@import 'custom-settings';
@import 'sierra-library/lib/index';
```

This `custom-settings.scss` file should contain all those SCSS variables you want to overwrite:

```scss
$c-primary: #3498db;
$c-secondary: #2ecc71;

$fz-base: 18px;
```
#### Examples

[Theme customization example](https://sierra-library.github.io/examples/example1/index.html)

[Theme customization example code ](https://github.com/sierra-library/sierra-library.github.io/tree/master/examples/example1)

Contributing
-----------

#### Contributing rules
- Do not include unrelated commits in the same Pull Request.
- Use .editorconfig file located in the root folder. [More info](http://editorconfig.org/)
- Use the .scss-lint file located in the root folder.
- In case of doubt, join our chat [sierra-library gitter](https://gitter.im/sierra-library/sierra).


Who's Using This?
-----------
- [Appszoom](http://www.appszoom.com)
- [Appszoom developers](http://www.appszoom.com/developers)

Are you using Sierra Library in your awesome project too? [drop us](mailto:dpam23@gmail.com) an email.


---
Made by [Joan Claret](https://joanclaret.github.io/) ([@dpam23](https://twitter.com/dpam23)) and [contributors](https://github.com/sierra-library/sierra/graphs/contributors) &nbsp;|&nbsp; This library is licensed under the [GNU General Public License v2.0](https://github.com/sierra-library/sierra/blob/master/LICENSE.md).
