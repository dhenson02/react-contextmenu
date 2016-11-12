[![NPM version][npm-image]][npm-url]

# React Context Menu

ContextMenu in React.



## Installation

```
npm install --save react-contextmenu-dk
```



## Usage

You need to setup two things:
1. The `ContextMenu`
2. The `ContextMenuTrigger` 

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

As you can see that the `ContextMenu` to be showed on any component is dependent on a **unique id**.

See [examples](./examples) for more in detail usage.



##Styling

The styling can be apllied to using following classes.

- `react-contextmenu` : applied to menu root element.
- `react-contextmenu--visible` : applied to menu root element when visible.
- `react-contextmenu-item` : applied to menu items.
- `react-contextmenu-link` : applied to menu links inside items.
- `react-contextmenu-link--disabled` : applied to links (title in submenu) when they are disabled.
- `react-contextmenu-link--active` : applied to title in submenu when submenu is open.
- `react-contextmenu-wrapper` : applied to wrapper around elements in `ContextMenuTrigger`.
- `react-contextmenu-submenu` : applied to items that are submenus.

See [react-contextmenu.css](./examples/react-contextmenu.css) for example.



## API

The module exports the following:

- `ContextMenu`
- `ContextMenuTrigger`
- `MenuItem`
- `SubMenu`




### ContextMenu(props)

Type: React Component

Base Contextmenu Component.

**props.id**

Type: `String`  required

A unique identifier for the menu.

**props.onHide**

Type: `Function` (optional)

Callback called when the menu is hidden.

**props.onShow**

Type: `Function` (optional)
Provides: `event`

Callback called when the menu is shown.  Merged objects from `collect()` (below) are accessible via `event.detail.data()`.



### ContextMenuTrigger(props)

Type: React Component

Contextmenu Trigger Component

**props.id**

Type: `String` (required)

The unique identifier of the menu to be called.

**props.attributes**

Type: `Object` (optional)

The attributes will be passed directly passed to the root element of component. Use this to customize it like adding custom classes, adding `colspan` etc.

**props.collect**

Type: `Function` (optional)

A simple function which takes `props` as input and returns the data to be passed to contextmenu (via onShow and onHide)

**props.holdToDisplay**

Type: `Number` (optional)

Default: `1000` with touch device, `null` / unused on non-touch device

This is applicable only for touch screens.  **For real this time.** The time (in ms) for which, user has to hold down his/her finger before the menu is shown.

**props.renderTag**

Type: `String` or React Element (optional)

The element inside which the Component must be wrapped. By default `div` is used. But this prop can used to customize it.



### MenuItem(props)

Type: React Component

A Simple Component for menu items.

**props.onClick**

Type: `Function` (required)

The function to be called on click of item. The function will receive three parameters.

-   The first is `event` object.
-   The second is the merged data passed using `props.data` and `collect` from `ContextMenuTrigger`.
-   The third is the `element` on which right-click occured.

**props.data**

Type: `Object` (optional)

Default: `{}`

The extra data (if required) to be passed to `onClick` event.

**props.disabled**

Type: `Boolean` (optional)

Default: `false`

If `true`, disables the click event and adds `.disabled` class.

**props.preventClose**

Type: `Boolean` (optional)

Default: `false`

By default, the context menu is closed as soon as an item is clicked. Set this prop to control this behavior.

**props.attributes**

Type: `Object` (optional)

The attributes will be passed directly passed to the root element of `MenuItem`. Use this to customize it like adding custom classes, etc.



### SubMenu(props)

Type: React Component

A component for using submenus within the contextmenu.

**props.title**

Type: `String` (required)

The content to be displayed in parent menu.

**props.disabled**

Type: `Boolean` (optional)

Default: `false`

If `true`, disables the menu from opening and adds `.disabled` class.

**props.hoverDelay**

Type: `Number` (optional)

Default: `0`

The time (in ms) after which the menu is to be displayed when hovered upon.



## Contributors

*this link is broken but I'm still gonna leave it*

[All Contributors](./graphs/contributors)



## Changelog

For Changelog, see [releases](./releases/) - *I'm not updating that though so it's only what the original repo has*

## License

[MIT](./LICENSE.md). Copyright(c) [Vivek Kumar Bansal](http://vkbansal.me/)

[npm-url]: https://npmjs.org/package/react-contextmenu-dk
