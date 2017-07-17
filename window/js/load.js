var scenario = {
    "name": "testScenario",
    "tsversion": "1.0",
    "first_id": "id1",
    "nodes": {
        "id1": {
            "header": "first test node",
            "type": "user",
            "version": 1,
            "text": "some test text. yes, some text for testing",
            "illustrations": [
                {
                    "type": "image",
                    "preload": "false",
                    "url": "https://cs540100.userapi.com/c543105/v543105400/3b2d1/zkiQoVi9PwU.jpg"
                }
            ],
            "choices": [
                {
                    "version": "1",
                    "header": "first choice",
                    "illustrations": [],
                    "text": "select me!",
                    "main": "true",
                    "goto": { "node": "id2" }
                },
                {
                    "version": "1",
                    "header": "second choice",
                    "illustrations": [],
                    "text": "no, select me!",
                    "goto": { "node": "id3" }
                }
            ]
        },
        "id2": {
            "header": "second node",
            "type": "user",
            "version": 1,
            "text": "you have to go to node 1!",
            "illustrations": [],
            "choices": [
                {
                    "version": "1",
                    "header": "okay",
                    "illustrations": [],
                    "text": "go to node 1",
                    "goto": { "node": "id1" },
                }
            ]
        },
        "id3": {
            "header": "final node!",
            "type": "user",
            "version": 1,
            "test": "that's the end of story",
            "illustrations": [],
            "main": true,
            "choices": []
        }
    }
}
