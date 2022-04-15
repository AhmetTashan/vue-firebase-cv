import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";

import firebaseConfig from "@/config/firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

export default (path, callback) => {

    const starCountRef = ref(database, path)

    onValue(starCountRef, (snapshot) => {
        let val = snapshot.val();
        callback(val)

    }, (error) => {

        console.log(`${path} parametresi getirilirken hata oluştu :>>`, error);

    });

}
