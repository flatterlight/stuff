//
//disable google safebrowsing stuff
pref("browser.safebrowsing.enabled",false);
pref("browser.safebrowsing.downloads.enabled",false);
pref("browser.safebrowsing.malware.enabled",false);
//set paper size
pref("print.postscript.paper_size","A4");
//disable auto fill for forms
pref("signon.autofillForms",false);
//disable firefox internal password safe
pref("signon.rememberSignons",false);
//disable import of root CAs from system
pref("security.certerrors.mitm.auto_enable_enterprise_roots",false);
pref("security.enterprise_roots.enabled",false);
//disable search suggestions
pref("browser.search.suggest.enabled",false);
//disable geolocation api
pref("geo.enabled", false);
//diable pocket integation
///old
pref("browser.pocket.enabled", false);
///new
pref("extensions.pocket.enabled", false);
///other pocket settings/endpoints
pref("extensions.pocket.site","localhost");
pref("extensions.pocket.api","loalhost");
pref("browser.newtabpage.activity-stream.discoverystream.endpoints","localhost");
//disable firefox hello
pref("loop.enabled", false);
// enable do not track header
pref("privacy.donottrackheader.enabled",true);
// disable the sending of information to Mozilla
pref("toolkit.telemetry.prompted", 2);
pref("toolkit.telemetry.rejected", true);
//Stability and performance reports.
pref("datareporting.healthreport.service.enabled",false);
pref("datareporting.healthreport.uploadEnabled",false);
// disable usage statistics.
pref("toolkit.telemetry.unified",false);
pref("toolkit.telemetry.enabled",false);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint","loaclhost");
// set minimum tls version
pref("security.tls.version.min", 2);
//delete last filename of printed document
pref("print.print_to_filename","");
