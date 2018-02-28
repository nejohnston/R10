import Realm from "realm";

const FavesSchema = {
  name: "faves",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "data"
  }
};

const realm = new Realm({ schema: [FavesSchema] });
export default realm;
