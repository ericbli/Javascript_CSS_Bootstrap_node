const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
console.log("传统循环展示整体");
 for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
for(let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}
// forEach
console.log("foreach循环展示公司名及数组:");

companies.forEach(function(company) {
  console.log(company.name);
});
ages.forEach(function(ages) {
  console.log(ages);
});
// filter

// Get 21 and older
console.log("传统办法过滤大于21的:");
 let canDrink = [];
 for(let i = 0; i < ages.length; i++) {
   if(ages[i] >= 21) {
     canDrink.push(ages[i]);
   }
 }

 canDrink.forEach(function(canDrink) {
  console.log(canDrink);
});


console.log("箭头函数过滤大于21的:");
 const canDrink2 = ages.filter(function(age) {
   if(age >= 21) {
     return true;
   }
 });

 canDrink2.forEach(function(canDrink2) {
  console.log(canDrink2);
});
console.log("箭头函数更简洁的过滤大于21的:");
 const canDrink3 = ages.filter(age => age >= 21);
 canDrink3.forEach(function(canDrink3) {
  console.log(canDrink3);
});
// Filter retail companies
console.log("传统办法过滤公司种类:");
 const retailCompanies = companies.filter(function(company) {
   if(company.category === 'Retail') {
     return true;
   }
 });
 retailCompanies.forEach(function(retailCompanies) {
  console.log(retailCompanies);
});

console.log("箭头函数过滤公司:");
const retailCompanies2 = companies.filter(company => company.category === 'Retail');
retailCompanies2.forEach(function(retailCompanies2) {
  console.log(retailCompanies2);
});
// Get 80s companies
console.log("箭头函数过滤公司:80年代的");
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
eightiesCompanies.forEach(function(eightiesCompanies) {
  console.log(eightiesCompanies);
});
// Get companies that lasted 10 years or more
console.log("箭头函数过滤公司:生存10年及以上的");
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
lastedTenYears.forEach(function(lastedTenYears) {
  console.log(lastedTenYears);
});
// map

// Create array of company names
console.log("map公司名集合");
const companyNames = companies.map(function(company) {
  return company.name;
 });
 companyNames.forEach(function(companyNames) {
  console.log(companyNames);
});

console.log("传统map公司名及起止年份集合");

 const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
 });
 testMap.forEach(function(testMap) {
  console.log(testMap);
});
console.log("箭头函数map公司名及起止年份集合");
 const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
testMap2.forEach(function(testMap2) {
  console.log(testMap2);
});
console.log("箭头函数map数组集合运算");
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

  ageMap.forEach(function(ageMap) {
    console.log(ageMap);
  });


// sort

// Sort companies by start year
console.log("传统的公司开始年代排序");
 const sortedCompanies  = companies.sort(function(c1, c2) {
   if(c1.start > c2.start) {
     return 1;
   } else {
     return -1;
   }
 });


 sortedCompanies.forEach(function(sortedCompanies) {
  console.log(sortedCompanies);
});


console.log("箭头函数的公司开始年代排序");
 const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
 sortedCompanies2.forEach(function(sortedCompanies2) {
  console.log(sortedCompanies2);
});
console.log(sortedCompanies2);
// Sort ages
console.log("箭头函数的数字排序");
 const sortAges = ages.sort((a, b) => a - b);
 sortAges.forEach(function(sortAges) {
  console.log(sortAges);
});
 console.log(sortAges);


// reduce
console.log("传统求和法");
 let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

console.log("reduce求和法");
 const ageSum2 = ages.reduce(function(total, age) {
   return total + age;
 }, 0);
 console.log(ageSum2);

 console.log("箭头函数reduce求和法");
 const ageSum3 = ages.reduce((total, age) => total + age, 0);
 console.log(ageSum3);
// Get total years for all companies
console.log("公司年份传统求和法");
 const totalYears = companies.reduce(function(total, company) {
   return total + (company.end - company.start);
 }, 0);
 console.log(totalYears);
 console.log("箭头函数公司年份传统求和法");
const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears2);
// Combine Methods
console.log("箭头函数filter sort reduce等方法混合");
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
