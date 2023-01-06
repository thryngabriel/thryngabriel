import React from 'react';
import { Domain, PhoneVertical, ServerCluster, Test, LineChart, System } from "grommet-icons";

export interface IExperience{
    id: number,
    icon: JSX.Element,
    name: string,
    language: string,
    duration: string,
    description: string
}

export const data: IExperience[] = [
    {
        id: 0,
        icon: <Domain size="large" />,
        name: 'Web',
        language: 'React, TypeScript, ASP.NET, Django',
        duration: '1.5 years',
        description: 'I love web dev. Frameworks I am familiar with are React, .NET, Django, and Node.'
    },
    {
        id: 1,
        icon: <Test size='large' />,
        name: 'Machine Learning',
        language: 'Julia, Python',
        duration: '6 months',
        description: 'My team from the AI4Good bootcamp won our region\'s Accelerator Award for our project HealthWhere. The project is a unique way of visualizing healthcare disparities in Canada by using unsupervised learning to create clusters of healthcare regions with similar needs. Since then, I went on to build a convolutional neural network (CNN) in Julia for quality control of oceanography data during my co-op work term last summer.'
    },
    {
        id: 2,
        icon: <PhoneVertical size='large' />,
        name: 'Mobile',
        language: 'Android (Kotlin), React Native',
        duration: '1 year',
        description: 'My first co-op was native Android development for a startup called Ergonomyx. I spent a year learning hands-on and bringing a real application from scratch to production.'
    },
    {
        id: 3,
        icon: <ServerCluster size='large' />,
        name: 'Database',
        language: 'PostgreSQL, MongoDB, ORM frameworks',
        duration: '1.5 years',
        description: 'I love databases and I have worked with them directly or indirectly for my entire career. For my first co-op, I drove the migration of NoSQL data in MongoDB to PostgreSQL. I also worked with Room on Android during my first co-op and Entity Framework during my second co-op, which are both ORM database management tools.'
    },
    {
        id: 4,
        icon: <LineChart size='large' />,
        name: 'Data Visualization',
        language: 'D3.js, React, TypeScript',
        duration: '3 months',
        description: 'For my second co-op, I used D3.js for the visualization of oceanography data in a React webapp.'
    },
    {
        id: 5,
        icon: <System size='large' />,
        name: 'Embedded Systems',
        language: 'Arduino (C++)',
        duration: '9 months',
        description: "I developed C++ Arduino code for my company's Bluetooth sit-and-stand desk and under-desk bike."
    },
];
