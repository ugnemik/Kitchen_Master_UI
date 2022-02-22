let emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    
    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")

    let userEmailAddress = ourFormData.get('emailAddress')

    let updatedHtmlContent = 
    `
    <h2 class="contact-title" >Congratulations, ${userFirstName}!</h2>

        <p class="contact-subtitle" >You're on your way to becoming a KITCHEN MASTER!</p>
        
        <p class="contact-small-text">You will get weekly cooking tips sent to: ${userEmailAddress}</p>
    `
    
    let ourMainContent = document.getElementById("main-content")

    ourMainContent.innerHTML = updatedHtmlContent
    
})

    