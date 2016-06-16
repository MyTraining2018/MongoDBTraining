db.users.find( { favorites: { artist: "Picasso", food: "pizza" } } )


db.users.find( { "favorites.artist": "Picasso" } )

db.users.find({$or:[{"favorites.artist": "Picasso"},{"favorites.food": "cake"}]}).pretty()