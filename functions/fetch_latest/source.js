exports = function(arg){
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    collection.findOne({ owner_id: context.user.id }).then((doc) => {
      // do something with doc
    });

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  
  var collection = context.services.get("mongodb-atlas").db("gdelt").collection("latest");
  var query ={"Info.og.image":{$exists: true}};

var newItems = []  
  
return collection.find(query)
  .sort({ "AvgTone": -1 })
  .toArray()
  .then(items => {
    console.log(`Successfully found ${items.length} documents.`)
    items.forEach(console.log)
    
    items.map((item) => {
          item=EJSON.parse(JSON.stringify(item),{strict:false});
          newItems.push(item);
    })
    
    return newItems
    
  })
  .catch(err => console.error(`Failed to find documents: ${err}`))
  
};