export const environment = {
    production: false,
    apiBaseUrl: "https://liuqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "913f18ec-7f26-4c5f-a816-784fe9a58edd",
        clientId: "8387c73f-2378-4306-93be-1424e1dd98d6",
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
};
