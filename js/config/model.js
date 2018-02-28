import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    fave_id: "string",
    faved_on: "data"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export default realm;
