# MongoDB Notes

## Dependencies
* nodemon - backend bundler
* mongoose - ODM(Object Data Mapping)
* mongodb

## 
1. Connect to db 
  * mongoose.connect('mongodb://localhost:testMongo/testMongo');
2. Create schema
  * const userSchema = mongoose.Schema({});
3. Create model
  * const User = mongoose.model('user', userSchema);
4. To insert new records
  * const user = new User({});
  * user.save(cb);
5. Can add a 'pre' function that runs before save
  * userSchema.pre(cb);
6. To find a record and update
  * User.findOne({email}, (err, user) => {fn})

