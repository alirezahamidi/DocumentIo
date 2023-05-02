class DocumentIo {
    constructor() { }

    static createElement(elementType, attributes, childElements) {
        var el = document.createElement(elementType);
        Object.getOwnPropertyNames(attributes).forEach(a => {
            if (a == "innerText") {
                el.innerText = attributes[a]
            } else if (a == "innerHtml") {
                el.innerHtml = attributes[a]
            } else if (a == "class") {
                attributes[a].split(' ').forEach(c => {
                    if (c && c != '')
                        el.classList.add(c)
                })
            } else
                el.setAttribute(a, attributes[a]);
        });

        childElements?.forEach(e => {
            el.appendChild(e);
        })
        return el;
    }

    static createElements(elements) {
        var elements = []
        elements.forEach(e => {
            elements.push(DocumentIo.createElement(...e));
        })
        return elements;
    }
}