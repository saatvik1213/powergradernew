#### SODA Hackathon Proof of Concept
#### Project: PowerGrader
#### Team: SSGA
#### Date: October 26th, 2024
#### Team Members: Gonzalo Allendes, Saatvik Choudhary, Swayam Mehda, Anadi Dewan
#### Chosen Track: SODA: Develop software that can scale and improve accessibility to education.

### Project Description:

    PowerGrader is a web application for automated grading in written assignments submitted to online educational
    platforms. With the rise of online learning and the widespread use of online course management systems, there
    is an increasing need for providing the functionality to assess students' learning automatically. Nowadays,
    available tools provide support for multiple choice exams or embedded coding, but they do not support automated
    grading for written submissions. While university courses may require human graders for written submissions to ensure
    the right criteria is applied, free online courses may benefit from an automated grader like PowerGrader to
    offer the course administrator the option to request written assignments from students. 

    The implementation of automated grading for written submissions represents a significant advancement in online
    education, paving the way for its potential application in university courses. This shift could lead to improved
    cost efficiency in grading tasks, allowing educators to allocate more time to instructional activities and student 
    engagement.

### Key Requirements:

| **Requirement**              | **Description**                                                                                              |
|------------------------------|--------------------------------------------------------------------------------------------------------------|
| **User Authentication**      | Course administrators, students, and graders must be able to log in to the platform.                         |
| **Assignment Submission**    | Students should be able to submit written assignments in various formats (e.g., PDF, DOCX).                  |
| **Automated Grading Engine** | The application must implement an AI-powered algorithm to grade assignments.                                 |
| **Normal Distribution**      | The algorithm should apply a grading curve after processing all submissions.                                                      |
| **Feedback Mechanism**       | Users should receive automated feedback based on grading criteria, including suggestions for improvement.    |
| **Customizable Rubrics**     | Instructors should be able to define specific grading rubrics and criteria for different assignments.        |
| **Analytics Dashboard**      | Provide an interface for instructors to view analytics on student performance and assignment submissions.    |

### High-Level Design:

#### Use Cases

The following diagram illustrates the main uses cases expected in the functionality of the web application.

![use_case_diagram](/images/1_use_case_diagram.png)

#### Sequence Diagrams

The sequence diagrams below show the details of the workflow in use cases ```Log in``` and ```Submit Assignment```

    Log In

![sequence_diagrams](/images/3_sequence_2.png)

    Submit Assignment

![sequence_diagrams](/images/2_sequence_1.png)

#### Conceptual ER Diagram

The conceptual ER diagram provides a visual representation of the internal structure and
relationships within our database system.

![4_er_diagram_1](/images/4_er_diagram_1.png)

#### Physical ER Diagram

The physical ER diagram details the actual implementation of our database system, showing specific tables, columns,
data types, and relationships.

![5_er_diagram_2](/images/5_er_diagram_2.png)

### Implementation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
