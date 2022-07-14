// project1 button
let emgRobot = document.getElementsByClassName("project1")[0];
//project1 data
let emgRobotProjectData = document.getElementsByClassName("emg-robot")[0];
emgRobotProjectData.hidden=true;

let counter = 0;

 //counter = 0 > content is hidden and will now be shown
 //counter = 1 > content is visible and will now be hidden
 document.getElementsByClassName("project1")[0].onclick=function(){
    if(counter===0){
    emgRobotProjectData.hidden=false;
    counter=1;
    } else {
    emgRobotProjectData.hidden=true;
    counter=0;
    }
}