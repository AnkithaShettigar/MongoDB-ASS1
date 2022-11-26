"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json"

---------------------------------------------------------------------
Create a database , give it name like ""Human_Resource"". 

test>show dbs;

test>
admin            40.00 KiB
classdb         112.00 KiB
config           96.00 KiB
courses           8.00 KiB
local            40.00 KiB

test> use Human_Resource
Human_Resource>
switched to db Human_Resource


Human_Resource>show dbs;
Human_Resource>
Human_Resource   72.00 KiB
admin            40.00 KiB
classdb         112.00 KiB
config           96.00 KiB
courses           8.00 KiB
local            40.00 KiB


---------------------------------------------------------------------
Create a collection inside this named ""employee""

Human_Resource>db.employee.insertMany([{}])

---------------------------------------------------------------------

Query the collection ""employee"" and list all the documents



Human_Resource> db.employee.insertMany([{
    ...   "firstName": "John",
    ...   "lastName": "Doe",
    ...   "salary": "25000",
    ...   "department": "HR",
    ...   "lastCompany": "X",
    ...   "lastSalary": "10000",
    ...   "overallExp": "2",
    ...   "contactInfo": "1234567890",
    ...   "yearGrad": "2016",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Rohan",
    ...   "lastName": "Jame",
    ...   "salary": "30000",
    ...   "department": "Technical",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "1",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "Doe",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "20000",
    ...   "overallExp": "1",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "ECE"
    ... },
    ... {
    ...   "firstName": "Sao",
    ...   "lastName": "Avika",
    ...   "salary": "30000",
    ...   "department": "Sales",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "roh",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "EEE"
    ... },
    ... {
    ...   "firstName": "Rohan",
    ...   "lastName": "Jame",
    ...   "salary": "30000",
    ...   "department": "Technical",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "1",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "Doe",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "20000",
    ...   "overallExp": "1",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "ECE"
    ... },
    ... {
    ...   "firstName": "Sao",
    ...   "lastName": "Avika",
    ...   "salary": "30000",
    ...   "department": "Sales",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "Doe",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "EEE"
    ... },
    ... {
    ...   "firstName": "Rohan",
    ...   "lastName": "Jame",
    ...   "salary": "30000",
    ...   "department": "Technical",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "1",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "Doe",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "20000",
    ...   "overallExp": "1",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "ECE"
    ... },
    ... {
    ...   "firstName": "Sao",
    ...   "lastName": "Avika",
    ...   "salary": "30000",
    ...   "department": "Sales",
    ...   "lastCompany": "Y",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "1234567860",
    ...   "yearGrad": "2015",
    ...   "gradStream": "CSE"
    ... },
    ... {
    ...   "firstName": "Jame",
    ...   "lastName": "Doe",
    ...   "salary": "35000",
    ...   "department": "Accounts",
    ...   "lastCompany": "Z",
    ...   "lastSalary": "15000",
    ...   "overallExp": "2",
    ...   "contactInfo": "123567890",
    ...   "yearGrad": "2019",
    ...   "gradStream": "EEE"
    ... }]);
    {
      acknowledged: true,
      insertedIds: {
        '0': ObjectId("63807d53a59e6eff71d20c22"),
        '1': ObjectId("63807d53a59e6eff71d20c23"),
        '2': ObjectId("63807d53a59e6eff71d20c24"),
        '3': ObjectId("63807d53a59e6eff71d20c25"),
        '4': ObjectId("63807d53a59e6eff71d20c26"),
        '5': ObjectId("63807d53a59e6eff71d20c27"),
        '6': ObjectId("63807d53a59e6eff71d20c28"),
        '7': ObjectId("63807d53a59e6eff71d20c29"),
        '8': ObjectId("63807d53a59e6eff71d20c2a"),
        '9': ObjectId("63807d53a59e6eff71d20c2b"),
        '10': ObjectId("63807d53a59e6eff71d20c2c"),
        '11': ObjectId("63807d53a59e6eff71d20c2d"),
        '12': ObjectId("63807d53a59e6eff71d20c2e")
      }
    }


  

  Human_Resource> db.employee.find().pretty();
    [
      {
        _id: ObjectId("63807c3f02943a08224458b5"),
        firstName: 'John',
        lastName: 'Doe',
        salary: '25000',
        department: 'HR',
        lastCompany: 'X',
        lastSalary: '10000',
        overallExp: '2',
        contactInfo: '1234567890',
        yearGrad: '2016',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807c3f02943a08224458b6"),
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807c3f02943a08224458b7"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("63807c3f02943a08224458b8"),
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c22"),
        firstName: 'John',
        lastName: 'Doe',
        salary: '25000',
        department: 'HR',
        lastCompany: 'X',
        lastSalary: '10000',
        overallExp: '2',
        contactInfo: '1234567890',
        yearGrad: '2016',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c23"),
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c24"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c25"),
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c26"),
        firstName: 'Jame',
        lastName: 'roh',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c27"),
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c28"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c29"),
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c2a"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c2b"),
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c2c"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c2d"),
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE'
      },
      {
        _id: ObjectId("63807d53a59e6eff71d20c2e"),
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE'
      }
    ]

---------------------------------------------------------------------


Query the collection ""employee"" and list the employees who are having salary more than 30000

Human_Resource>db.employee.find({
  "salary" : { $gt:"30000"}
});

[
  {
    _id: ObjectId("63807c3f02943a08224458b7"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c24"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c26"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c28"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c2a"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c2c"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("63807d53a59e6eff71d20c2e"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea00320a"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea00320c"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea00320e"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea003210"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea003212"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6381a4c57af7501dea003214"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
Human_Resource>

---------------------------------------------------------------------------

Query the collection ""employee"" and list the employees who are having experience more than 2 years.

Human_Resource> db.employee.find({
  ... "overallExp":{ $gt : "2"}
  ... });
  
  Human_Resource>

--------------------------------------------------------------------------
Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

Human_Resource> db.employee.find({
  ...   $and:
  ...   [
  ...     {
  ...       "yearGrad": { $gt : "2015"}
  ...     },
  ...     {
  ...       "overallExp": { $gt : "1"}
  ...     }
  ...   ]
  ...
  ... });
  [
    {
      _id: ObjectId("63807c3f02943a08224458b5"),
      firstName: 'John',
      lastName: 'Doe',
      salary: '25000',
      department: 'HR',
      lastCompany: 'X',
      lastSalary: '10000',
      overallExp: '2',
      contactInfo: '1234567890',
      yearGrad: '2016',
      gradStream: 'CSE'
    },
    {
      _id: ObjectId("63807d53a59e6eff71d20c22"),
      firstName: 'John',
      lastName: 'Doe',
      salary: '25000',
      department: 'HR',
      lastCompany: 'X',
      lastSalary: '10000',
      overallExp: '2',
      contactInfo: '1234567890',
      yearGrad: '2016',
      gradStream: 'CSE'
    },
    {
      _id: ObjectId("63807d53a59e6eff71d20c26"),
      firstName: 'Jame',
      lastName: 'roh',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    },
    {
      _id: ObjectId("63807d53a59e6eff71d20c2a"),
      firstName: 'Jame',
      lastName: 'Doe',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    },
    {
      _id: ObjectId("63807d53a59e6eff71d20c2e"),
      firstName: 'Jame',
      lastName: 'Doe',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    },
    {
      _id: ObjectId("6381a4c57af7501dea003208"),
      firstName: 'John',
      lastName: 'Doe',
      salary: '25000',
      department: 'HR',
      lastCompany: 'X',
      lastSalary: '10000',
      overallExp: '2',
      contactInfo: '1234567890',
      yearGrad: '2016',
      gradStream: 'CSE'
    },
    {
      _id: ObjectId("6381a4c57af7501dea00320c"),
      firstName: 'Jame',
      lastName: 'roh',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    },
    {
      _id: ObjectId("6381a4c57af7501dea003210"),
      firstName: 'Jame',
      lastName: 'Doe',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    },
    {
      _id: ObjectId("6381a4c57af7501dea003214"),
      firstName: 'Jame',
      lastName: 'Doe',
      salary: '35000',
      department: 'Accounts',
      lastCompany: 'Z',
      lastSalary: '15000',
      overallExp: '2',
      contactInfo: '123567890',
      yearGrad: '2019',
      gradStream: 'EEE'
    }
  ]
  Human_Resource>


-------------------------------------------------------------------------------------------------------------

Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

Human_Resource> db.employee.updateMany(
  ...   {
  ...     "salary": "70000"
  ...   },
  ...   {
  ...       $set:{
  ...         "salary": "65000"
  ...       }
  ...   }
  ...   );
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 0,
    modifiedCount: 0,
    upsertedCount: 0
  }
  Human_Resource>

-----------------------------------------------------------------------------------

Delete all the documents from ""employee"" where last company is Y"


Human_Resource> db.employee.find({
  ... "lastCompany":"Y"
  ... })
  .projection({"lastCompany":1});
  [
    { _id: ObjectId("6381b33c7af7501dea003216"), lastCompany: 'Y' },
    { _id: ObjectId("6381b33c7af7501dea003218"), lastCompany: 'Y' },
    { _id: ObjectId("6381b33c7af7501dea00321a"), lastCompany: 'Y' },
    { _id: ObjectId("6381b33c7af7501dea00321c"), lastCompany: 'Y' },
    { _id: ObjectId("6381b33c7af7501dea00321e"), lastCompany: 'Y' },
    { _id: ObjectId("6381b33c7af7501dea003220"), lastCompany: 'Y' }
  ]
  Human_Resource>

  Human_Resource> db.employee.deleteMany({
    ... "lastCompany":"Y"
    ... });
    { acknowledged: true, 
      deletedCount: 6 }
  Human_Resource>

  ---------------------------------------------------------------------------------
