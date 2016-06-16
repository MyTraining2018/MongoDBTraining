db.users.deleteOne( { status: "D" } )

//or

db.users.remove( { status: "D" }, 1)