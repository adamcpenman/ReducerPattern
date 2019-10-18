export const initialState = {
  // const [title, setTitle] = useState("The Reducer Pattern");
  // const [editing, setEditing] = useState(false);
  title: "The Reducer Pattern",
  editing: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
