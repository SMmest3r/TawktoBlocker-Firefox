browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.create({
        url: "https://smmest3r.dev"
    });
});