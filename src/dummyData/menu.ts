export interface MenuDataList {
    [index: number]: {
        label: string,
        links: LinkList,
    };
}

export interface LinkList {
    [index: number]: LinkObject,
}

export interface LinkObject {
    image: string,
    text: string,
}

export const menuDataList = <MenuDataList>[
    {
        label: 'main menu',
        links: <LinkList>[
            {
                image: 'ic_dashboard.svg',
                text: 'Dashboard',
            },
            {
                image: 'ic_recruitment.svg',
                text: 'Recruitment',
            },
            {
                image: 'ic_calendar.svg',
                text: 'Schedule',
            },
            {
                image: 'ic_employee.svg',
                text: 'Employee',
            },
            {
                image: 'ic_department.svg',
                text: 'Department',
            }
        ]
    },
    {
        label: 'other',
        links: <LinkList>[
            {
                image: 'ic_support.svg',
                text: 'Support',
            },
            {
                image: 'ic_settings.svg',
                text: 'Settings',
            },
        ]
    }
]
