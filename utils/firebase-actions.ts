import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./firebase";

const database = getDatabase(app);

// Write Data
export const writeRehearsal = (band: string, date: string, link: string) => {
  set(ref(database, `rehearsals/${band}/` + date), {
    band,
    link,
  })
    .then(() => {
      console.log("data saved");
    })
    .catch((error) => {
      console.error(error);
    });
};

// Add Comments
export const addComments = (band: string, date: string, comments: string[]) => {
  return set(
    ref(database, `rehearsals/${band}/${date}/` + "comments"),
    comments
  );
};

// Read Data
export const readRehearsal = (band: string, date: string) => {
  const rehersal = ref(database, `rehearsals/${band}/${date}`);
  onValue(rehersal, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
