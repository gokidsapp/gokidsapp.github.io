const scriptsInEvents = {
  async GlobalVariable_Event3_Act5(runtime, localVars) {
    console.log("Adv is Active");
  },

  async GlobalVariable_Event4_Act4(runtime, localVars) {
    console.log("Adv Not Active");
  },

  async LoadingEvents_Event5_Act1(runtime, localVars) {
    var gameName = "numpuz classic";
    var domainName = document.referrer;
    if (domainName == "") {
      domainName = window.location.href;
    }
    var domain_parts = domainName.split("://");
    var domain_subparts = domain_parts[1].split("/");
    var hostNames = domain_subparts[0];
    //window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Loader", "_blank");
  },

  async HomepageEvents_Event19_Act1(runtime, localVars) {
    var gameName = "numpuz classic";
    var domainName = document.referrer;
    if (domainName == "") {
      domainName = window.location.href;
    }
    var domain_parts = domainName.split("://");
    var domain_subparts = domain_parts[1].split("/");
    var hostNames = domain_subparts[0];
    //window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Title", "_blank");
  },
};

self.C3.ScriptsInEvents = scriptsInEvents;
