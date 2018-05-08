export default `
  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    team: Team!
  }

  type Mutation {
    createChannel(teamId: Int!, name: String!, public: Boolean=false): Boolean!
  }
`