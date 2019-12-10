export const companyData = [
  {
    email: 'patient@eyeshop.com',
    id: 1,
    name: 'Eyeshop',
    patients: [
      {
        due: '3-4 Days',
        id: 1,
        name: 'Dante Lex',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 2,
        name: 'Segun Omilabu',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 3,
        name: 'Ric Hassani',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 4,
        name: 'Michael Omilabu',
        service: ['radiology']
      }
    ],
    phone: '08012345622'
  },
  {
    email: 'info@summitpharma.com',
    id: 2,
    name: 'Summit Pharma',
    patients: [
      {
        due: '3-4 Days',
        id: 5,
        name: 'Ayodele Ayodeji',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 6,
        name: 'Seun Osuntoki',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 7,
        name: 'Michael Omilabu',
        service: ['radiology']
      }
    ],
    phone: '08012345622'
  },
  {
    email: 'info@theplace.com',
    id: 3,
    name: 'The place',
    patients: [
      {
        due: '3-4 Days',
        id: 8,
        name: 'Tayo Ogundinwin',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 9,
        name: 'Gbenga Omilabu',
        service: ['radiology']
      },
      {
        due: '3-4 Days',
        id: 10,
        name: 'Temi Hassani',
        service: ['radiology']
      }
    ],
    phone: '08014345622'
  }
];

export const patientData = [
  {
    due: '3-4 Days',
    email: 'dante@eyeshop.com',
    id: 1,
    name: 'Dante Lex',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'segun@eyeshop.com',
    id: 2,
    name: 'Segun Omilabu',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'ric@hassani.com',
    id: 3,
    name: 'Ric Hassani',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'ayodele@eyeshop.com',
    id: 4,
    name: 'Ayodele Ayodeji',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'michael@eyeshop.com',
    id: 5,
    name: 'Michael Omilabu',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'seun@osuntoki.com',
    id: 6,
    name: 'Seun Osuntoki',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'tayo@eyeshop.com',
    id: 7,
    name: 'Tayo Ogundinwin',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'gbenga@eyeshop.com',
    id: 8,
    name: 'Gbenga Omilabu',
    phone: '08012345622',
    service: ['radiology']
  },
  {
    due: '3-4 Days',
    email: 'temi@hassani.com',
    id: 9,
    name: 'Temi Hassani',
    phone: '08012345622',
    service: ['radiology']
  }
];

export const staffData = [
  {
    branch: ['ikeja', 'lekki'],
    departments: ['optical', 'clinical'],
    email: 'dante@eyeshop.com',
    id: 1,
    name: 'Dante Lex',
    phone: '08012345622',
    role: 'admin'
  },
  {
    branch: ['ikeja'],
    departments: ['optical'],
    email: 'segun@eyeshop.com',
    id: 2,
    name: 'Segun Omilabu',
    phone: '08012345622',
    role: 'admin'
  },
  {
    branch: ['lekki'],
    departments: ['optical'],
    email: 'ric@hassani.com',
    id: 3,
    name: 'Ric Hassani',
    phone: '08012345622',
    role: 'admin'
  }
];

export const roles = [
  { value: 'admin', label: 'admin' },
  { value: 'staff', label: 'staff' }
];

export const branches = [
  { value: 'ikeja', label: 'ikeja' },
  { value: 'lekki', label: 'lekki' }
];

export const departments = [
  { value: 'optical', label: 'optical' },
  { value: 'clinical', label: 'clinical' }
];

export const serviceData = [
  { value: 'radiology', label: 'Radiology' },
  { value: 'biology', label: 'Biology' },
  { value: 'chemo', label: 'Chemo' }
];
