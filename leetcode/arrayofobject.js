const students = [
  {
    id: 1,
    name: "Aarav",
    department: "Computer Science",
    semester: 1,
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

// Q6. Find the average fees per semester for each student.

function avgFeesPerSemester(arr){


  // Step 1 - Array of each students, their semester and fees 

  let studentData = arr.reduce((acc, curr)=>{
      acc.push({
        'name': curr.name,
        'semester': curr.semester,
        'avgFees': curr.feesPaid
      })

      return acc
  },[])

  // Step2 - Calculate the Avg Fees
  for(let item of studentData){
    let totalFees = 0;


    for(let fee of item.avgFees){
      totalFees+= fee
    }

    item.avgFees = totalFees/item.semester;
  }

  return studentData

}

console.log(avgFeesPerSemester(students))