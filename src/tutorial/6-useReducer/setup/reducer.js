export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPerson = [...state.people, action.payload];

    return {
      ...state,
      people: newPerson,
      showmodal: true,
      modalContent: 'Item added',
    };
  }
  if (action.type === 'EMPTY') {
    return {
      ...state,
      showmodal: true,
      modalContent: 'Please enter the input',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showmodal: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPerson,
      showmodal: true,
      modalContent: 'Item removed',
    };
  }
  throw new Error('No action matches');
};
