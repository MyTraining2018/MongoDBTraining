db.users.update(
   { "favorites.artist": "Pisanello" },
   {
     $set: { "favorites.food": "pizza", type: 0,  },
     $currentDate: { lastModified: true }
   }
)

//To update multiple documents using the db.collection.update(), include the multi: true option:

db.users.update(
   { "favorites.artist": "Pisanello" },
   {
     $set: { "favorites.food": "pizza", type: 0,  },
     $currentDate: { lastModified: true }
   },
   { multi: true }
)