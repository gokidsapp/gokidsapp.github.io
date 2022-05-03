window.idAsyncInit = function () {
  // use an id.net event to wait until after init
  ID.Event.subscribe("id.init", function () {
    // use jquery to call methods on clicks
    console.log("y8 SDK Loaded");
    ID.getLoginStatus(idCallback);
    ID.Protection.isBlacklisted(function (blacklisted) {
      if (blacklisted == true) {
        isBlacklisted = 1;
      } else {
        isBlacklisted = 0;
      }
      console.log("[BLACKLIST] : " + isBlacklisted);
    });
    ID.Protection.isSponsor(function (sponsor) {
      isSponsor = sponsor;
      if (sponsor == true) {
        isSponsor = 1;
      } else {
        isSponsor = 0;
      }
      console.log("[SPONSOR] : " + isSponsor);
    });
    ID.ads.init(193108); //change 1 to the correct item_id
  });
  // using an optional callback to capture data on the client
  var userName;
  var idCallback = function (response) {
    if (response) {
      console.log(response);
      console.log(response.status);
      console.log("Working");
      if (response.status === "ok") {
        userName = response.authResponse.details.nickname;
        sUserName = userName;
        isLogin = 1;
      } else {
        console.log("Login");
      }
    }
  };
  ID.init({
    //Add your app Id here
    appId: "60c094c01f76dd58bb2ea19b",
  });
};

function showAds() {
  console.log("showAds");
  try {
    console.log("try Showing Ads");
    gse.pause();
    ID.ads.display(function () {
      console.log("resume Game 2");
      gse.unpause();
    });
  } catch (e) {
    console.log(e + " Error Showing Ads 1");
    gse.unpause();
  }
}
