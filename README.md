[![NPM version][npm-image]][npm-url]

[![NPM](https://nodei.co/npm/react-contextmenu.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-contextmenu/)

# React Contextmenu

ContextMenu in React with accessibility support. Live Examples can be found [here](//vkbansal.github.io/react-contextmenu/)

## Table of contents

 - [Installation](#installation)
 - [Browser Support](#browser-support)
 - [Usage](#usage)
 - [API](#api)
 - [FAQs](#faqs)
 - [Contributors](#contributors)
 - [Changelog](#changelog)
 - [License](#license)

## Installation

Using npm

```
npm install --save react-contextmenu-dk
```

Using yarn

```
yarn add react-contextmenu
```

## Browser Support
- IE 11 and Edge >= 12
- FireFox >= 38
- Chrome >= 47
- Opera >= 34
- Safari >= 8

## Usage

Simple example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

function handleClick(e, data) {
  console.log(data);
}

function MyApp() {
  return (
    <div>

      <ContextMenuTrigger id="some_unique_identifier">
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier">
        <MenuItem data={"some_data"} onClick={this.handleClick}>
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={"some_data"} onClick={this.handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={"some_data"} onClick={this.handleClick}>
   	      ContextMenu Item 3
        </MenuItem>
      </ContextMenu>

    </div>
  );
}

ReactDOM.render(<MyApp myProp={12}/>, document.getElementById("main"));
```


See [usage docs](./docs/usage.md) / [examples](./examples) for more details.

See [react-contextmenu.css](./examples/react-contextmenu.css) for theming example.

## API

[API docs](./docs/api.md)

## FAQs

[ALL FAQs](./docs/faq.md)

## Who's using react-contextmenu?
- [react-data-grid](https://github.com/adazzle/react-data-grid)
- [teamup.com](https://teamup.com)

## Contributors

[All Contributors](https://github.com/vkbansal/react-contextmenu/graphs/contributors)

## Changelog

For Changelog, see [releases](https://github.com/vkbansal/react-contextmenu/releases)

## License

[MIT](./LICENSE.md). Copyright(c) [Vivek Kumar Bansal](http://vkbansal.me/)

[npm-url]: https://npmjs.org/package/react-contextmenu-dk
