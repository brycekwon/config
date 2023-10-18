/**
 * name: Bryce Kwon
 * version: v1.0.0
 * 
 * sections:
 *      -> 0100: Startup
 *      -> 0200: Geolocation / Language / Locale
 *      -> 0300: Telemetry / Studies / Reports
 */


/********** [ SECTION 0100 ] - STARTUP **********/

/* 0101: disable check for default mail client */
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mail.shell.checkDefaultMail", false);

/* 0102: disable default start page */
user_pref("mailnews.start_page.enabled", false);

/* 0103: disable default tab page */
user_pref("browser.newtabpage.enabled", false);

/* 0104: disable "Know your rights" notification on profile load */
user_pref("mail.rights.override", true);

/* 0105: disable start page welcome */
user_pref("mailnews.start_page_override.mstone", "ignore");

/* 0106: disable account provisioning */
user_pref("mail.provider.enabled", false);

/* 0107: show full email instead of just name */
user_pref("mail.showCondensedAddresses", false);

/* 0108: disable filelink for large attachments feature */
user_pref("mail.cloud_files.enabled", false);

/* 0109: disable address book collection */
user_pref("mail.collect_email_address_outgoing", false);

/* 0110: avoid information leakage in reply header */
user_pref("mailnews.reply_header_type", 1);

/* 0111: sanitize date header to convert date to UTC and round to closest minute */
// user_pref("mail.sanitize_date_header", true);



/* force encoding in reply to be in default charset */
user_pref("mailnews.reply_in_default_charset", true);

/* prefer fallback encoding as UTF-8 */
user_pref("intl.fallbackCharsetList.ISO-8859-1", "UTF-8");

/* set encoding of incoming mail ***/
user_pref("mailnews.view_default_charset", "UTF-8");

/* set encoding of outgoing mail ***/
user_pref("mailnews.send_default_charset", "UTF-8");

/* disable phishing/scamming detection (done server side) */
user_pref("mail.phishing.detection.enabled", false);

user_pref("mail.compose.attachment_reminder", false);
user_pref("mail.compose.autosaveinterval", 10);

user_pref("mail.imap.mime_parts_on_demand", true);
user_pref("mail.imap.ssl.show_insecure_images", false);
user_pref("mail.rights.version", 1);
// user_pref("mail.provider.enabled", false);

user_pref("mail.chat.enabled", false);
user_pref("mail.cloud_files.enabled", false);
user_pref("mail.cloud_files.learn_more_url", "");

user_pref("mail.collect_addressbook", false);
user_pref("mail.collect_email_address_outgoing", false);
user_pref("mail.spam.version", 1);
user_pref("mail.store_conversion_enabled", true);


/********** [ SECTION 0200 ] - GEOLOCATION / LANGUAGE / LOCALE *********/

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

/* 0207: set spellcheck dictionary to English */
user_pref("spellchecker.dictionary", "en-US");


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

/* 0308: disable Firefox studies */
user_pref("app.shield.optoutstudies.enabled", false);

/* 0309: disable Normandy */
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/* 0310: disable Firefox crash reports */
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");

/* 0311: disable Captive Portal detection */
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

/* 0312: disable Network Connectivity checks */
user_pref("network.connectivity-service.enabled", false);

/* 0313: disable sending additional analytics to web servers */
user_pref("beacon.enabled", false);

/* 0314: disable auto-configuration */
user_pref("mailnews.auto_config.guess.enabled", false);
user_pref("mailnews.auto_config.fetchFromISP.enabled", false);
user_pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
user_pref("mailnews.auto_config.fetchFromExchange.enabled", false);
user_pref("mailnews.auto_config_url", "");
user_pref("mailnews.auto_config.addons_url","");
