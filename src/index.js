import React from 'react';
import { render } from 'react-dom';
import ReactWebChat from 'botframework-webchat/lib/index-minimal';
import { createDirectLine } from 'botframework-webchat';

// render(<div>Hello, World!</div>, document.getElementById('app'));

(async function () {
  const res = await fetch('https://webchat-mockbot2.azurewebsites.net/api/token/directline', { method: 'POST' });
  const { token } = await res.json();
  const directLine = createDirectLine({ token });

  render(<ReactWebChat className="webchat" directLine={directLine} />, document.getElementById('app'));
})();
