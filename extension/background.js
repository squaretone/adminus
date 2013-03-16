
// Checks if on the proper site
function matchSite(tabId, changeInfo, tab) {
  // show on www.omaha.com
  var match = /omaha.com/g;
  if (tab.url.search(match) > -1) {
    chrome.pageAction.show(tabId); // show icon
  }
};

// Add listenter to tab update event
chrome.tabs.onUpdated.addListener(matchSite);
chrome.pageAction.onClicked.addListener(function(tabs,tab) {
  var tabID = arguments[0].id;
  chrome.tabs.sendMessage(tabID, {proprName: 'proprName', newValue: 'newValue'}, function(resp){
    console.log('callback');
  });
});
