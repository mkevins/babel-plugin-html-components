/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

class SomeComponent extends Component {
	render() {
    return (
      <>
        <div>
          Some text, <span>some more in a span</span>
        </div>
        <div>
          <span>more in a span</span>
        </div>
        <div>And some more text here
          <span>more in a span</span>
        </div>
      </>
    );
	}
}

export default SomeComponent;
