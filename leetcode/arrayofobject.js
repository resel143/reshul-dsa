const students = [
  {
    id: 1,
    name: "Aarav",
    department: "Computer Science",
    semester: 2,
    feesPaid: [50000, 48000],
    isActive: true
  },
  {
    id: 2,
    name: "Diya",
    department: "Mechanical",
    semester: 3,
    feesPaid: [45000, 47000, 48000],
    isActive: false
  },
  {
    id: 3,
    name: "Kabir",
    department: "Computer Science",
    semester: 5,
    feesPaid: [52000, 53000, 54000, 55000, 56000],
    isActive: true
  },
  {
    id: 4,
    name: "Isha",
    department: "Electrical",
    semester: 2,
    feesPaid: [40000, 42000],
    isActive: true
  },
  {
    id: 5,
    name: "Rohan",
    department: "Mechanical",
    semester: 6,
    feesPaid: [48000, 49000, 50000, 51000, 52000, 53000],
    isActive: true
  },
  {
    id: 6,
    name: "Ananya",
    department: "Civil",
    semester: 4,
    feesPaid: [43000, 44000, 45000, 46000],
    isActive: true
  },
  {
    id: 7,
    name: "Vikram",
    department: "Computer Science",
    semester: 7,
    feesPaid: [56000, 57000, 58000, 59000, 60000, 61000, 62000],
    isActive: false
  },
  {
    id: 8,
    name: "Neha",
    department: "Electrical",
    semester: 1,
    feesPaid: [41000],
    isActive: true
  },
  {
    id: 9,
    name: "Arjun",
    department: "Mechanical",
    semester: 2,
    feesPaid: [46000, 47000],
    isActive: true
  },
  {
    id: 10,
    name: "Pooja",
    department: "Civil",
    semester: 8,
    feesPaid: [50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000],
    isActive: false
  }
];

// Q10. Calculate average fees per semester per department.

function avgFeesPerSemPerDeptt(arr){

    let depttWiseSegregation = arr.reduce((acc, curr)=>{
          if(acc[curr.department]){
            acc[curr.department].push({'name':curr.name, 'feesPaid': curr.feesPaid, 'semester':curr.semester})
          }else{
            acc[curr.department] = [{'name':curr.name, 'feesPaid': curr.feesPaid, 'semester':curr.semester}]
          }

          return acc;
    },{})

    // looping over objec

    for(let key in depttWiseSegregation){

      let totalSem=0, totalFees=0;

      for(let item of depttWiseSegregation[key]){
        totalSem+=item.semester;
        for(let fee of item.feesPaid){
          totalFees+=fee
        }
      }

      depttWiseSegregation[key]['totalFees'] = totalFees
      depttWiseSegregation[key]['totalSemester'] = totalSem

    }

    let currObj = Object.entries(depttWiseSegregation).reduce((acc, [key, value])=>{
        acc[key] = {'totalFees':value.totalFees, 'totalSemester': value.totalSemester}  

        return acc;
    },{})

    let finalOutput = Object.entries(currObj).reduce((acc, [key, value])=>{
      acc[key] = value.totalFees / value.totalSemester
      return acc;
    },[])

    return finalOutput;
    
}


console.log(avgFeesPerSemPerDeptt(students))