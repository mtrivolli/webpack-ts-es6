import * as React from "react";
import * as ReactDOM from "react-dom";

let p = Promise.resolve("Da test");
p.then(v => ReactDOM.render(<a href=".">{v}</a>, document.getElementById("example")));