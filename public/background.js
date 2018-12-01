// Background scripts

// This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(() => {
//   console.log('This will run when a bookmark is created')
// });

// we need to have a Background Page that will manage your extension state.
// You can read about it here: https://developer.chrome.com/extensions/background_pages
// Then in the background page script you will need to listen when the tab is created with this piece of code:
chrome.tabs.onCreated.addListener((tab) => {
  console.log('chrome.tabs.onCreated: ', tab)
})

// onMessage
// Fired when a message is sent from either an extension process (by runtime.sendMessage) or a content script (by tabs.sendMessage).
// https://developer.chrome.com/extensions/runtime#event-onMessage
// chrome.runtime.onMessage.addListener(function callback)
chrome.runtime.onMessage.addListener((message, sender, responseCallback) => {
  console.log('message.greeting: ', message.greeting)
  responseCallback({ farewell: 'pong!' })
})
