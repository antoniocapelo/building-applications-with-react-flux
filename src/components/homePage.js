'use strict';

var React = require('react');

/**
 * @jsx React.DOM
 */

var Home = React.createClass({

    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralight Administrations</h1>
                <p>React, React router and Flux for ultra-responsive web apps.</p>
            </div>
        );
    }

});

module.exports = Home;