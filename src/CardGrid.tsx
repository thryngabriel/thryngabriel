import React from 'react';
import { Grid, Card, CardBody, CardFooter, Text, Box, Heading } from "grommet";
import {data} from './data/cardData'
import { CardState } from './data/CardState';


interface InterestCardProps {
    children: any,
    title: string,
    subTitle: string,
    size: string,
    pad: string
    align: string
  }
  const InterestCard = ({ children, title, subTitle, size, pad, align, ...rest }: InterestCardProps) => (
    <Box gap="small" align={align} pad={pad} {...rest}>
      {children}
      <Box>
        <Text size={size} weight="bold">
          {title}
        </Text>
        <Text size={size}>{subTitle}</Text>
      </Box>
    </Box>
  );


interface CardGridProps{
    clickFunc: (id: CardState) => void;
}

export function CardGrid(props: CardGridProps) {
    const [hoverId, setHoverId] = React.useState(CardState.Grid);

    function colorByKey(key: CardState) {
        if(key == hoverId) return "card_over";
        return "card"
    };

    return(
        <div>
                <Heading level={3} size={'medium'}>What I'm excited about:</Heading>
                    <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
                        {data.map((value) => (
                            <Card background={colorByKey(value.id)} key={value.message} onMouseEnter={() => setHoverId(value.id)} onMouseLeave={() => setHoverId(CardState.Grid)} onClick={() => props.clickFunc(value.id)}>
                                <CardBody pad="small">
                                <InterestCard
                                    pad="small"
                                    title={value.title}
                                    subTitle={value.subTitle}
                                    size="small"
                                    align="start"
                                >
                                    {value.icon}
                                </InterestCard>
                                </CardBody>
                                <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size="xsmall">{value.message}</Text>
                                </CardFooter>
                            </Card>)
                        )}
                    </Grid>
                    </div>
    );
}