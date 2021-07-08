import React from 'react'
import Styled from 'styled-components'

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 10px auto;
    border: 1px black solid
    width: 40%;
    height: auto;
`

export const Friend = props => {
    return (
        <Div>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </Div>
    )
}