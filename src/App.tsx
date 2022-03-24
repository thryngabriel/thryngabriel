import React, { useState } from "react";
import './App.css';
import { Grommet, Box, Button, Heading, Collapsible, BoxExtendedProps, ResponsiveContext, Layer, Card, CardBody, CardFooter, Grid, Text, Anchor, Footer, Main, ThemeType} from 'grommet';
import { Notification, FormClose, Domain, PhoneVertical, Test, LineChart, Linkedin, Github, ServerCluster, System, Menu} from 'grommet-icons';
import { Social } from "./Social";
import { theme } from "./GlobalTheme";


const data = [
  {
    color: 'card',
    icon: <Domain size="large" />,
    title: 'Web',
    subTitle: 'React, TypeScript, ASP.NET, Django',
    message: '1.5 years',
  },
  {
    color: 'card',
    icon: <PhoneVertical size='large' />,
    title: 'Mobile',
    subTitle: 'Android (Kotlin), React Native',
    message: '2 years'
  },
  {
    color: 'card',
    icon: <ServerCluster size='large' />,
    title: 'Database',
    subTitle: 'PostgreSQL, MongoDB, ORM frameworks',
    message: '1.5 years'
  },
  {
    color: 'card',
    icon: <Test size='large' />,
    title: 'Data Science',
    subTitle: 'Scikitlearn (Python)',
    message: '6 months'
  },
  {
    color: 'card',
    icon: <LineChart size='large' />,
    title: 'Data Visualization',
    subTitle: 'D3.js, React, TypeScript',
    message: '3 months'
  },
  {
    color: 'card',
    icon: <System size='large' />,
    title: 'Embedded Systems',
    subTitle: 'Arduino (C++)',
    message: '9 months'
  },
  
];

const AppBar = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

interface IdentifierProps {
  children: any,
  title: string,
  subTitle: string,
  size: string,
  pad: string
  align: string
}
const Identifier = ({ children, title, subTitle, size, pad, align, ...rest }: IdentifierProps) => (
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

//F9EAF3

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill background="linear-gradient(142.77deg, #F9EAF3 -9.18%, grey 209.09%)">
          
            <AppBar>
              <Heading level='3' margin='none'>thryngabriel.com</Heading>
              <Button icon={<Menu/>} onClick={() => {setShowSidebar(!showSidebar)}} />
            </AppBar>

            
            

            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify="center">
                <Heading level={2} size={'large'}>
                  {'Kathryn Gabriel'}
                </Heading> 
                <Text>Hi, I'm Katie. I like developing software.</Text>
              </Box>
              <Box flex align='center' justify='center'>
                <Box pad='large' fill justify="center">
                  <Heading level={3} size={'medium'}>What I'm excited about:</Heading>
                  <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
                    {data.map((value) => (
                      <Card background={value.color} key={value.message}>
                        <CardBody pad="small">
                          <Identifier
                            pad="small"
                            title={value.title}
                            subTitle={value.subTitle}
                            size="small"
                            align="start"
                          >
                            {value.icon}
                          </Identifier>
                        </CardBody>
                        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                          <Text size="xsmall">{value.message}</Text>
                        </CardFooter>
                      </Card>
                    ))}
                  </Grid>
                </Box>
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    please hire me
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          
            <Social />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
