db.users.find(
   { status: "A" },
   { "favorites.food": 0 }
)