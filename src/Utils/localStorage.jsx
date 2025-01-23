

const employees = [
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": false,
        "taskTitle": "Design Dashboard",
        "taskDescription": "Create a new dashboard layout for the application.",
        "taskDate": "2023-10-15",
        "category": "Design"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the login issue reported by users.",
        "taskDate": "2023-10-10",
        "category": "Development"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": true,
        "active": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve database query performance.",
        "taskDate": "2023-10-05",
        "category": "Database"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Jane",
    "lastname": "Smith",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Write API Documentation",
        "taskDescription": "Document the new API endpoints.",
        "taskDate": "2023-10-20",
        "category": "Documentation"
      },
      {
        "newTask": false,
        "completed": true,
        "failed": false,
        "active": false,
        "taskTitle": "Test Payment Gateway",
        "taskDescription": "Ensure the payment gateway integration works correctly.",
        "taskDate": "2023-10-12",
        "category": "Testing"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": true,
        "active": false,
        "taskTitle": "Update User Manual",
        "taskDescription": "Revise the user manual for the latest features.",
        "taskDate": "2023-10-08",
        "category": "Documentation"
      },
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Create Marketing Campaign",
        "taskDescription": "Plan and execute a new marketing campaign.",
        "taskDate": "2023-10-30",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Bob",
    "lastname": "Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add a dark mode feature to the application.",
        "taskDate": "2023-10-25",
        "category": "Design"
      },
      {
        "newTask": false,
        "completed": true,
        "failed": false,
        "active": false,
        "taskTitle": "Refactor Codebase",
        "taskDescription": "Clean up and optimize the existing code.",
        "taskDate": "2023-10-18",
        "category": "Development"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": true,
        "active": false,
        "taskTitle": "Deploy to Production",
        "taskDescription": "Push the latest changes to the production server.",
        "taskDate": "2023-10-14",
        "category": "DevOps"
      },
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Conduct User Interviews",
        "taskDescription": "Interview users to gather insights for product improvement.",
        "taskDate": "2023-10-28",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Alice",
    "lastname": "Williams",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the upcoming team meeting.",
        "taskDate": "2023-10-21",
        "category": "Presentation"
      },
      {
        "newTask": false,
        "completed": true,
        "failed": false,
        "active": false,
        "taskTitle": "Analyze User Feedback",
        "taskDescription": "Review and analyze feedback from users.",
        "taskDate": "2023-10-22",
        "category": "Analysis"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": true,
        "active": false,
        "taskTitle": "Update Website Content",
        "taskDescription": "Refresh the content on the company website.",
        "taskDate": "2023-10-15",
        "category": "Content"
      },
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Conduct Market Research",
        "taskDescription": "Research market trends and user preferences.",
        "taskDate": "2023-10-29",
        "category": "Research"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Mike",
    "lastname": "Brown",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Develop New Feature",
        "taskDescription": "Work on the new feature for the application.",
        "taskDate": "2023-10-30",
        "category": "Development"
      },
      {
        "newTask": false,
        "completed": true,
        "failed": false,
        "active": false,
        "taskTitle": "Test New Features",
        "taskDescription": "Conduct testing on the newly developed features.",
        "taskDate": "2023-10-25",
        "category": "Testing"
      },
      {
        "newTask": false,
        "completed": false,
        "failed": true,
        "active": false,
        "taskTitle": "Fix Bugs",
        "taskDescription": "Resolve bugs reported in the last release.",
        "taskDate": "2023-10-20",
        "category": "Development"
      },
      {
        "newTask": true,
        "completed": false,
        "failed": false,
        "active": true,
        "taskTitle": "Prepare Release Notes",
        "taskDescription": "Document the changes and updates for the next release.",
        "taskDate": "2023-10-31",
        "category": "Documentation"
      }
    ]
  }
];

  
  const admin = [
    {
      "id": 1,
      "firstname": "Admin",
      "lastname": "User ",
      "email": "admin1@example.com",
      "password": "123"
    }
  ]

export const setLocalStroage=()=>{
    localStorage.setItem('Employee',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    const Employees = JSON.parse(localStorage.getItem("Employee"));
    const Admin = JSON.parse(localStorage.getItem("admin"));

    return {Employees ,Admin }; 
}

