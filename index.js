import React from "react";
import { render } from "react-dom";

/* 
"Growing up with Looping and PropTypes" Exercise

OBJECTIVES:
1) Replace the <option> tags for the dropdown with your own list.

2) If the list is short, display a message asking for more items. If the list is long, show a message stating how long the list is.

3) Set up a default value for the prop you set up in step 1)

Hints:
- Review the docs for default values to see what API to use for default values https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values 
- set an array as the default value: ["I WANT TO BE ME"]
- verify the default value works by rendering <List /> without any proptypes

4) Set up the following PropTypes for <List />:
- array prop set up in 1) should be an array, and should be required
- "cfg" prop that takes an object with the shape: {color: 'red', size: 10}. This prop is optional.

Hints:
- import propTypes
- Review docs if needed for the API https://reactjs.org/docs/typechecking-with-proptypes.html
- verify via the console that the props throw errors when the wrong types are passed in

*/

function List() {
  return (
    <div>
      <h3>Q: Who do you want to be when you grow up?</h3>
      <select>
        <option>Fawkes the Phoenix</option>
      </select>
    </div>
  );
}

render(<List />, document.getElementById("my-app"));