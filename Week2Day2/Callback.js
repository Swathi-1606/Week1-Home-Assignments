let browser="Chrome";
 
function checkBrowserVersion(callback){
    setTimeout(() => {
        callback(browser); 
    }, 2000);
    
}
function BrowserVersion(browser){
    console.log('Browser Version is '+ browser);
    
}

checkBrowserVersion(BrowserVersion);