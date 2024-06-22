



  const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'USER', uid: 'user' },
    { name: 'PROJECT', uid: 'project' },
    { name: 'FILE TYPE', uid: 'file type' },
    { name: 'TEAM', uid: 'team' },
    { name: 'ACTIONS', uid: 'actions' },
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
      name: 'Laza Bogdan',
      avatar:
        'https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=',
      timeline: '2 days ago',
      team: ['https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=', 'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',],
      fileType: 'Excel',
      project: "Using Angular HttpClientModules instead of HttpModule",
      projectType: ["Banking", "Investment"],
    },
    {
      id: 2,
      name: 'Adam Curtis',
      avatar:
        'https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=',
      timeline: '2 days ago',
      team: ['https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=', 'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',],
      fileType: 'Pdf',
      project: "Overall investment planning for 3rd quarter",
      projectType: ["Banking",],
    },
    {
      id: 3,
      name: 'Adam Curtis',
      avatar:
        'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
      timeline: '2 days ago',
      team: ['https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=', 'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',],
      fileType: 'Csv',
      project: "Overall investment planning for 3rd quarter",
      projectType: ["Banking",],
    },
    {
      id: 4,
      name: 'Adam Curtis',
      avatar:
        'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      timeline: '2 days ago',
      team: ['https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=', 'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',],
      fileType: 'Csv',
      project: "Overall investment planning for 3rd quarter",
      projectType: ["Banking", "Investment"],
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
  