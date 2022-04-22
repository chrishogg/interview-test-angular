using StudentApi.Models.Students;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApi.Services
{
    public class StudentsService : IStudentsService
    {
        public List<Student> students = new List<Student>();

        public StudentsService()
        {
            students.Add(new Student
            {
                FirstName = "Marty",
                LastName = "McFly",
                Email = "back.future@test.com",
                Major = "History",
                AverageGrade = 74
            });

            students.Add(new Student {
                FirstName = "Emmett",
                LastName = "Brown",
                Email = "dr.brown@test.com",
                Major = "Physics",
                AverageGrade = 92
            });

            students.Add(new Student
            {
                FirstName = "Biff",
                LastName = "Tannen",
                Email = "biff@test.com",
                Major = "PE",
                AverageGrade = 56
            });
        }

        /// <summary>
        /// Adds a new student to the system
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool AddStudent(Student student)
        {

            bool studentExists = false;

            //there will be a nicer way of doing this, but we should check if the student already exists. Would normally be a db call, or something.
            if(students.Count > 0)
            {
                //loop over the students
                foreach (var stu in students)
                {
                    //just check email for now, sometimes its usually the only unqiue thing.
                    if (stu.Email == student.Email)
                    {
                        studentExists = true;
                        break;
                    }
                }
            }

            //if they don't exist, add them
            if(studentExists == false)
            {
                //add the new student to the list.
                students.Append(student);
                return true;
            }
            else
            {
                return false;
            }

        }

        /// <summary>
        /// removes a student from the system
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public bool DeleteStudent(Student student)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Returns all of the students currently in the system
        /// </summary>
        /// <returns></returns>
        public List<Student> GetAllStudents()
        {
            return students;
        }
    }
}
