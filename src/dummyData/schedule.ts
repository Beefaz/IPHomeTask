export interface ScheduleList {
  [index: number]: {
    groupTitle: string,
    children: ChildrenList,
  };
}

export interface ChildrenList {
  [index: number]: ChildrenObject,
}

export interface ChildrenObject {
  title: string,
  description: string,
  pinnable?: boolean,
  moreOptionsAvailable: boolean,
}

export const schedule = <ScheduleList>[
  {
    groupTitle: 'Priority',
    children: <ChildrenList>[
      {
        title: 'Review candidate applications',
        description: 'Today - 11.30 AM',
        moreOptionsAvailable: true,
      },
    ]
  },
  {
    groupTitle: 'Other',
    children: <ChildrenList>[
      {
        title: 'Interview with candidates',
        description: 'Today - 10.30 AM',
        moreOptionsAvailable: true,
      },
      {
        title: 'Short meeting with product designer from IT Departement',
        description: 'Today - 09.15 AM',
        moreOptionsAvailable: true,
      },
    ]
  }
]
