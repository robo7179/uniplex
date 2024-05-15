"use client"

import LiveCodes from 'livecodes/react';
import type { Playground } from 'livecodes';

const CodePlayground = () => {
  
  const options = {
    "appUrl": "https://v28.livecodes.io/",
    "import": "id/67iwenctecz",
    "height": "100%",
  };
  return <LiveCodes {...options}></LiveCodes>;
}

export default CodePlayground;