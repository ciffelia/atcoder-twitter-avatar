import packageJson from './package.json'

const banner = `
// ==UserScript==
// @name         AtCoder Twitter Avatar
// @namespace    https://ciffelia.com/
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       ${packageJson.author}
// @license      ${packageJson.license}
// @homepage     ${packageJson.homepage}
// @supportURL   ${packageJson.bugs}
// @match        http*://atcoder.jp/user/*
// @match        https://beta.atcoder.jp/users/*
// @run-at       document-end
// ==/UserScript==
`.trim() + '\n'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    banner
  }
}
