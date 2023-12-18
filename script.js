const students = [] ;
function AddRecord(){
    document.getElementById("form").style.display='block';
}
function AddStudent(event){
    console.log(event.key);
    if(event.key=='Enter'){
        let fname = document.getElementById("txtFirstName").value;
        let Address = document.getElementById("txtAddress").value;
        let batch = document.getElementById("txtBatch").value;
        let student= {firstName: fname, Address: Address, batch : batch};
        students.push(student);
        console.log(students);
        document.getElementById("NoRecords").style.display='none';
        DisplayStudents();
        document.getElementById("TotalStudents").innerHTML="Total number of students :" + students.length;
        document.getElementById("TotalB002Students").innerHTML="Total number of B002 batch students :" + GetBatchStudents("B002");
    }
    
}

function GetBatchStudents(batch){
    const res = students.filter(std => std.batch.includes(batch))
    //const res= students.filter(students.batch==batch);
    return res.length;
}


function DeleteRecord(){
    if(students.length==0){
        alert("There are no records");
    }else{
        if(confirm("Do you want to delete a record ?")){
            students.pop();
            document.getElementById("txtFirstName").value="";
            document.getElementById("txtAddress").value="";
            document.getElementById("txtBatch").value=""
            DisplayStudents();
            document.getElementById("TotalStudents").innerHTML="Total number of students :" + students.length;
            document.getElementById("TotalB002Students").innerHTML="Total number of B002 batch students :" + GetBatchStudents("B002");
        }
    }
    if(students.length==0){
        document.getElementById("NoRecords").style.display='block';
    }

}

function DisplayStudents(){
    let list = document.getElementById("studentList");
    list.innerHTML="";
    for (i = 0; i < students.length; ++i) {
        list.innerHTML = list.innerHTML + "<li>"+'<ul>'+"<li>"+ 
        "First name : "+students[i].firstName + "</li>" +"<li>"+
        "Adresss : "+ students[i].Address  + "</li>" +"<li>"+
        "Batch : "+ students[i].batch + "</li>"+'</ul>'+"</li>";
        console.log(list.innerHTML);
    }
}

