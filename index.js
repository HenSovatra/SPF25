  AOS.init();

  $(document).ready(function(){
    const CountUp = window.countUp.CountUp;
    const START_DATE = '2025-01-01'; 
    const finalValue = calculateDaysFromStart(START_DATE);
    const targetElement = 'experiences-amount'; 
    const options = {
        duration: 5,           
        startVal: 0,           
        separator: ',',        
        prefix: '',            
        suffix: ' Days'
    };
    const optionsProject = {
        duration: 5,           
        startVal: 0,           
        separator: ',',        
        prefix: '',            
        suffix: ' Projects'
    };
    const optionsLine = {
        duration: 5,           
        startVal: 0,           
        separator: ',',        
        prefix: '',            
        suffix: 'K Lines'
    };
    const demo = new CountUp(targetElement, finalValue, options);
    const demoProject = new CountUp("project-amount", 10, optionsProject);
    const demoLine = new CountUp("line-amount", 987, optionsLine);
    if (!demo.error && !demoProject.error) {
        demo.start();
        demoProject.start();
        demoLine.start();
    } else {
        console.error(demo.error);
    }
});
  function calculateDaysFromStart(startDateString) {
    const ONE_DAY_MS = 1000 * 60 * 60 * 24; 
    const startDate = new Date(startDateString);
    const currentDate = new Date();
    const timeDifferenceMs = currentDate.getTime() - startDate.getTime();
    const dayDifference = Math.floor(timeDifferenceMs / ONE_DAY_MS);
    return dayDifference;
}