let initialState = {
  players: [
    { name: "Ryan", position: "P", bats: "R", throws: "R" },
    { name: "George", position: "1B", bats: "R", throws: "L" }
  ]
};

export default (state = initialState, action) => {
  let { type, payload = {} } = action;
  let { id, model, record, records } = payload;

  switch (type) {
    case "GET":
      return { ...state, [model]: records };

    case "POST":
      const newRecords = state[model].concat(record);
      return {
        ...state,
        [model]: newRecords
      };

    case "DELETE":
      let deleteList = state[model].filter((r, idx) => idx !== id);
      return { ...state, [model]: deleteList };

    case "PUT":
      let putList = state[model].map((entry, idx) => (idx === id ? record : entry));
      return { ...state, [model]: putList };

    case "PATCH":
      return state;

    default:
      return state;
  }
};
