export interface AnnouncementList {
  [index: number]: AnnouncementObject;
}

export interface AnnouncementObject {
  title: string,
  description: string,
  pinnable: boolean,
  moreOptionsAvailable: boolean,
}

export const announcements = <AnnouncementList>[
  {
    title: 'Outing schedule for every departement',
    description: '5 Minutes ago',
    pinnable: true,
    moreOptionsAvailable: true,
  },
  {
    title: 'Meeting HR Department',
    description: 'Yesterday, 12:30 PM',
    pinnable: true,
    moreOptionsAvailable: true,
  },
  {
    title: 'IT Department need two more talents for UX/UI Designer position',
    description: 'Yesterday, 09:15 AM',
    pinnable: true,
    moreOptionsAvailable: true,
  },
]
