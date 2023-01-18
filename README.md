# Jobdavea

## Server side application to manage a job board. 

### The application has the following features:
- A user can create a new job posting by providing a title, description, and their email address. The user can also specify the required skills and experience level for the job.
- A user can view a list of all current job postings, filtered by required skills and experience level.
- A user can view the details of a specific job posting, including the title, description, required skills, experience level, and email address of the person who created the posting.
- A user can apply for a job posting by providing their name, email, resume, and a cover letter. The cover letter should be in Markdown format.
- A user who created a job posting can view a list of all the applications for that job, including the name, email, and cover letter of the applicant.
    
### The application is built using Node.js and Express, and persist data using a MongoDB database. 
#### It exposes the following RESTful API endpoints for clients to access the job postings and applications:

##### A GET route to fetch all the jobs in the collection

**GET** /job/all <br>
    
