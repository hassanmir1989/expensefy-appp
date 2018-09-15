import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>{props.blabla}</h1>
    </div>
)


const AdminMsg = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is the HOC Component</p> }
        
        <h1>{props.msgFrm}</h1>
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
       <div>
       {props.isAuthenticated ? <WrappedComponent/> : <h1>Please Log In</h1>}
       
       </div> 
    )
}


const WithAdminMsg = AdminMsg(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<WithAdminMsg isAdmin={false} msgFrm="from admin11" msg2="msg nmbr 2" msg3="msg3"/>,document.getElementById("works"))
ReactDOM.render(<AuthInfo isAuthenticated={true}/>,document.getElementById("works"))
