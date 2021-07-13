//init github
const github = new Github;
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup' || 'touchend', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        // make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');



                } else {
                    // show profile
                    ui.showProfile(data.profile);

                }



            })
    } else {
        //clear profile 
        ui.clearProfile();

    }
})