import React from 'react';

const Register = () => {
  return (
    <main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Username</label>
    </div>
    <br />
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <br />
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
  </form>
</main>

  )
}

export default Register
