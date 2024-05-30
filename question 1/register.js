const axios = require('axios');

const register = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', {
      companyName: 'AyushmanSinghRajawat',
      ownerName: 'Ayushman Singh Rajawat',
      rollNo: '21131012509',
      ownerEmail: 'rajawatayushman17@gmail.com',
      accessCode: 'TMaXNS'
    });
    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Error registering:', error.response.data);
  }
};

register();
