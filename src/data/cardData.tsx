import React from 'react';
import { Domain, PhoneVertical, ServerCluster, Test, LineChart, System } from "grommet-icons";

export interface IExperience{
    id: number,
    icon: JSX.Element,
    name: string,
    language: string,
    duration: string
}

export const data: IExperience[] = [
    {
        id: 0,
        icon: <Domain size="large" />,
        name: 'Web',
        language: 'React, TypeScript, ASP.NET, Django',
        duration: '1.5 years',
    },
    {
        id: 1,
        icon: <PhoneVertical size='large' />,
        name: 'Mobile',
        language: 'Android (Kotlin), React Native',
        duration: '2 years'
    },
    {
        id: 2,
        icon: <ServerCluster size='large' />,
        name: 'Database',
        language: 'PostgreSQL, MongoDB, ORM frameworks',
        duration: '1.5 years'
    },
    {
        id: 3,
        icon: <Test size='large' />,
        name: 'Data Science',
        language: 'Scikitlearn (Python)',
        duration: '6 months'
    },
    {
        id: 4,
        icon: <LineChart size='large' />,
        name: 'Data Visualization',
        language: 'D3.js, React, TypeScript',
        duration: '3 months'
    },
    {
        id: 5,
        icon: <System size='large' />,
        name: 'Embedded Systems',
        language: 'Arduino (C++)',
        duration: '9 months'
    },
];
