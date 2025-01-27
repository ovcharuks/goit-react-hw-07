const initialState = {
  items: [
    { id: "id", name: "name", number: "number" },
    { id: "id1", name: "name1", number: "number1" },
    { id: "id2", name: "name2", number: "number2" },
  ],
  filter: "",
};

export const contactsReduser = (state = initialState, action) => {
  switch (action.type) {
    case "addition": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "delete": {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    }
    case "search": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
