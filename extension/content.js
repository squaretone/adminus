// loaded on every availalbe page
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    $('#gregbox-outer').hide().next().hide().next().hide().next().hide();
  }
);
