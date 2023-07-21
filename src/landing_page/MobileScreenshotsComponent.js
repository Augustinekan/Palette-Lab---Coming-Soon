import screenshots from "./screenshots.svg";

function MobileScreenshotsComponent(){
    return <div className="mobile-screenshots">
      <ScreenShotImages/>
       <GetNotifiedText/>
    </div>
}

function GetNotifiedText(){
    return  <div className="Get-notified-text">
        <p>Available on Google Play Store.</p>
    </div>
}
function  ScreenShotImages(){
    return <div >
        <img className="screen-shot-images" src={screenshots}/>

    </div>
}


export default MobileScreenshotsComponent