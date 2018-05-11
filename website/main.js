document.getElementById('getEmails').addEventListener('click', loadEmails);
document.getElementById('getUsers').addEventListener('click', loadUsers);

    function loadEmails(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

        
        xhr.onload = function(){
            if(this.status == 200){
                const emails = JSON.parse(this.responseText);
                
                const array = []
               
                for(var i in emails){
                    array.push(emails[i].email);
                                        
                    // output +=
                    // '<div class ="users">' +
                    // '[' +users[i].email+']' +
                    // '</div>'; 
                }
                const output = array.sort();
                
                document.getElementById('emails').innerHTML = output;
            }
        }
        

        xhr.send();
    }

    function loadUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            let output = [];
            data.forEach(function(user){
                output += `
                    ["${user.username}"],
                    `;
            });
            document.getElementById('usernames').innerHTML = output;
        })
    }