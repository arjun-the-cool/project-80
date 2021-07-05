name_of_the_student_array=[];
function submit()
{
    var display_student_array=[];

    for(var a=1; a<=4; a++)
    {
        var name_of_the_student=document.getElementById("name_of_the_student_"+a).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);

    var length_of_the_name_students_array=name_of_the_student_array.length;
    console.log(length_of_the_name_students_array);

    for(var r=0; r<length_of_the_name_students_array; r++)
    {
        display_student_array.push("<h4>NAME - " + name_of_the_student_array[r] + "</h4>");
    console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting=[];
    var length_of_the_name_students_array=name_of_the_student_array.length;
    console.log(length_of_the_name_students_array);
    for(var y=0; y<length_of_the_name_students_array; y++)
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[r] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML="<h1>" + name_of_the_student_array + "</h1>"
}