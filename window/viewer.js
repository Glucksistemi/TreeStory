var script = {
    "ts_version": 1,
    "name": "test scenario",
    "first_id": "1",
    "nodes": [
        {
            "id": "1",
            "type": "user",
            "header": "starts here!",
            "version": 1,
            "text": "we'll start here our journey into the world of non-linear stories. it shall be great!",
            "choices": [
                {
                    "id": "one",
                    "main": true,
                    "version": 1,
                    "header": "choose me!",
                    "text": "yeah, do it!",
                    "goto": { "node": "2" }
                }
            ]
        }
    ]
};

function createDOMElem(type, cssclass, innerhtml) {
    let elem = document.createElement(type);
    if (cssclass) {
        elem.setAttribute('class', cssclass);
    }
    if (innerhtml) {
        elem.innerHTML = innerhtml;
    }
    return elem
}

function createChoiceBlock(choice) {
    let rootclass, illustration;
    if (choice.main) {
        rootclass = "choice main"
    }
    else {
        rootclass = "choice"
    }
    if ( choice.illustration.type == "image" && choice.illustration.link) {
        illustration = '<img src="'+choice.illustration.link+'" />';//FIXME: as soon as i will create something nicer here
    }
    let root = createDOMElem('div', rootclass);
    root.appendChild(createDOMElem('h3', false, choice.header));
    root.appendChild(createDOMElem('div', 'illustration', illustration));
    root.appendChild(createDOMElem('div', 'text', choice.text));
    root.dataset.goto_script = choice.goto.script;
    root.dataset.goto_node = choice.goto.node;
    return root
}

function drawNode(node_id) {
    var node;
    script.nodes.forEach(function (obj) {
        if (obj.id == node_id) {
            node = obj;
        }
    });
    if (!node) {
        console.log("error: bad node id")
    }
    
}