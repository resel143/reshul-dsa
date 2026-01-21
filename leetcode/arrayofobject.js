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
  }
];


// Q2 - Students from Mechanical Department


function mechStudents(arr){
  let mechNames = arr.reduce((acc, curr)=> {
    if(curr.department = "Mechanical"){
      acc.push(curr)
    }
    return acc;
  }, [])

  return mechNames
}

console.log(mechStudents(students))