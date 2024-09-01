const createUser = `
    CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        password VARCHAR,
        email VARCHAR,
        avatar VARCHAR NULL,
        isAdmin VARCHAR NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`

module.exports = createUser