db.users.deleteMany({ status : "A" })

//or 
db.users.remove( { status : "P" } )

=================================================================

db.users.deleteOne( { status: "D" } )

//or

db.users.remove( { status: "D" }, 1)