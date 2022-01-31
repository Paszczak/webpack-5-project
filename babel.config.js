module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // {runtime...}, React 17 requirement, allows not to load react in every file
  ]
}