db.users.find(
   { status: "A" },
   { name: 1, status: 1, "favorites.food": 1 }
)