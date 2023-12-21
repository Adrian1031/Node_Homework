const students = [
 {ime: "Snezana", prosek: 7.2, grad: "Skopje"},
 {ime: "Vesna", prosek: 9.7, grad: "Skopje"},
 {ime: "Dajra", prosek: 10, grad: "Skopje"},
 {ime: "Elena", prosek: 6.2, grad: "Bitola"},
 {ime: "Muhamed", prosek: 10, grad: "Kumanovo"},
 {ime: "Dzejlan", prosek: 9.2, grad: "Kumanovo"},
 {ime: "Milim", prosek: 7.2, grad: "Kumanovo"},
 {ime: "Selim", prosek: 7.8, grad: "Kichevo"},
 {ime: "Martina", prosek: 5.2, grad: "Tetovo"},
 {ime: "Simona", prosek: 5.2, grad: "Bitola"},
 {ime: "Stojmir", prosek: 6.2, grad: "Strumica"},
 {ime: "Mitre", prosek: 8, grad: "Pehcevo"},
 {ime: "Damjan", prosek: 5, grad: "Shtip"},
 {ime: "Aleksandar", prosek: 7, grad: "Veles"},
];
{
const filteredStudents = students.filter(
    students => students.ime.endsWith('a') && students.prosek > 7 && students.grad.toLowerCase() === 'skopje'
  );
  console.log(filteredStudents);
};
{
  const filterStudents = students.filter(
    students => students.prosek > 9 && students.grad.toLowerCase() === 'skopje'
  )
    .sort((a,b) => b.prosek - a.prosek );

  console.log(filterStudents);
  };
  {
    const filterStudents = students.filter(
        students => students.ime.length === 5
    )
    .sort((a,b) => a.prosek - b.prosek);
    console.log(filterStudents)
  }
{
const kumanovoStudents = students.filter(student => student.grad.toLowerCase() === 'kumanovo');
const totalSumKumanovo = kumanovoStudents.reduce((sum, student) => sum + student.prosek, 0);
const overallAverageKumanovo = totalSumKumanovo / kumanovoStudents.length;

 console.log(overallAverageKumanovo)
    

}


