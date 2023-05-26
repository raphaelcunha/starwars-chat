import connect, { sql } from "@databases/sqlite";
import { v4 as uuidv4 } from "uuid";

// We don't pass a file name here because we don't want to store
// anything on disk
const db = connect();

// status message is 'pending', 'success', 'error'

async function prepare() {
  await db.query(sql`
    CREATE TABLE messages (
      id VARCHAR NOT NULL PRIMARY KEY,
      userId INT NOT NULL,
      message VARCHAR NOT NULL,
      status VARCHAR NOT NULL DEFAULT 'success',
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_userId
        FOREIGN KEY (userId)
        REFERENCES users (id)
    );
  `);

  await db.query(sql`
    CREATE TABLE users (
      id INT NOT NULL PRIMARY KEY,
      name VARCHAR NOT NULL,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

async function seed() {
  await prepare();

  await db.query(sql`
    INSERT INTO users (id, name) VALUES 
    (1, 'Darth Vader'),
    (2, 'Luke Skywalker')
  `);

  await db.query(sql`
      INSERT INTO messages (id, userId, message, status) VALUES 
      (${uuidv4()}, 1, 'I am your father!', 'success'), 
      (${uuidv4()}, 2, 'I hate you!', 'success')
    `);
}

seed().catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});

export { sql };
export default db;
