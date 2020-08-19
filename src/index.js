import React from 'react';
import { render } from 'react-dom';
import ReactWebChat, { createDirectLine } from 'botframework-webchat/lib/index-minimal'; // This will NOT load Speech SDK.
// import ReactWebChat, { createDirectLine } from 'botframework-webchat'; // This will load Speech SDK.

(async function () {
  const res = await fetch('https://webchat-mockbot2.azurewebsites.net/api/token/directline', { method: 'POST' });
  const { token } = await res.json();
  const directLine = createDirectLine({ token });

  render(<ReactWebChat className="webchat" directLine={directLine} />, document.getElementById('app'));
})();
