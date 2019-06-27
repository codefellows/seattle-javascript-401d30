let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDNhZjgxNTAwZmFiMDAxNzc1NmU0ZCIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJyZWFkIiwidXBkYXRlIl0sImlhdCI6MTU1MDA4MDk3Nn0.8NEvctGKHq2VfA_xk1j3pgjW3-qYYdDgmZ_VBqmnt90';

const mock = [
  {
    pattern: '/signin',

    fixtures: function(match, params, headers, context) {},

    post: function(match, data) {
      return {
        status: 200,
        text: token,
      };
    },
  },
];

export default mock;
