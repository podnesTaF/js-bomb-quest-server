module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL', 'some_url'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS', 'some_key')
  },
});

