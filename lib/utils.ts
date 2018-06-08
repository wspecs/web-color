const rgb = require('rgb-hex');

export class Color {
    red = 0;
    green = 0;
    blue = 0;
    rgb = '000000';
  
    constructor(red = 0, green = 0, blue = 0) {
      if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        throw new Error(`Invalid color ${red}, ${green}, ${blue}`)
      }
      this.red = red;
      this.green = green;
      this.blue = blue;
      this.rgb = rgb(red, green, blue).toUpperCase();
    }
  }