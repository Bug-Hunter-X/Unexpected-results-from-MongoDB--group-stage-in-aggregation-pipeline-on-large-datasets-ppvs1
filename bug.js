```javascript
// Assuming you have a MongoDB collection named 'myCollection'

db.myCollection.aggregate([
  {
    $match: {
      // Your matching criteria here
    }
  },
  {
    $group: {
      _id: "$fieldName", // Replace 'fieldName' with the actual field you're grouping by
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 10
  }
])
```