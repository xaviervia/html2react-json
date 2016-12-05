#!/usr/bin/env node
const {default: html2reactJSON} = require('../dist/html2react-json')
const fs = require('fs')
const jsdom = require('jsdom')

jsdom.env('', (err, window) => {
  if (err) throw err

  global.window = window
  global.document = window.document

  const output = process.argv
    .slice(2)
    .map((path) => [
      path
        .split('/')[path.split('/').length - 1]
        .split('.')[0]
        .split('')
        .map((char, i) => i === 0 ? char.toUpperCase() : char)
        .join(''),
      fs.readFileSync(path).toString()
    ])
    .map(([name, source]) => html2reactJSON(source, {name}))

  console.log(
    JSON.stringify(output, null, 2)
  )
})
