var React = require('react');
var ListItem = require('./ListItem.jsx');

var = ingredientes = [{"id":1, "text":"queso"}, {"id":2, "text":"jamón"}, {"id":3, "text":"papas"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredientes.map(function(item) {
            return <ListItem key={item.id} ingrediente={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;