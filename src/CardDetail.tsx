import { Box, Text } from 'grommet';
import React, { useEffect } from 'react';
import { data, IExperience } from './data/cardData';


interface CardDetailProps {
    experience: IExperience
}
export function CardDetail(props: CardDetailProps){ 
 
    
    return(
        <Box>
            <Text>Hello world {props.experience.name}</Text>
            <Text>{props.experience.language}]</Text>
        </Box>
    )
}
