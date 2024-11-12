# Notely

Notely is an open-source note-taking application designed to provide users with a seamless and efficient platform for managing their notes. Built with modern web technologies, Notely ensures a responsive and user-friendly experience across various devices.

## Features

- **User Authentication**: Secure user registration and login functionalities to protect your notes.
- **Rich Text Editing**: Create and format notes with a user-friendly rich text editor.
- **Tagging System**: Organize notes using tags for easy categorization and retrieval.
- **Search Functionality**: Quickly search through notes to find specific information.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## Technologies Used


- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) **Next.js 14**: A React framework for server-rendered applications.
- ![Kinde](https://img.shields.io/badge/Kinde-000000?style=for-the-badge&logoColor=white) **Kinde**: Authentication and user management platform.
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) **Prisma**: Next-generation ORM for database interactions.
- ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) **Supabase**: Open-source Firebase alternative for real-time databases.
- ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logoColor=white) **Shadcn UI**: Component library for building user interfaces.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**: Ensure Node.js is installed on your machine.
- ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) **Supabase Account**: Set up a Supabase account for database services.
- ![Kinde](https://img.shields.io/badge/Kinde-000000?style=for-the-badge&logoColor=white) **Kinde Account**: Set up a Kinde account for authentication services.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/victorpreston/Notely.git

2. Navigate to the Project Directory:

    ```
    cd Notely


3. Install Dependencies:

    ```bash
    npm install


5. Set Up Environment Variables:

Create a `.env` file in the root directory with the following content:

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    KINDER_CLIENT_ID=your_kinde_client_id
    KINDER_CLIENT_SECRET=your_kinde_client_secret

Run the Development Server:

    ```bash
    npm run dev
The application will be available at http://localhost:3000.

Folder Structure
The project's folder structure is organized as follows:

    ```bash
    Notely/
    ├── app/
    │   ├── components/
    │   ├── pages/
    │   └── styles/
    ├── lib/
    ├── prisma/
    ├── public/
    ├── .eslintrc.json
    ├── .gitignore
    ├── README.md
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.ts
    └── tsconfig.json
    app/: Contains the main application components, pages, and styles.
    lib/: Utility functions and libraries.
    prisma/: Prisma schema and migrations.
    public/: Static assets like images and fonts.
    
### Configuration Files: ESLint, Tailwind CSS, TypeScript, and Next.js configurations.


