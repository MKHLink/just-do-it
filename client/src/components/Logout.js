const Logout = (error) => {
    localStorage.clear()
    window.location.reload(true)
  }

export default Logout;
