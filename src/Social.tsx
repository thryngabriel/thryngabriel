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
        <Footer background='#333333' pad='small' align='center'>
            <Box align='center' direction='row' gap='xsmall'>
                <Text alignSelf='center' color='brand' size='small'>
                    Thanks for visiting! Check out my socials --&gt;
                </Text>
                <Media />
                <Text textAlign='center' size='xsmall'>
                    ©Copyright 2020 Kathryn Gabriel
                </Text>
            </Box>
        </Footer>
    </Grommet>
)}