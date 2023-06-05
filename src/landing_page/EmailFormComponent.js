import './ComingSoon.css';

function EmailFormComponent(){
    return <div className="email-form-container">
      <div className="form-row">
          <EmailForm/>
          <NotifyMeButton/>
      </div>
    </div>
}

function EmailForm(){
    return  <form className="email-form">
        <input
            type="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
        />
    </form>
}

function NotifyMeButton(){
 return <button className="email-submit-button" >
     Notify Me
 </button>
}
export default EmailFormComponent