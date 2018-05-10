# Fluent Design Web Components

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Microsoft's Fluent Design system implemented for the web using Stencil.

#### Available Components:
* [Acrylic](#acrylic)
* [Content](#content)
* [Button](#button)

#### Coming Soon:
* Input
* Navigation View

## Getting started
Install from npm: `npm i --save fluent-web-components`

If you don't already have the body set to have no margin & padding, make sure you do.
```css
body {
  margin: 0;
  padding: 0;
}
```

## Components
### Acrylic
* Creates a container for child elements with the Fluent Acrylic effect applied.

Tag: `fluent-acrylic`

| Property          | Type      | Default               | Description |
| --------          | ----      | -------               | ----------- |
| padding           | `boolean` | `false`               | Gives acrylic children some room to breathe. |
| tint-opacity      | `[1-10]`   | `5`                   | Opacity from 1 to 9 of the background of the acrylic |
| tint-color        | css color | color scheme          | Changes the tinit color of the acrylic from the default color scheme specified. |
| background-source | `"host-backdrop"` or `"backdrop"` | `"host-backdrop"` | Which background source to use as the background of the acrylic. `"host-backdrop"` uses the image set for the `--background-image` variable, while `"backdrop"` uses the content behind the element (right now this uses [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) so it may not work in all browsers yet). |


### Button
* A simple button component with support for custom styling as specified in the UWP docs.

Tag: `fluent-button`

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| background | `string` | based on theme | Changes the default background of the button |
| foreground | `string` | based on theme | Changes the default text color of the button |

...and several other properties. See Microsoft's specs on UWP button styling for more info.

### Content
* A content wrapper for an application using Fluent for Web. It is optional but recommended.

Tag: `fluent-content`

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| no-image | `boolean` | `false` | Disables a page-wide background image, instead opting for a solid background. |
| theme    | `"light"` or `"dark"` | `"light"` | Apply the selected theme to all fluent elements that are children of this content. |
| background-image | `string` | `undefined` | Set the host backdrop of the content. |
