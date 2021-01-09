// Production variables
const prod = {
  url: {
    API_URL: 'Placeholder'
  }
};

// Development variables
const dev = {
  url: {
    API_URL: 'http://localhost:3000'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
