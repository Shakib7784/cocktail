const Student1 ={

    name:"Shakib",
    Roll:1,
    tutionFees:20000,
    Bestfriend:{
        name:"A",
        Roll:2
    },
    course:["CSC 183", "CSC 184","Eng 250"],
    payTution: function(due)
    {
            this.tutionFees= this.tutionFees+due;
            // console.log(this);
            return this.tutionFees;
    }
}

// const result= Student1.payTution(3000);

/* const student2={

    Name: "hasan",
    Roll:3,
    tutionFees:30000,
}

const result2= Student1.payTution.bind(student2);
result2(4000);
result2(2000);
 */

const newString = `

    Name:${Student1.name}
    Bestfriend: ${Student1.Bestfriend.name}
    course: ${Student1.course[2]}
    paytution:${Student1.payTution(200)}
`
console.log(newString);