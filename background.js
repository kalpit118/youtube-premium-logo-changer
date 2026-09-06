/**
 * YouTube Premium Extension Background Service Worker (Manifest V3)
 */

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Initialize default storage values
    chrome.storage.local.set({
      enabled: true,
      text: 'Premium',
      style: 'vector'
    });
    console.log('YouTube Premium Logo Changer installed successfully.');
  }
});
