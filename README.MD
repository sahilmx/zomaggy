## About Project 
    Zomato clone with live working example 
    
    `Backend`
    Backend powered by Sanity.io with is a powerful javascript CRM that is used to add new restraunts for zomaggy app 
    along with differnet dishes categories and Offers running on the app.

    `Frount end`
    React-Native with tailwind CSS and react-redux is used to mantain the store across the application 
    

# Start the Project on expo go  

    #    add project id in this location
        1. sanity.js ->  projectId:"" add your project ID here 
        2. cd sanity 
            sanity.json -> projectId:"" add your project ID here as well 

    ~cd zomaggy
    ~npm install --save
    ~cd sanity
    ~npm install --save
    ~expo start 

# Start Sanity CRM Loacally \
    
    ~cd sanity
    ~sanity start
        sanity localcrm will be hosted on port 3333
    
    `if changes are done on sanity CRM locally then needs to be pushed to sanity live to be refleced on the
    live application `

    #to push changes to sanity live 

    ~sanity build


# Create a eas build for the project

     ~eas build --profile development --platform abdroid