import { connection } from "../../infra/database"

const syncModels= async () => {
    try{
        await connection.sync();
    } catch (e) {
        console.log(e)
    }
}

export default syncModels