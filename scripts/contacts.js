const contactos = [
  {
    id: 1,
    name: 'vegata',
    email: 'vegata@email.com',
    phone: '+502 6122 7812',
    address: 'Dirección 1',
    notes: 'Notas 1',
    favorite: false,
  },
  {
    id: 2,
    name: 'son goku',
    email: 'son.goku@email.com',
    phone: '+502 6233 7898',
    address: 'Dirección 2',
    notes: 'Notas 2',
    favorite: true,
  },
  {
    id: 3,
    name: 'Jeffrey Epstein',
    email: 'Jeffrey.Epstein@email.com',
    phone: '+502 6345 7892',
    address: 'Dirección 3',
    notes: 'Notas 3',
    favorite: false,
  },
  {
    id: 4,
    name: 'Jett',
    email: 'jett@valorant.com',
    phone: '+502 6678 7895',
    address: 'Dirección 4',
    notes: 'Notas 4',
    favorite: true,
  },
  {
    id: 5,
    name: 'Sage',
    email: 'sage@valorant.com',
    phone: '+502 6789 7896',
    address: 'Dirección 5',
    notes: 'Notas 5',
    favorite: false,
  }
];

function getContactById(id) {
  return contactos.find(contacto => contacto.id === id);
} 