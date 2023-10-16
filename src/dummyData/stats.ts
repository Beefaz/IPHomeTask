export interface StatsList {
    [index: number]: StatsObject,
}

export interface StatsObject {
    title: string,
    count: string,
    description: GenderStatList,
    image: string,
}

export interface GenderStatList {
    [index: number]: GenderStatObject,
}

export interface GenderStatObject {
    text: string,
}

export const stats = <StatsList>[
    {
        title: 'Total Employees',
        count: '216',
        description: <GenderStatList>[{text: '120 Men'}, {text: '96 Women'}],
        image: 'graph1.png',
    },
    {
        title: 'Total Request',
        count: '16',
        description: <GenderStatList>[{text: '6 Men'}, {text: '10 Women'}],
        image: 'graph2.png',
    },
]
