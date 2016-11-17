# Pinch Test

This example reproduces a bug found by @dasilvacontin in hammer.js. The outer div has a hammer `pinch` and `pinchend` listener attached. The inner div has no event listener.

When the user starts with one finger in each div, then lifts both fingers simultaneously in the inner div, the `pinchend` event is not fired.

## Running it

1. npm install
2. ionic run ios --device
