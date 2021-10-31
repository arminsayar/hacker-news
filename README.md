# Hacker News 

This project was created with React library and [Algolia HN API](https://hn.algolia.com/api).

## Features

- Show news in post format with original link
- Search in news for specefic title
- Switch between pages

## How to use

To use Hacker news app, you can run app and see API's news in the main page.
You can search for your specefic title in search bar.
And you can turn the pages for another news.

## Setup

```shell
$ yarn
```

#### or

```shell
$ npm install
```
To install dependencies

## Dynamic variable

### In `containers/StoriesContainer.jsx`:
- `baseUrl` related to API. To change  queries edit this this variable.
- `pageNumber` related to API pages. To change  default page neumber edit this this variable.
- `query` related to API search. To change default search value edit this this variable.

## Styles

This app styled with [StyledComponent](https://styled-components.com/).
To change styles, opening `components/...` and in every component, before the component function, styles variable is ready to change!

## Dependencies

- [React](https://reactjs.org/)
- [StyledComponent](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
