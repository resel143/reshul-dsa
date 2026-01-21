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


// Q1 - Arrya of all student names

function studentNames(arr){
    let studNames = arr.reduce((acc,curr)=>{[...acc, curr.name]},{})

    return studNames
}

console.log(studentNames(students))