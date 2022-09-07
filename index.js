// // Add your code here

// const formData = {
//     dogName:"Byron",
//     dogBreed: "Poodle"
// };

// const configurationObject = { //When the method: "POST", is excluded from the code, there is an error, and an alert pops up when the page refreshes/loads.
//     // method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
        
//     };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(function(error) {
//     alert("Bad things! Ragnarok!"); 
//     console.log(error.message);
// })




function submitData(userName, userEmail) {
    const bodyObject = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bodyObject),
    };

    fetch("http://localhost:3000/users", configurationObject) 
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(error => document.body.innerHTML = error.message)

    return (
        fetch("http://localhost:3000/users",configurationObject)
        .then(response => response.json())
        .then(object => document.body.innerHTML = object.id)
    )}

submitData("Steve", "steve@steve.com");
