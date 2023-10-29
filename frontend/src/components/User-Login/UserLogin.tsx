import "./UserLogin.css"

const UserLogin = () => {
  return (
    <div className="login-container" >
        <div className="form-layout">
        <form method="post">
        <div className ="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" id="displayname" />
        </div>
        </form>
        </div>


    </div>
  )
}

export default UserLogin