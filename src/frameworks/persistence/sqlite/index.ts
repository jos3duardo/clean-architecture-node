export const database =
     {
        type: "sqlite",
        database: "./frameworks/database/database.sqlite",
        entities: [
            __dirname + "./entity/*.js"
        ],

    }
