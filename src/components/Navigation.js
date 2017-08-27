import React from 'react';

var Navigation = React.createClass({
    render: function() {
      return (
        <div id="navigation" className="Navigation">
            <nav>
                <ul>
                    <li>Browse</li>
                    <li>My list</li>
                    <li>Top picks</li>
                    <li>Recent</li>
                </ul>
            </nav>
        </div>
      );
    }
  });

  // allows module to be imported by App.js
  export default Navigation;