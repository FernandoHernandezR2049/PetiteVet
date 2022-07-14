import { InfoContext }from "./itemViewsStrategy.js";


export function addItems(URL_MAIN, strategy, element) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function(json) {
            // console.log(json);
            // console.log(json.length);
            let papucho = Array.from(json);
            papucho.sort(function(a, b) {
                if (a.description.length > b.description.length) {
                    return 1;
                }
                if (a.description.length < b.description.length) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            let data = new InfoContext(
                new strategy(),
                papucho,
                document.getElementById(element)
            );
            data.show();
        }); // then
    }).catch(function(err) {
        console.log(err);
    });
    // console.log(document.getElementById(element));
} //addItems