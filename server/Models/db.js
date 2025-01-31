import pg from "pg";

const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Blog",
    password:"deepak",
    port:5432
});

export default db;