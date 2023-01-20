var React = require('react'); // node sintaxis para importar un módulo, para este caso el módulo react.
var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.ingrediente}</h4>
            </li>
        );
    }

});

module.exports = ListItem;