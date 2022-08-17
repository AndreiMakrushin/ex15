function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}
//-----------------------------------------------------------------------------------------------------------

DomElement.prototype.newElem = () => {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1)   
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1)
    }
    elem.cssText = `height: ${this.height}px; width: ${this.width}; bg: ${this.bg}; fontSize: ${this.fontSize};`;
    return elem;
};
//-----------------------------------------------------------------------------------------------------------

let div = new DomElement('.div', 200, 200, 'purple', 12);
document.body.appendChild(div.newElem())