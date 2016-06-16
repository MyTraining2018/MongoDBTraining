db.users.replaceOne(
   { name: "abc" },
   { name: "amy", age: 34, type: 2, status: "P", favorites: { "artist": "Dali", food: "donuts" } }
)