const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

function create(response {
    if (response.shape === 'Triangle'){
        let logoShape = new Triangle (response.text, response.textColor, response.shapeColor)
        return logoShape.render();
    }
    if (response.shape === 'Square'){
        let logoshape = new Square (response.text, response.textColor, response.shapeColor)
        return logoshape.render();
    }
    if (response.shape === 'Circle'){
        let logoshape = new Circle (response.text, response.textColor, response.shapeColor)
        return logoshape.render();
    }

module.exports = create;