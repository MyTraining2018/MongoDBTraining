db.users.updateOne(
   { "favorites.artist": "Picasso" },
   {
     $set: { "favorites.food": "pie", type: 3 },
     $currentDate: { lastModified: true }
   }
)