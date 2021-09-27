var numberOfStudents = 0
var students = [];

function addStudent(name)
{
    student.push(name)
    //numberOfStudents++ 
    numberOfStudents = students.length
}

function getNumberOfStudents()
{
 return(numberOfStudents)
}

addStudent("Stevie")
addStudent("Aymen")
addStudent("Youssef")
addStudent("Reese")
addStudent("Tommy")

function clearStudents()
{
    students = []
    numberOfStudents = 0
}

function createFullName(firstName, lastName)
{
    fullName = firstName + " " + lastName
    return(fullName)
}

/*function getStudentByInitials(name, initial)

{
    if (name[0] === initial)
    {
         return (true) 
        } else {
             return (false)
              }

        }*/

function isFullName (name)
{
 split = name.split(" ")
 if (split.length === 2)
 {
     return(true)
 }else{
     return (false)
 }
}
/*function getStudentsByInitialsN1 (firstNameInitial)
{
    for(var i=0; i<=students.length;i=i+1)
    {
        var arr = []
        var name ="";
        students[i] = name
        if (firstNameInitial === name[0])
        {
            arr[i] = name
        }
    }
    return(arr)
}*/
function getStudentsByInitialsN2 ( firstNameInitial, lastNameInitial)
{
    for(var i=0; i<=students.length;i=i+1)
    {
        var split = []
        var arr = []
        while (isFullName(students[i]))
        {
            split= split.students[i]
            fn = split[0]
            ln = split[1]
        }
        if (fn === firstNameInitial && ln === lastNameInitial)
        {
            arr[i] = students[i]
        }
        
    }
    return(arr)
}

var student= {}
student.firstName = "Aziz",
student.lastName = "Maazouz",
student.fullName = "Aziz Maazouz",
student.email = "myemail@mail.com",
student.age = "23",
student.education = "Software Engineering Stundent"


function createStundent(firstName, lastName, email, age, education)
{

}
 

