# html2react-json

[Try it live](https://xaviervia.github.io/html2react-json/)

> See also [html2jsx](https://github.com/xaviervia/html2jsx)

```
npm i -g html2react-json

html2react-json index.html
html2react-json Icon.svg
```

```javascript
import html2reactJSON from 'html2react-json'

const html = `<h1 class="hello">Hello JSX</h1>`

console.log(html2reactJSON(html))
```

> Note that the programmatic usage will only work in a browser environment. If you want to use it in Node, you will need to wrap it in [`jsdom`](https://github.com/tmpvar/jsdom). You can take a look at the [command line tool implementation](bin/html2react-json.js) for an example of how to do this

## Credits

- HTML/SVG to React conversion done with [**html2react**](https://github.com/Deschtex/html2react)
- React to JSON conversion done with [**react-render-to-json**](https://github.com/gorangajic/react-render-to-json)

## License

[The Unlicense](LICENSE)
