# Ad Minus - A Chrome extension for taming obtrusive ads.

[Ad Minus](https://chrome.google.com/webstore/detail/ad-minus/iogaabojnbehlhfdigojaopppipmlmjm/related) is a Chrome browser extension that attempts to make obtrusive ads behave in a more sane fashion.

Chrome web store link: [https://chrome.google.com/webstore/detail/ad-minus/iogaabojnbehlhfdigojaopppipmlmjm/related](https://chrome.google.com/webstore/detail/ad-minus/iogaabojnbehlhfdigojaopppipmlmjm/related)

## Philosophy
This extension does not take the typical approach to ad mitigation. Ad placement is a fair and legitimate approach to monetizing a site. Ad Minus tries to keep ad behavior sane while preserving a site owner's ability to to place reasonable ads and does not hide or disable most ads. 

### So if it doesn't hide ads, what does it do?
When ads become overly obtrusive, Ad Minus tries to correct that behavior. For example, it will not hide banner ads on a page but, on certain pay-wall style pop-ups, will prevent you from being redirected when you dismiss the ad.

## ToDo:
- Documentation
- Add build script.
- Add general configuration for:
  - Configure which sites the extension loads on. Right now it's hard-coded.
  - Auto-detect when to show page icon. Right now, it always shows.
- Support dismissal of multiple ad platforms. Right now it supports only one.
- Add comments back into manifest... but strip them out in build script

