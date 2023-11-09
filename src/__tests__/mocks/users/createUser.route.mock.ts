export default {
  userComplete: {
    name: 'manoel',
    email: 'manoel@silveira.com.br',
    password: '1234',
    admin: true,
  },
  userWithoutAdmin: {
    name: 'Cauan',
    email: 'cauan@hofins.com.br',
    password: '1234',
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
