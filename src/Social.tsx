import React from 'react';
import {Grommet as GrommetIcon, LinkedinOption, Github } from 'grommet-icons';
import {Anchor, Box, Grommet, Footer, Main, Text, ThemeType} from 'grommet';
import { theme } from './GlobalTheme';

const Media = () => {
    return(
    <Box direction='row' gap='xxsmall' justify='center'>
        <Anchor
            a11yTitle='Check out my Github'
            href='https://github.com/kgabriel113'
            icon={<Github color='brand' />}
        />
        <Anchor
            a11yTitle='Check out my LinkedIn'
            href='https://www.linkedin.com/in/kathryn-g-524868162/'
            icon={<LinkedinOption color='brand' />}
        />
    </Box>
)}

export const Social = () => { return(
    <Grommet theme={theme}>
        <Footer background='#333333' pad='small' align='center' >
            <Box direction='row' gap='xsmall' justify='between'>
                <Text alignSelf='center' color='brand' size='small'>
                    Thanks for visiting! Check out my socials --&gt;
                </Text>
                <Media />
                <Box direction='row' gap='medium' align='center'>

                
                <Text alignSelf='center' textAlign='center' size='xsmall' color='brand'>
                    ©Copyright 2022 Kathryn Gabriel
                </Text>
                <Anchor
                    a11yTitle='Flamingo icons created by Freepik - Flaticon'
                    label='Flamingo icons created by Freepik - Flaticon'
                    href='https://www.flaticon.com/free-icons/flamingo'
                    size='xsmall'
                    weight='normal'
                    color='brand'
                />
                </Box>
            </Box>
        </Footer>
    </Grommet>
)}