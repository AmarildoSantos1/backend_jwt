export default {
  userAdminTemplate: {
    name: 'manoel',
    email: 'manoel@silveira.com.br',
    password: '1234',
    admin: true,
  },
  userNotAdminTemplate: {
    name: 'Cauan',
    email: 'cauan@hofins.com.br',
    password: '1234',
    admin: false,
  },
  userComplete: {
    name: 'Cauan',
    email: 'cauan.f@hofins.com.br',
    password: '1234',
  },
  userPartial: {
    password: '1234',
  },
  userAdmin: {
    password: '1234',
    admin: true,
  },
  userUnique: {
    name: 'Mykel',
    email: 'mykel@dantas.com.br',
    password: '1234',
  },
  userInvalidBody: {
    name: 1234,
    email: [],
  },
  userInvalidBody2: {
    name: 'um nome com mais de quarenta e cinco caracteres!',
    email: 'mail',
    password: 123456,
  },
};
