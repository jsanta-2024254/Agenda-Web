const contactos = [
  {
    id: 1,
    name: 'vegata',
    email: 'vegata@email.com',
    phone: '+502 6122 7812',
    address: 'Dirección 1',
    notes: 'Notas 1',
    favorite: false,
    avatar: 'https://via.placeholder.com/80'
  },
  {
    id: 2,
    name: 'son goku',
    email: 'son.goku@email.com',
    phone: '+502 6233 7898',
    address: 'Dirección 2',
    notes: 'Notas 2',
    favorite: true,
    avatar: 'https://via.placeholder.com/80'
  },
  {
    id: 3,
    name: 'Jeffrey Epstein',
    email: 'Jeffrey.Epstein@email.com',
    phone: '+502 6345 7892',
    address: 'Dirección 3',
    notes: 'Notas 3',
    favorite: false,
    avatar: 'https://via.placeholder.com/80'
  }
];

// Function to get contact by ID
function getContactById(id) {
  return contactos.find(contacto => contact.id === id);
}