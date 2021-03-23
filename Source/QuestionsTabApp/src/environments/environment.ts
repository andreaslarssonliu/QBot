export const environment = {
    production: false,
    apiBaseUrl: "https://liuqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://liuqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "913f18ec-7f26-4c5f-a816-784fe9a58edd",
        clientId: "a0d453fe-ee0a-4c12-b084-531e73b065cc",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
