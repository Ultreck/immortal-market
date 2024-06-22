



const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'NAME', uid: 'user',  sortable: true },
    { name: 'ROLE', uid: 'role' },
    { name: 'PLAN', uid: 'plan',  sortable: true },
    { name: 'DATE JOINED', uid: 'date joined',  sortable: true },
    { name: 'ACTIONS', uid: 'actions',  },
  ]
  
  const statusOptions = [
    { name: 'Completed', uid: 'completed' },
    { name: 'Rejected', uid: 'rejected' },
    { name: 'Pending', uid: 'pending' },
    { name: 'Cancelled', uid: 'cancelled' },
  ]
  
  const data = [
    {
      id: 1,
      firstname: 'Billy',
      lastname: 'Nunez',
      email: 'annabell.kris@yahoo.com',
      avatar:null,
      date: '12 Feb 2022',
      plan: 'Basic',
      role: 'Creator',
      roleTimeline: '2 days ago',
    },
    {
      id: 2,
      firstname: 'Tony',
      lastname: 'Parks',
      email: 'vica_glover@gmial.com',
      avatar:null,
      date: '12 Feb 2022',
      plan: 'Basic',
      role: 'Editor',
      roleTimeline: '2 days ago',
    },
    {
      id: 3,
      firstname: 'Gilbert',
      lastname: 'Barrett',
      email: 'paolo.zieme@gmial.com',
      avatar:"https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=",
      date: '12 Feb 2022',
      plan: 'Basic',
      role: 'Creator',
      roleTimeline: '2 days ago',
    },
    {
      id: 4,
      firstname: 'Ollie',
      lastname: 'Wallace',
      email: 'loma_kirlin@ncre.biz',
      avatar:"https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=",
      date: '12 Feb 2022',
      plan: 'Premium',
      role: 'Viewer',
      roleTimeline: '2 days ago',
    },
 
  ]
  



  const priority = [
    { label: 'Low', value: 'low' },
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
  ]

  const clients = [
    { label: 'Clan Africa', value: 'clan africa' },
    { label: 'Statisense', value: 'statisense' },
  ]
  
  export { columns, data, statusOptions, priority, clients }
  