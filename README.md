# Jobdavea

## Server side application to manage a job board. It is built using Node.js and Express, and persist data using a MongoDB database. 

### The application has the following features:
- A user can create a new job posting by providing a title, description, and their email address. The user can also specify the required skills and experience level for the job.
- A user can view a list of all current job postings, filtered by required skills and experience level.
- A user can view the details of a specific job posting, including the title, description, required skills, experience level, and email address of the person who created the posting.
- A user can apply for a job posting by providing their name, email, resume, and a cover letter. The cover letter should be in Markdown format.
- A user who created a job posting can view a list of all the applications for that job, including the name, email, and cover letter of the applicant.

### It exposes the following RESTful API endpoints for clients to access the job postings and applications:

<details><summary>A POST route to create a new job posting</summary>
    
``` 
POST /job/create
```

> Body

| Field | Description |
| --- | --- |
| **title** | title for the new job |
| description | description for the new job |
| **created_by** | email id of the job poster |
    
</details>

<details><summary> A GET route to view a list of all current job postings. Can be filtered by required skills and experience level</summary>
    
```
GET /job/all
```
    
> Query Params

| Field | Description |
| --- | --- |
| filter_by_skills | comma separated values of skill id |
| filter_by_experience | comma separated values of experience in years |
    
</details>

<details><summary> A GET route to view the details of a specific job posting</summary>
    
```
GET /job/:id
```
    
> Path Params

| Field | Description |
| --- | --- |
| **id** | job id of a particular job |

</details>

<details><summary> A POST route to apply for a job posting by providing their details</summary>
    
```
GET /job/:id/apply
```
    
> Path Params

| Field | Description |
| --- | --- |
| **id** | job id of a particular job |

> Body

| Field | Description |
| --- | --- |
| **name** | name of the job applicant|
| **email** | email of the job applicant |
| **resume** | url to the resume of the applicant |
| cover_letter | cover letter of the applicant in markdown format |
    
</details>

<details><summary> A GET route to view a list of all the applications for that job.</summary>
    
```
GET /job/:id/submissions
```
    
> Path Params

| Field | Description |
| --- | --- |
| **id** | job id of a particular job |

</details>
