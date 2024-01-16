const rules = [{
    urls: ["*://*.tawk.to/*"],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"],
}];

function blockRequest(details) {
    return {cancel: true};
}

browser.webRequest.onBeforeRequest.addListener(
    blockRequest,
    rules,
    ["blocking"]
);