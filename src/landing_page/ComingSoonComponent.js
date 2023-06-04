import './ComingSoon.css';

function ComingSoonComponent(){
    return<div className="Coming-soon">
        <ComingSoon/>
        <MyText/>
        <MyButton/>
    </div>
}

function ComingSoon(){
    return <div className="Coming-soon-text">
        <p>Coming Soon</p>
    </div>
}


function MyText(){
    return <div className="Get-notified-text">
        <p>Get notified when we launch on web.</p>
    </div>


}

function MyButton(){
    return <button>
        <a
            href="https://play.google.com/store/apps/details?id=com.risma.palettelab"
            target="_blank"
            rel="noopener noreferrer"
        >
            Download App
        </a>

    </button>
}

export default  ComingSoonComponent