/**
 * name: Bryce Kwon
 * version: v1.1.1
 * 
 * sections:
 *      -> 0100 - Startup
 *      -> 0200 - Geolocation / Language / Locale
 *      -> 0300 - Telemetry / Studies / Reports
 *      -> 0400 - Block Implicit Outbounds
 *      -> 0500 - Internet Protocols
 *      -> 0600 - Location Bar / Search Bar
 *      -> 0700 - Passwords
 *      -> 0800 - Disk Cleaning
 *      -> 0900 - Plugins / Media / WebRTC
 *      -> 1000 - Privacy Protection
 *      -> 1100 - Shutdown / Sanitization
 *      -> 1200 - Miscellaneous
 *      -> 1300 - To Categorize
 */


/********** [ SECTION 0100 ] - STARTUP **********/

/* 0101: disable check for default browser */
user_pref("browser.shell.checkDefaultBrowser", false);

/* 0102: set default start page to Firefox Home */
user_pref("browser.startup.page", 1);

/* 0103: set default new window page to Firefox Home */
user_pref("browser.startup.homepage", "about:home");

/* 0104: set default new tab page to "Firefox Home" */
user_pref("browser.newtabpage.enabled", true);

/* 0105: clear default top sites on Firefox Home */
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);

/* 0106: disable sponsored content on Firefox Home */
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);

/* 0107: disable other sponsored content */
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);

/* 0108: disable about:config warning */
user_pref("browser.aboutConfig.showWarning", false);


/********** [ SECTION 0200 ] - GEOLOCATION / LANGUAGE/ LOCALE **********/

/* 0201: set geolocation service provider to Mozilla (from Google) */
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

/* 0202: disable OS's geolocation services (Macintosh) */
user_pref("geo.provider.use_corelocation", false);

/* 0203: disable region updates */
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

/* 0204: set search region */
user_pref("browser.search.region", "US");

/* 0205: set preferred language for displaying pages */
user_pref("intl.accept_languages", "en-US, en");

/* 0206: set en-US locale regardless of system or region locale */
user_pref("javascript.use_us_english_locale", true);


/********** [ SECTION 0300 ] - TELEMETRY / STUDIES / REPORTS **********/

/* 0301: disable personalized recommendations in about:addons */
user_pref("browser.discovery.enabled", false);

/* 0302: disable recommendations in about:addons */
user_pref("extensions.getAddons.showPane", false);

/* 0303: disable recommendations in Extensions and Themes */
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/* 0304: disable new data submission */
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* 0305: disable health reports */
user_pref("datareporting.healthreport.uploadEnabled", false);

/* 0306: disable telemetry */
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

/* 0307: disable telemetry coverage */
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

/* 0308: disable omni.ja and other files check */
user_pref("corroborator.enabled", false);

/* 0309: disable PingCentre telemetry */
user_pref("browser.ping-centre.telemetry", false);

/* 0310: disable Firefox Home telemetry */
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/* 0311: disable WebVTT logging and test events */
user_pref("media.webvtt.debug.logging", false);
user_pref("media.webvtt.testing.events", false);

/* 0312: disable Firefox studies */
user_pref("app.shield.optoutstudies.enabled", false);

/* 0313: disable Normandy */
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/* 0314: disable Firefox crash reports */
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");

/* 0315: disable Captive Portal detection */
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

/* 0316: disable Network Connectivity checks */
user_pref("network.connectivity-service.enabled", false);

/* 0317: disable send content blocking log to about:protections */
user_pref("browser.contentblocking.database.enabled", false);

/* 0318: disable milestone with certain number of trackers blocked */
user_pref("browser.contentblocking.cfr-milestone.enabled", false);

/* 0319: disable content blocking reports */
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);

/* 0320: disable sending additional analytics to web servers */
user_pref("beacon.enabled", false);

/* 3021: disable extension suggestions */
user_pref("extensions.webservice.discoverURL", "");


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

/* 0512: set secure DNS to increased protection */
user_pref("doh-rollout.disable-heuristics", true);
user_pref("network.trr.mode", 3);
// user_pref("network.trr.mode", 5);

/* 0513: control when to send a cross-origin referer */
user_pref("network.http.referer.XOriginPolicy", 2);

/* 0514: control the amount of cross-origin information to send */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* 0515: enforce no referer spoofing */
user_pref("network.http.referer.spoofSource", false);

/* 0516: set Punycode in Internationalized Domain Names */
user_pref("network.IDN_show_punycode", true);


/********** [ SECTION 0600 ] - LOCATION BAR / SEARCH BAR **********/

/* 0601: disable live search suggestions */
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

/* 0602: disable location bar from making contextual suggestions */
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);

/* 0603: disable location bar from making speculative connections */
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/* 0604: disable location bar suggestion types */
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);

/* 0605: disable location bar shortcuts */
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.bookmarks", false);

/* 0606: disable location bar dropdown */
user_pref("browser.urlbar.maxRichResults", 0);

/* 0607: disable location bar autofill */
user_pref("browser.urlbar.autoFill", false);

/* 0609: disable Merino */
user_pref("browser.urlbar.merino.enabled", false);

/* 0610: disable engine suggestions */
user_pref("browser.urlbar.suggest.engines", false);

/* 0611: disable urlbar trending search suggestions */
user_pref("browser.urlbar.trending.featureGate", false);

/* 0806: disable urlbar suggestions ***/
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);


/********** [ SECTION 0700 ] - PASSWORDS **********/

/* 0701: disable password saving */
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);

/* 0702: disable password alerts */
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");

/* 0703: disable auto-filling username and password */
user_pref("signon.autofillForms", false);

/* 0704: disable formless capture for Password Manager */
user_pref("signon.formlessCapture.enabled", false);

/* 0705: limit HTTP authentication credential dialogs */
user_pref("network.auth.subresource-http-auth-allow", 1);

/* 0706: disable Firefox Relay feature */
user_pref("signon.firefoxRelay.feature", "disabled");

/********** [ SECTION 0800 ] - DISK CLEANING **********/

/* 0801: disable disk cache */
user_pref("browser.cache.disk.enable", false);

/* 0802: disable media cache in private browsing */
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);

/* 0803: disable storing extra session data */
user_pref("browser.sessionstore.privacy_level", 2);

/* 0804: disable automatic Firefox start and session restore after reboot */
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("browser.sessionstore.resume_from_crash", false);


/********** [ SECTION 0900 ] - PLUGINS / MEDIA / WEBRTC **********/

/* 0901: disable WebRTC */
user_pref("media.peerconnection.enabled", false);

/* 0902: force a single network interface for ICE candidate generation */
user_pref("media.peerconnection.ice.default_address_only", true);

/* 0903: disable Digital Rights Management content */
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

/* 0904: disable Content Decryption Module */
user_pref("media.gmp-widevinecdm.enabled", false);

/* 0905: disable autoplay */
user_pref("media.autoplay.default", 5);


/********** [ SECTION 1000 ] - PRIVACY PROTECTION **********/

/* 1001: enable Enhanced Tracking Protection in strict mode */
user_pref("browser.contentblocking.category", "custom");

/* 1002: enable Firefox Containers */
/* 1002: disable Firefox Containers [Not needed after Total Cookie Protetion] */
user_pref("privacy.userContext.enabled", false);
user_pref("privacy.userContext.ui.enabled", false);

/* 1004: spoof hardware concurrency */
user_pref("memory.report_concurrency", 2);
user_pref("dom.maxHardwareConcurrency", 2);

/* [DEPRECATED v1.1.0] 1005: limit system font visibility */
// user_pref("layout.css.font-visibility.private", 1);
// user_pref("layout.css.font-visibility.standard", 1);
// user_pref("layout.css.font-visibility.trackingprotection", 1);

/* 1006: enforce links targeting new windows to open in new tabs */
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

/* 1007: disable Web Graphics Library */
user_pref("webgl.disabled", true);

/* 1008: enable Do Not Track header */
user_pref("privacy.donottrackheader.enabled", true);

/* 1009: set new window size rounding max values */
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

/* 1010: EXPERIMENTAL: enable Firefox Resist Fingerprinting */
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);

/* 1011: disable using system color themes */
user_pref("browser.display.use_system_colors", false);


/********** [ SECTION 1100 ] - SHUTDOWN / SANTIZATION **********/

/* 1101: enable Firefox to clear items on shutdown */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/* 1102: set what items to clear on shutdown */
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);

/* 1103: set what items to clear manually */
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.offlineApps", true);

/* 1104: set default "time range to clear" to everything */
user_pref("privacy.sanitize.timeSpan", 0);


/********** [ SECTION 1200 ] - MISCELLANEOUS **********/

/* 1201: prevent accessibility services from accessing Firefox */
user_pref("accessibility.force_disabled", 1);

/* 1202: remove temporary files opened with external applications  */
user_pref("browser.helperApps.deleteTempFileOnExit", true);

/* 1203: disable UI Tour backend */
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

/* 1204: disable middle mouse click from opening links from clipboard */
user_pref("middlemouse.contentLoadURL", false);

/* 1205: remove special permissions for certain Mozilla domains */
user_pref("permissions.manager.defaultsUrl", "");

/* 1206: remove webchannel whitelist */
user_pref("webchannel.allowObject.urlWhitelist", "");

/* 1207: disable PDFJS scripting */
user_pref("pdfjs.enableScripting", false);

/* [DEPRECATED v1.1.0] 1208: disable permissions delegation */
// user_pref("permissions.delegation.enabled", false);

/* 1209: disable check for Save card and address to Firefox checkboxes */
user_pref("dom.payments.defaults.saveAddress", false);
user_pref("dom.payments.defaults.saveCreditCard", false);

/* 1210: disable remote debugging */
user_pref("devtools.debugger.remote-enabled", false);

/* 1211: enforce Firefox extensions blocklist */
user_pref("extensions.blocklist.enabled", true);

/* 1212: disable welcome notices */
user_pref("browser.startup.homepage_override.mstone", "ignore");

/* 1213: disable spell check */
user_pref("layout.spellcheckDefault", 0);

/* 1214: disable "open with" download dialog */
user_pref("browser.download.forbid_open_with", true);

/* 1215: disable Form Autofill */
user_pref("browser.formfill.enable", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

/* 1216: disbale Firefox Pocket */
user_pref("extensions.pocket.enabled", false);

/* 1217: disable picture-in-picture video controls */
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("media.hardwaremediakeys.enabled", false);

/* 1218: disable mailto handler */
user_pref("network.protocol-handler.external.mailto", false);

/* 1219: disable adding downloads to the system's recent documents list */
user_pref("browser.download.manager.addToRecentDocs", false);

/* 1220: disable downloads panel opening on every download */
user_pref("browser.download.alwaysOpenPanel", false);

/* 1221: enable user interaction for handling new mimetypes */
user_pref("browser.download.always_ask_before_handling_new_types", true);

/* 1222: display advanced information on Insecure Connection warning pages /*/
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/* 1223: prevent scripts from moving and resizing open windows */
user_pref("dom.disable_window_move_resize", true);

/* 1224: disable permission access to camera */
user_pref("permissions.default.camera", 2);

/* 1225: disable permission access to desktop notifications */
user_pref("permissions.default.desktop-notification", 2);

/* 1226: disable permission access to location */
user_pref("permissions.default.geo", 2);

/* 1227: disable permission access to microphone */
user_pref("permissions.default.microphone", 2);

/* 1228: disable permission access to virtual reality */
user_pref("permissions.default.xr", 2);

/* 1229: remove temporary files opened with an external application */
user_pref("browser.download.start_downloads_in_tmp_dir", true);


/********** [ SECTION 1300 ] - TO CATEGORIZE **********/

/* TBD: disable Firefox Safe Browsing */
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

/* TBD: disable Firefox Safe Browsing checks for downloads */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

/* TBD: disable Firefox Safe Browsing checks for unwanted software */
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/* TBD: disable "ignore this warning" on Firefox Safe Browsing warnings */
// user_pref("browser.safebrowsing.allowOverride", false);
