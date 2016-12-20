// Actions Click
// Type: description of the action
// Payload: data transfered
export const selectUser = (user) => {
   console.log('click user', user.name);
   return {
      type: "USER_SELECTED",
      payload: user
   }
};
