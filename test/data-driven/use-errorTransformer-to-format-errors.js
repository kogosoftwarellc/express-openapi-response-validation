module.exports = {
  constructorArgs: {
    responses: {
      200: {
        schema: {
          type: 'object',
          properties: {
            foo: {
              type: 'string'
            }
          }
        }
      }
    },

    definitions: null,

    errorTransformer: function(error) {
      return 'asdf';
    }
  },

  inputStatusCode: 200,
  inputResponseBody: {foo: 2345},

  expectedValidationError: {
    status: 500,
    message: 'The response was not valid.',
    errors: ['asdf']
  }
};