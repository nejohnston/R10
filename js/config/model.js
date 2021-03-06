import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "session_id",
  properties: {
    session_id: { type: "string" },
    faved_on: { type: "date" }
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryFave = () => {
  return realm.objects("Fave").map(fave => fave.session_id);
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
    const faveToDelete = realm.objects("Fave").filtered("session_id == $0", id);
    realm.delete(faveToDelete);
  });
};

export default realm;
