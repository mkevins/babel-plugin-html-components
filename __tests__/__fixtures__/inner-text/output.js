import { Span } from "@wordpress/element";
import { Text } from "react-native";
import { Div } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

class SomeComponent extends Component {
  render() {
    return <>
        <Div><Text>
          Some text, </Text><Span><Text>some more in a span</Text></Span>
        </Div>
        <Div>
          <Span><Text>more in a span</Text></Span>
        </Div>
        <Div><Text>And some more text here
          </Text><Span><Text>more in a span</Text></Span>
        </Div>
      </>;
  }

}

export default SomeComponent;