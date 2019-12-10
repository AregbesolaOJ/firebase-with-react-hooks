export const tasks = {
  todo: [
    {
      id: 1,
      dueDate: 'Tue, 16th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/200',
      name: 'Eye foundation hospital',
      orderId: '123',
      requestedBy: 'Casper Jay',
      service: 'Blood test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    },
    {
      id: 2,
      dueDate: 'Wed, 17th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/400',
      name: 'Lagoon hospital',
      orderId: '123',
      requestedBy: 'Prince Nazi',
      service: 'HIV test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    }
  ],
  pending: [
    {
      id: 3,
      dueDate: 'Wed, 17th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/400',
      name: 'Boom hospital',
      orderId: '123',
      requestedBy: 'Human',
      service: 'Body test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    }
  ],
  inProgress: [
    {
      id: 4,
      dueDate: 'Wed, 17th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/400',
      name: 'Big hospital',
      orderId: '123',
      requestedBy: 'Layo',
      service: 'Eye test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    }
  ],
  completed: [
    {
      id: 5,
      dueDate: 'Wed, 17th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/400',
      name: 'Shaq hospital',
      orderId: '123',
      requestedBy: 'Lex',
      service: 'Nose test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    }
  ],
  dispatched: [
    {
      id: 6,
      dueDate: 'Wed, 17th 2019: 7PM',
      duration: '',
      img: 'https://picsum.photos/400',
      name: 'Hold thight hospital',
      orderId: '123',
      requestedBy: 'Ghost',
      service: 'Mouth test',
      serviceIds: [
        { value: 'x-ray', completed: false, label: 'X-ray' },
        { value: 'blood', completed: false, label: 'Blood' },
        { value: 'washing', completed: false, label: 'X-ray' },
        { value: 'another one', completed: true, label: 'Another one' }
      ]
    }
  ]
};

export const orders = {
  declined: [
    {
      id: 1,
      dueDate: 'Tue, 16th May 2018: 3PM',
      name: 'Eko hospital',
      orderId: '123',
      status: 'declined',
      operator: 'wale glorious',
      service: 'Urine test'
    },
    {
      id: 2,
      dueDate: 'Wed, 27th June 2019: 7PM',
      name: 'Lagoon hospital',
      orderId: '123',
      status: 'declined',
      operator: 'isaac john',
      service: 'HIV test'
    }
  ],
  delivered: [
    {
      id: 3,
      dueDate: 'Wed, 17th August 2018: 1PM',
      name: 'Boom hospital',
      orderId: '123',
      deliveryDate: 'Wed, 17th June 2019: 7PM',
      status: 'delivered',
      operator: 'saka tinubu',
      service: 'Body test'
    },
    {
      id: 4,
      dueDate: 'Mon, 17th Jan 2019: 9PM',
      name: 'General hospital',
      orderId: '123',
      deliveryDate: 'Thur, 29th July 2019: 11AM',
      status: 'delivered',
      operator: 'Gucci Snake',
      service: 'Pregnancy test'
    },
    {
      id: 5,
      dueDate: 'Wed, 30th October 2019: 10PM',
      name: 'DIH hospital',
      orderId: '123',
      deliveryDate: 'Wed, 17th March 2019: 11PM',
      status: 'delivered',
      operator: 'JJ Johnson',
      service: 'Nose test'
    },
    {
      id: 6,
      dueDate: 'Wed, 17th June 2019: 7PM',
      name: 'Hold thight hospital',
      orderId: '123',
      deliveryDate: 'Wed, 17th June 2019: 7PM',
      status: 'delivered',
      operator: 'wale thompson',
      service: 'Malaria/Typhoid'
    }
  ]
};
