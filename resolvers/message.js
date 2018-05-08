export default {

  Mutation: {
    createMessage: (parent, args, { models }) => {
      models.Message.create({
        ...args,
        userId: 1 // can be passed as  variable at a later stage.
     });
     return true;
    }
  }
}