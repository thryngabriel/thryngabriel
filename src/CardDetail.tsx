import { Text } from 'grommet';
import React from 'react';
import { CardState } from './data/CardState';


interface CardDetailProps {
    cardState: CardState
}
export function CardDetail(props: CardDetailProps) { 

    return(
        <Text>Hello world {props.cardState}</Text>
    )
}
