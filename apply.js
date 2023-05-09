


let userFound = false;
function send(event) {
  event.preventDefault();

  // Get form data
  const firstName = document.getElementById("hireUsFormFirstName").value;
  const lastName = document.getElementById("hireUsFormLasttName").value;
  const username = document.getElementById("hireUsFormUsername").value;
  const email = document.getElementById("hireUsFormWorkEmail").value;
  const ifatc = document.getElementById("hireUsFormIFATC").value;
  const details = document.getElementById("hireUsFormDetails").value;

  const url = 'https://api.infiniteflight.com/public/v2/users//#/?discourseNames=["Speedbird101"]?api_key=<"87sjb5v83oqje4e91t40s4sfd7vspu5m">';


  let data;
  async function test() {
    let  data_json = {
      "discourseNames": [
        document.getElementById("hireUsFormUsername").value
      ]
    };
    try {
      const response = await fetch('https://api.infiniteflight.com/public/v2/users?apikey=87sjb5v83oqje4e91t40s4sfd7vspu5m', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_json)
      });
      data = await response.json();

      if (data.result[0].length == 0) {
        console.log("No user found");
      }
    } catch (error) {
      console.error("No user found");
      window.location.href = "./noUser.html";
    } 










let correct = false;
  // Validate form data
  if (!firstName || !lastName || !username || !email ||  !ifatc || !details) {
    // Show error message
    document.getElementById("message").innerHTML = "Please fill in all fields.";
    return;
  } 

  if(data.result[0].grade < 3) {
    correct = false
    window.location.href = "./gradeLow.html";
  } else {
    correct = true
  }

  

if(correct == true){
  console.log("Nice job");
  // Send form data to webhook
  fetch("https://discord.com/api/webhooks/1102653530034155691/ILWW-wh-zlhOtdXUzCHiu4ZjzxvTEmOXQ72ms_MdjSM9ZYgYuw2xPMglL5teZrMcfsFE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "New Application",
          description: `**New application from** ${firstName} ${lastName}`,
          color: 16711680,
          fields: [
            {
              name: "Email",
              value: email,
            },
            {
              name: "IFC",
              value: `@${username}`,
              inline: true,
            },
            {
              name: "IFATC",
              value: ifatc,
              inline: true,
            },
            {
              name: "Notes",
              value: details,
            },
          ],
        },
      ],
    }),
  })
} else {
  console.log("Not nice");
}
}
  test()
  .then(() => {
    // Show success message 
    document.getElementById("message").style.display = "none";
    document.getElementById("messageok").style.display = "block";
    document.getElementById("messageok").innerHTML = "You will be redirected shortly, please wait...";
    
    // Redirect to confirmation page after 5 seconds
    setTimeout(() => {
       window.location.href = "./success.html";
    }, 2000);
  })
  
    .catch((error) => {
      // Show error message
      document.getElementById("message").innerHTML = "An error occurred while sending the application.";
      console.error(error);
    });
}

if(userFound = true){
  console.log("Nice");
} else {
  console.log("Not nice");
}





