document.addEventListener("DOMContentLoaded", function () {
    var alarmIcon = document.getElementById('alarmIcon');
    var alarmSubmenu = document.getElementById('alarmSubmenu');

    var userDeets = document.getElementById('userDeets');
    var deetsSubmenu = document.getElementById('deetsSubmenu');

    var closeCta = document.getElementById('closeCta')
    var trialSection = document.getElementById('trialSection')

    function closeAllSubmenus() {
        alarmSubmenu.classList.remove('active');
        deetsSubmenu.classList.remove('active');
    }

    alarmIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        closeAllSubmenus();
        alarmSubmenu.classList.toggle('active');
    });

    userDeets.addEventListener('click', function (event) {
        event.stopPropagation(); 
        closeAllSubmenus();
        deetsSubmenu.classList.toggle('active');
    });

    closeCta.addEventListener('click', function(){
        trialSection.classList.add('active');
    })

    document.body.addEventListener('click', function () {
        closeAllSubmenus();
    });
    
    // The accordion section
    var accordionSection = document.getElementById('accordionSection');
    var arrowToggle = accordionSection.querySelector('.arrow_toggle');
    var tasks = accordionSection.querySelectorAll('.task_1');

    // Add an event listener to the arrow button to toggle the accordion on click
    arrowToggle.addEventListener('click', function () {
        arrowToggle.classList.toggle('opened');
        tasks.forEach(function(task){
            task.classList.toggle('opened');
        })
    });

    // Add an event listener to the accordion body to toggle the accordion on click
    tasks.forEach(function (task) {
        var checks = task.querySelectorAll('.checks');
        var taskBody = task.querySelector('.task_body');

        checks.forEach(function (check) {
            check.addEventListener('click', function () {
                tasks.forEach(function (otherTask) {
                    if (otherTask !== task) {
                        otherTask.querySelectorAll('.checks').forEach(function (otherCheck) {
                            otherCheck.classList.remove('opened', 'active');
                        });
                        otherTask.classList.remove('active');
                        otherTask.querySelector('.task_body').classList.remove('opened');
                    }
                });

                check.classList.toggle('opened');
                check.classList.toggle('active');
                task.classList.toggle('active');
                taskBody.classList.toggle('opened');
            });
        });
    });

    const numCheckboxes = 5;
    const checkboxContainers = document.getElementsByClassName('checksImage');
    // Function to create a checkbox element
    function createCheckbox() {
        return `
        <label>
        <input type='checkbox' />
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.6">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/>
            </g>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z" fill="white"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z" fill="white"/>
            </svg>
        </span>
        </label>`;
    }

    for (let container of checkboxContainers) {
        for (let i = 0; i < numCheckboxes; i++) {
            container.insertAdjacentHTML('beforeend', createCheckbox());
        }
    }

    // For the progress bar
    let completedTasks = 0;
    const progressBar = document.getElementById('progressBar');
    const progressNumber = document.getElementById('progressNumber');

    const checkboxes = document.querySelectorAll('.checksImage input[type="checkbox"]');
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', function (event) {
            event.stopPropagation();
            checkbox.parentElement.classList.toggle('checked');

            if (checkbox.parentElement.classList.contains('checked')) {
                completedTasks++;
            } else {
                completedTasks--;
            }

            const progressPercentage = ((completedTasks / numCheckboxes) * 90 + 10);
            progressBar.querySelector('.progress').style.width = (completedTasks > 0) ? `${progressPercentage}%` : '0';
            progressBar.style.width = `${progressPercentage}%`;
            progressNumber.textContent = `${completedTasks}/${numCheckboxes} completed`;
        });
    }


});


