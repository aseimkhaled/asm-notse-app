const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51La0d2IyGgBl6xBZMKF84kuhja06UWc2OO3UuZabN6xIUidX5YhnQkYPn0nmQyUWXUM7d8A04twiZyuAI8C3opqt00UjIQNTzT",
    SENTRY_DSN: "https://f756133bc713455ba70d589cd8338337@o1376082.ingest.sentry.io/6685011",
    

    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;