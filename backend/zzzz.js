const listOfEmployees = [
    {
      id: 145,
      emp_no: 'U145',
      first_name: 'Alexandra',
      last_name: 'Daddario',
      city: 'Los Angeles'
    },
    {
      id: 147,
      emp_no: 'Z789',
      first_name: 'Rock Dwayne',
      last_name: 'Johnson',
      city: 'Los Angeles'
    },
    {
        id: 889,
        emp_no: 'T878',
      first_name: 'Deepika',
      last_name: 'Padukone',
      city: 'Newyork'
    }
  ];

  function formatEmployee(empData) {
      empData.full_name = empData.first_name + empData.last_name;
      return empData;
  }

//   const convertedList =  listOfEmployees.map((emp) => {
//       emp.full_name = emp.first_name + ' ' + emp.last_name;
//       return emp;
//   });
console.log(this);
const convertedList = listOfEmployees.map(formatEmployee);

  console.log(convertedList);