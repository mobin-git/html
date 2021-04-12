import React from 'react';

function Midpart(props) {
    return (
        <div className={"midpart"}>
            <div className={"window"}>{props.children}</div>
        </div>
    )
}

export default Midpart;