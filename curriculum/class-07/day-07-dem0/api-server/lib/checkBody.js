const schema = {
  name: 'string',
  // id: 'number',
  hasDog: 'boolean',
};

const checkBody = (req, res, next) => {
  if (req.method !== 'POST') next();
  // body.hasOwnProperty(...schema)
  const { body } = req;

  const keysArray = Object.keys(schema);

  let hasKeys = keysArray.every(key => {
    console.log(body.hasOwnProperty(key));
    return body.hasOwnProperty(key);
  });

  if (hasKeys && Object.keys(body).length === keysArray.length) {
    console.log('has the same keys');
    next();
  } else {
    console.log('has different keys');
    next(new Error('you did a bad'));
  }

};

module.exports = checkBody;