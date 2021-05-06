import './Card.css';
import React from 'react';

export default props => {
    const color = props.color || '#080';

    const cardStyle = {
        backgroundColor: color,
        borderColor: color
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}
