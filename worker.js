// I am a separate file.
// WPR's injector currently skips me because I'm not text/html.
const randomValue = Math.random();
// Send the "leaked" entropy back to the main thread.
self.postMessage(randomValue);
