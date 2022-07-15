// adding breakpoints vs debugger command to mod code for debugging in the browser

//Good Comments
//1-> Explanatory comments are usually bad.
//2-> Good Comments describe the architecture, basically the bird's eye view of the code
//UML are good to study
//3-> Document Function Parameters and usage.
//4-> Explain something that is subtle and counter intutive

//DON'T Comments
//1-> Explainatory Commenting
//2-> Code should be self descriptive, if its impossible to write self descriptive code only then comment it.

// POLYFILLS & TRANSPILERS
//To make our modern code work on older engines that don't understand recent features yet we have Transpilers and Pollyfills

//TRANSIPLERS ->
//Special piece of software that translates source code to another source code. It can parse modern code and rewrite it using older syntax constructs, so that it'll also work in outdated engines.
//Usually Transpiler are run on dev system, and then transpiled code is deployed to the server.
//Babel is one of the most prominent transpilers out there.
//Webpack provides a means to run transpiler automatically on every code change, so it's very easy to integrate into dev process.

// POLYFILLS
// New language features may not only include syntax constructs and operators but also built-in functions. Example Math.trunc()
//When talking about new functions and not syntax changes, we don't need to transpile anything, we just need to declare the missing function.
// polyfill.io & core.js
