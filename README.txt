This program is a browser extension that can perform targeted keylogging on certain sites, as well as general keylogging.
By default, inside the "manifest.json" file, the "matches" key (inside of "content_scripts") is set to "<all_urls>" ... this, however, can be changed to any URL.
For example, putting in "*://roblox.com/login" instead of "<all_urls>" will only target that site.

Furthermore, the script execution can be changed to a background process for general keylogging, which will allow the script to collect keys even when not on a specific URL.
This is not necessary, and is probably more likely to increase "spam" text, but it will not delete unsent text when going to a new URL.

Overall, the more you decrease the send time (down to 1), the more text the program will grab per site.  It will be messy and not well formatted, however.
Bot names are random numbers between 0 and 1, and keep track of users on a site (standard) or stay constant for an entire user session (background process).
The visible function of the extension will reside in "popup.html" and this file can be changed to create better trojans.

Only use this for testing purposes.

Enjoy :)