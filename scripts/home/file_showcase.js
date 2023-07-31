$.getJSON("./contents/homepageShowcase/config.json", function(data) {
    let showcase_title = new Array();
    let showcase_subtitle = new Array();
    let showcase_link = new Array();
    showcase_title[0] = document.getElementById("homepageCenterShowcaseTitle_Title");
    showcase_subtitle[0] = document.getElementById("homepageCenterShowcaseTitle_Subtitle");
    showcase_link[0] = document.getElementById("homepageCenterShowcase_Link");
    showcase_title[1] = document.getElementById("homepageLeftShowcaseTitle_Title");
    showcase_subtitle[1] = document.getElementById("homepageLeftShowcaseTitle_Subtitle");
    showcase_link[1] = document.getElementById("homepageLeftShowcase_Link");
    showcase_title[2] = document.getElementById("homepageRightShowcaseTitle_Title");
    showcase_subtitle[2] = document.getElementById("homepageRightShowcaseTitle_Subtitle");
    showcase_link[2] = document.getElementById("homepageRightShowcase_Link");
    $.each(data, function(index, info) {
        showcase_title[index].innerHTML = info["title"];
        showcase_subtitle[index].innerHTML = info["subtitle"];
        showcase_link[index].href = info["url"];
    });
});