// Production variables
const prod = {
  url: {
    API_URL: 'https://krave-app.herokuapp.com'
  }
};

// Development variables
const dev = {
  url: {
    API_URL: 'http://localhost:3000',
    GEO_URL: 'https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
