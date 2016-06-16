db.users.find(
   {
     $or: [ { status: "A" }, { age: { $lt: 30 } } ]
   }
)