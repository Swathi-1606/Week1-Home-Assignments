function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Chrome browser is launched");
    }
    else {
        console.log(browserName + " is launched");
    }
}
launchBrowser("Chrome")
launchBrowser("Microsoft Edge")

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("The Testtype is smoke");
            break;
        case "sanity":
            console.log("The TestType is sanity");
            break;
        case "regression":
            console.log("The TestType is regression");
            break;
        default:
            console.log("The Testtype is smoke");

    }

}
runTests("regression");
runTests("retest");