/**
 * name: Bryce Kwon
 * version: v1.1.0
 * 
 * sections:
 *      -> 0100: Startup
 *      -> 0200 - Geolocation / Language / Locale
 *      -> 0300 - Telemetry / Studies / Reports
 *      -> 0400 - Block Implicit Outbounds
 *      -> 0500 - Internet Protocols
 *      -> 0600 - Plugins / Media / WebRTC
 *      -> 0700 - Privacy Protection
 *      -> 0800 - Shutdown / Sanitization
 *      -> 0900 - Composition
 *      -> 1000 - Viewing
 *      -> 1100 - RSS Feeds
 *      -> 1200 - Miscellaneous
 *      -> 1300 - To Categorize
 */


/********** [ SECTION 0100 ] - STARTUP **********/

/* 0101: disable check for default client */
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mail.shell.checkDefaultMail", false);

/* 0102: disable default start page */
user_pref("mailnews.start_page.enabled", false);
user_pref("mailnews.start_page.url", "");

/* 0103: disable start page welcome */
user_pref("mailnews.start_page_override.mstone", "ignore");

/* 0104: disable default new tab page */
user_pref("browser.newtabpage.enabled", false);

/* 0105: disable "Know your rights" notification on profile load */
user_pref("mail.rights.override", true);

/* 0106: disable mail account provisioning */
user_pref("mail.provider.enabled", false);

/* 0107: disable address book collection on outgoing email */
user_pref("mail.collect_email_address_outgoing", false);

/* 0108: Only use email addresses, without their display names (TESTING) */
user_pref("extensions.cardbook.useOnlyEmail", true);

/* 0109: set spellcheck dictionary to English */
user_pref("spellchecker.dictionary", "en-US");

/* 0110: disable UI instrumentation (TESTING) */
user_pref("mail.instrumentation.postUrl", "");
user_pref("mail.instrumentation.askUser", false);
user_pref("mail.instrumentation.userOptedIn", false);

/* 0111: Disable auto-configuration */
 user_pref("mailnews.auto_config.guess.enabled", false);
 user_pref("mailnews.auto_config.fetchFromISP.enabled", false);
 user_pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
 user_pref("mailnews.auto_config.fetchFromExchange.enabled", false);
 user_pref("mailnews.auto_config_url", "");
 user_pref("mailnews.auto_config.addons_url","");

/* 0112: set encoding of incoming mail to UTF-8 */
user_pref("mailnews.view_default_charset", "UTF-8");

/* 0113: set encoding of outgoing mail to UTF-8 */
user_pref("mailnews.send_default_charset", "UTF-8");

/* 0114: set fallback encoding to UTF-8 */
user_pref("intl.fallbackCharsetList.ISO-8859-1", "UTF-8");

/* 0115: force reply encodings to be in default charset */
user_pref("mailnews.reply_in_default_charset", true);

/* 0116: disable phishing and scam detection (done server side) */
user_pref("mail.phishing.detection.enabled", false);
user_pref("mail.phishing.detection.ipaddresses", false);
user_pref("mail.phishing.detection.mismatched_hosts", false);
user_pref("mail.phishing.detection.disallow_form_actions", false);

/* 0117: Don't hide cookies and passwords related (advanced?) buttons ***/
user_pref("pref.privacy.disable_button.view_cookies", false);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
user_pref("pref.privacy.disable_button.view_passwords", false);


/********** [ SECTION 0200 ] - GEOLOCATION / LANGUAGE / LOCALE *********/

/* 0201: set geolocation service provider to Mozilla (from Google) */
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

/* 0202: disable OS's geolocation services (Macintosh) */
user_pref("geo.provider.use_corelocation", false);

/* 0203: disable region updates */
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

/* 0205: set preferred language for displaying pages */
user_pref("intl.accept_languages", "en-US, en");

/* 0206: set en-US locale regardless of system or region locale */
user_pref("javascript.use_us_english_locale", true);


/********** [ SECTION 0300 ] - TELEMETRY / STUDIES / REPORTS *********/

/* 0301: disable recommendations in about:addons */
user_pref("extensions.getAddons.showPane", false);

/* 0302: disable recommendations in Extensions and Themes */
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/* 0303: disable new data submission */
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* 0304: disable health reports */
user_pref("datareporting.healthreport.uploadEnabled", false);

/* 0305: disable telemetry */
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

/* 0306: disable telemetry coverage */
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

/* 0307: disable PingCentre telemetry */
user_pref("browser.ping-centre.telemetry", false);

/* 0308: disable Thunderbird studies */
user_pref("app.shield.optoutstudies.enabled", false);

/* 0309: disable Normandy */
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/* 0310: disable Thunderbird crash reports */
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");

/* 0311: disable Captive Portal detection */
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

/* 0312: disable Network Connectivity checks */
user_pref("network.connectivity-service.enabled", false);

/* 0313: disable sending additional analytics to web servers */
user_pref("beacon.enabled", false);

/* 0314: enforce no submission of backlogged crash report */
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);


/********** [ SECTION 0400 ] - BLOCK IMPLICIT OUTBOUNDS **********/

/* 0401: disable link prefetching */
user_pref("network.prefetch-next", false);

/* 0402: disable DNS prefetching */
user_pref("network.dns.disablePrefetch", true);

/* 0403: disable predictor */
user_pref("network.predictor.enabled", false);

/* 0404: disable mouseover connections to linked server */
user_pref("network.http.speculative-parallel-limit", 0);

/* 0405: disable mouseover speculative connections */
user_pref("browser.places.speculativeConnect.enabled", false);

/* 0406: do not refresh or reload pages when tab/window is not active */
user_pref("browser.meta_refresh_when_inactive.disabled", true);


/********** [ SECTION 0500 ] - INTERNET PROTOCOLS **********/

/* 0501: disable IPv6 */
user_pref("network.dns.disableIPv6", true);

/* 0502: set procy server to do DNS lookups when using SOCKS */
user_pref("network.proxy.socks_remote_dns", true);

/* 0503: disable using Uniform Naming Convention paths */
user_pref("network.file.disable_unc_paths", true);

/* 0504: disable GIO as a potential proxy bypass vector */
user_pref("network.gio.supported-protocols", "");

/* 0505: require safe-negotiation */
user_pref("security.ssl.require_safe_negotiation", true);

/* 0506: set OCSP fetch failures to hard-fail */
user_pref("security.OCSP.require", true);

/* 0507: disable TLS1.3 0-RTT */
user_pref("security.tls.enable_0rtt_data", false);

/* 0508: enable strict Public Key Pinning */
user_pref("security.cert_pinning.enforcement_level", 2);

/* 0509: enable CRLite */
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/* 0510: enable HTTPS-Only mode in all windows */
user_pref("dom.security.https_only_mode", true);

/* 0511: disable HTTP background requests */
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/* 0513: control when to send a cross-origin referer */
user_pref("network.http.referer.XOriginPolicy", 2);

/* 0514: control the amount of cross-origin information to send */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* 0515: enforce no referer spoofing */
user_pref("network.http.referer.spoofSource", false);

/* 0516: set Punycode in Internationalized Domain Names */
user_pref("network.IDN_show_punycode", true);


/********** [ SECTION 0600 ] - PLUGINS / MEDIA / WEBRTC **********/

/* 0601: disable WebRTC */
user_pref("media.peerconnection.enabled", false);

/* 0602: force a single network interface for ICE candidate generation */
user_pref("media.peerconnection.ice.default_address_only", true);

/* 0603: disable Digital Rights Management content */
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

/* 0604: disable Content Decryption Module */
user_pref("media.gmp-widevinecdm.enabled", false);

/* 0605: disable autoplay */
user_pref("media.autoplay.default", 5);


/********** [ SECTION 0700 ] - PRIVACY PROTECTION **********/

/* 0701: disable WebGL */
user_pref("webgl.disabled", true);

/* 0702: show a prompt when opening a link in external applications ***/
user_pref("security.external_protocol_requires_permission", true);

/* 0703: disable memory cache */
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.capacity", 0);

/* 0704: enable Do Not Track header */
user_pref("privacy.donottrackheader.enabled", true);

/* 0705: set new window size rounding max values */
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

/* 0706: enable Firefox Resist Fingerprinting */
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);


/********** [ SECTION 0800 ] - SHUTDOWN / SANTIZATION **********/

/* 0801: enable Firefox to clear items on shutdown */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/* 0802: set what items to clear on shutdown */
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);

/* 0803: set what items to clear manually */
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.offlineApps", true);

/* 0804: set default "time range to clear" to everything */
user_pref("privacy.sanitize.timeSpan", 0);


/********** [ SECTION 0900 ] - COMPOSITION **********/

/* 0901: compose all emails in plaintext unless explicitly overwritten (holding shift + new message) */
user_pref("mail.html_compose", false);
user_pref("mail.identity.default.compose_html", false);

/* 0902: send emails as HTML if HTML components inside. Otherwise, plaintext */
user_pref("mail.default_send_format", 1);

/* 0903 disable inline attachments */
user_pref("mail.inline_attachments", false);

/* 0904: disable link previews */
user_pref("mail.compose.add_link_preview", false);

/* 0905: disable attachment reminder */
user_pref("mail.compose.attachment_reminder", false);

/* 0906: set mail composer autosave interval to every 10 minutes */
user_pref("mail.compose.autosaveinterval", 10);

/* 0907: avoid information leakage in reply header */
user_pref("mailnews.reply_header_type", 2);

/* 0908:  disable filelink for large attachments */
user_pref("mail.cloud_files.enabled", false);


/********** [ SECTION 1000 ] - VIEWING **********/

/* 1001: disable javascript */
user_pref("javascript.enabled", false);

/* 1002: disable media source extensions */
user_pref("media.mediasource.enabled", false);

/* 1003: disable remote content loading */
user_pref("mailnews.message_display.disable_remote_image", true);

/* 1004: show full email instead of just name */
user_pref("mail.showCondensedAddresses", false);


/********** [ SECTION 1100 ] - RSS Feeds **********/

/* 1101: load content based url in browser (TESTING) */
user_pref("rss.show.content-base", 3);

/* 1102: show summary on select (TESTING) */
user_pref("rss.show.summary", 1);

/* 1103: take no action in additional web display (TESTING) */
user_pref("rss.message.loadWebPageOnSelect", 0);


/********** [ SECTION 1200 ] - MISCELLANEOUS **********/

/* 1201: prevent accessibility services from accessing Firefox */
user_pref("accessibility.force_disabled", 1);

/* 1202: remove temporary files opened with external applications  */
user_pref("browser.helperApps.deleteTempFileOnExit", true);

/* 1203: disable UI Tour backend */
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

/* 1204: disable Form Autofill */
user_pref("browser.formfill.enable", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);


/********** [ SECTION 1300 ] - TO CATEGORIZE **********/

/* TBD: disable Thunderbird Safe Browsing */
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

/* TBD: disable Thunderbird Safe Browsing checks for downloads */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

/* TBD: disable Thunderbird Safe Browsing checks for unwanted software */
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/* TBD: disable "ignore this warning" on Thunderbird Safe Browsing warnings */
// user_pref("browser.safebrowsing.allowOverride", false);
