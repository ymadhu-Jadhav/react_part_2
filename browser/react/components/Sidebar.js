'use strict';

import React from 'react';

const Sidebar = function () {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#">ALBUMS</a>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;