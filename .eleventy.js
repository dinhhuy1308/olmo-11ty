// const { DataTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/public/css');
  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy('./src/public')

    return {
        dir: {
          input: "src",
          output: "public",
        }
    }
}