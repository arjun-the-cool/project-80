people_array=[]
function submit()
{
    name_of_the_person=document.getElementById("name").value
    people_array.push(name_of_the_person);
}
function show_list()
{
    display_array=[];
    length_of_array=people_array.length;
    for(i=1; i<length_of_array; i++)
    {
        var HTMLdata=people_array[i];
        display_array.push(HTMLdata);
    }
    document.getElementById("display").innerHTML=display_array
}
function sorting()
{
    people_array.sort()
    document.getElementById("i").innerHTML=people_array
}
function search()
{
    var s=document.getElementById("s1").value;
    var found=0;
    var j=0;
    for(j=0; j<people_array.length; j++)
    {
        if(s==people_array[j])
        {
            found=found+1
        }
    }
    document.getElementById("l").innerHTML="name found " +found+ "time/s";
    console.log("name found " +found+ "time/s");
}