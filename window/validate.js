const validators = {
    "1.0":function (scr) {

    }
};

function validateTSJSON(tsjson) {
    try {
        var scr = JSON.parse(tsjson)
    } catch (err) {
        return "invalid_json"
    }
    if (!scr.version) {
        return "no version"
    } else {
        try {
            validators[scr.version](scr)
        } catch (err) {
            return "wrong version"
        }
    }
}