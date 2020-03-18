import React from "react";

const logout = ( props ) => {

  const handleLogoutClick = (event) => {
    event.preventDefault();
    props.user.logout();
  }
    return (
        <div onClick={e => handleLogoutClick(e)}>
            Logout
        </div>
    );
};

export default logout;