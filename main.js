// project1 button
let emgRobot = document.getElementsByClassName("project1")[0];
//project1 data
let emgRobotProjectData = document.getElementsByClassName("emg-robot")[0];
emgRobotProjectData.style.display = 'none';


emgRobot.addEventListener('click', function(){
    if (emgRobotProjectData.style.display === 'none') {
        emgRobotProjectData.style.display = 'block';
    } else {
        emgRobotProjectData.style.display = 'none';
    }
});