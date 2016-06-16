db.users.update(
   { name: "xyz" },
   { name: "mee", age: 25, type: 1, status: "A", favorites: { "artist": "Matisse", food: "mango" } }
)