export interface NewsList {
    [index: number]: NewsObject,
}

export interface NewsObject {
    shade: string,
    title: string,
    count: string,
    description: string,
}

export const news = <NewsList>[
    {
        shade: 'orange',
        title: 'Available Position',
        count: '24',
        description: '4 Urgently needed',
    },
    {
        shade: 'blue',
        title: 'Job open',
        count: '10',
        description: '4 Active hiring',
    },
    {
        shade: 'pink',
        title: 'New Employees',
        count: '24',
        description: '4 Department',
    },
]
