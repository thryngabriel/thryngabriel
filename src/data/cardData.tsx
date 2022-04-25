import React from 'react';
import { Domain, PhoneVertical, ServerCluster, Test, LineChart, System } from "grommet-icons";
import { CardState } from "./CardState";

export const data = [
    {
        id: CardState.Web,
        icon: <Domain size="large" />,
        title: 'Web',
        subTitle: 'React, TypeScript, ASP.NET, Django',
        message: '1.5 years',
    },
    {
        id: CardState.Mobile,
        icon: <PhoneVertical size='large' />,
        title: 'Mobile',
        subTitle: 'Android (Kotlin), React Native',
        message: '2 years'
    },
    {
        id: CardState.Database,
        icon: <ServerCluster size='large' />,
        title: 'Database',
        subTitle: 'PostgreSQL, MongoDB, ORM frameworks',
        message: '1.5 years'
    },
    {
        id: CardState.DataScience,
        icon: <Test size='large' />,
        title: 'Data Science',
        subTitle: 'Scikitlearn (Python)',
        message: '6 months'
    },
    {
        id: CardState.DataVis,
        icon: <LineChart size='large' />,
        title: 'Data Visualization',
        subTitle: 'D3.js, React, TypeScript',
        message: '3 months'
    },
    {
        id: CardState.Embedded,
        icon: <System size='large' />,
        title: 'Embedded Systems',
        subTitle: 'Arduino (C++)',
        message: '9 months'
    },
    
];
