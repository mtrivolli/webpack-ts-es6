import * as React from "react";
import * as ReactDOM from "react-dom";

let v: string = "This is a test";
(() => {
ReactDOM.render(<a href=".">{v}</a>,
    document.getElementById("example"));
})();
