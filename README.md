# fxTwitterRewrite

Browser extension that waits for you to copy a link from twitter and replaces "twitter.com" with "fxtwitter.com" and "x.com" with "fixupx.com" to make use of the [FixTweet](https://github.com/FixTweet/FixTweet) service for better unfurling of links.

You can find the extension on the [Firefox Store Here.](https://addons.mozilla.org/en-US/firefox/addon/fxtwitter-link-rewrite/)

## Building

Update the version number in `manifest.json` and then run `web-ext build` to have the `web-ext` node package package the appropriate files to a new zip folder under the `web-ext-artifacts` directory, which can be uploaded to Mozilla for review!
