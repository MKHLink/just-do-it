const Logout = (error) => {
    localStorage.removeItem('id_token');
    window.location.reload(true)
  }

export default Logout;
