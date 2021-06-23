import React from 'react'

export const Component = (props) => (
    <div className="cardBox">
        <h1>关于我</h1>
        {props.children}
    </div>
)

export default Component