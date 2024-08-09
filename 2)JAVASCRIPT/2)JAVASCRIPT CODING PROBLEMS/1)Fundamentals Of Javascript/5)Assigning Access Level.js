/*
1)Employees with the job title Manager should be assigned "Full Access" 
regardless of the year of experience.

2)For Employees with the job title Supervisor, if the years of experience is
5 or more, then "Full Access"  should be assigned. Otherwise, they should
be assigned "Partial Access." 

3)For Employees with the job title Associate, if the years of experience is
3 or more, then "Partial Access"  should be assigned. Otherwise, they
should be assigned "Limited Access." 

4)Employees with any other job title with 2 or more years of experience
 should be assigned "Limited Access."  Otherwise, they should be assigned 
 "Trainee Access." 
*/


function main(jobTitle, yearsOfExperience) {
    let accessLevel;
    if(jobTitle==="Manager")
    {
        accessLevel= "Full Access";
    }
    else if(jobTitle==="Supervisor")
    {
        if(yearsOfExperience>=5)
        {
          accessLevel= "Full Access"; 
        }
        else{
            accessLevel="Partial Access";
        }
    }
    else if(jobTitle==="Associate")
    {
        if(yearsOfExperience>=3)
        {
          accessLevel= "Partial Access"; 
        }
        else{
            accessLevel="Limited Access";
        }
    }
    else{
        if(yearsOfExperience>=2)
        {
          accessLevel= "Limited Access"; 
        }
        else{
            accessLevel="Trainee Access";
        }

    }
  
    return accessLevel;
  }
  
console.log(main("Associate",3 ));
  