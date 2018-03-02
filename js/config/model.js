import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "session_id",
  properties: {
    session_id: { type: "string" },
    faved_on: "data"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryFave = () => {
  return realm.objects("Fave");
};
export const createFave = id => {
  realm.write(() => {
    realm.create("Fave", {
      session_id: id,
      faved_on: new Date()
    });
  });
};
export const deleteFave = id => {
  realm.write(() => {
    const faveToDelete = realm.objects("Fave").filtered("fave_id == $0", id);
    realm.delete(faveToDelete);
  });
};

export default realm;
