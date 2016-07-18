"use strict";
const jade = require("jade");
const path_1 = require("path");
function render(req, res, next) {
    if (res.grid) {
        res.html = jade.renderFile(path_1.join(__dirname, 'grid.jade'), { grid: res.grid });
    }
    return next();
}
exports.render = render;
class Row {
}
exports.Row = Row;
class Grid {
}
exports.Grid = Grid;
//# sourceMappingURL=index.js.map