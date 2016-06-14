start "a" mongod --dbpath d:\sagar\mongoDB\rs1 --port 30000 --replSet "demo" --storageEngine=mmapv1

start "b" mongod --dbpath d:\sagar\mongoDB\rs2 --port 40000 --replSet "demo"  --storageEngine=mmapv1

start "c" mongod --dbpath d:\sagar\mongoDB\rs3 --port 50000 --replSet "demo" --storageEngine=mmapv1