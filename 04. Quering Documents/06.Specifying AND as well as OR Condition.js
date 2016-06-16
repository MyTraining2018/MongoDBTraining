db.users.find(
   {
     status: "A",
     $or: [ { age: { $lt: 30 } }, { type: 1 } ]
   }
)