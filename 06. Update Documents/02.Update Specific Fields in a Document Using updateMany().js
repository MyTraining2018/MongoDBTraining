db.users.updateMany(
   { "favorites.artist": "Picasso" },
   {
     $set: { "favorites.artist": "Pisanello", type: 3 },
     $currentDate: { lastModified: true }
   }
)