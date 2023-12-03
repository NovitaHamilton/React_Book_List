# React Book List Application

#### **Assignment Objective:**

In this assignment, you will create a Book List application using React. You will develop a web application where users can add books to their book list and remove books from their book list. The application will focus on React components, state management, and basic event handling. This project is designed to enhance your understanding of fundamental React concepts by building a simple yet functional web application. You will iteratively add features to manage and display a list of books.

**For each step below, commit your code to your Git repository before moving to the next step.** This will help you practice good coding habits (commit often!) and also allow your instructors to see your commit history as you move through the steps.

#### **Step 1: Initial Setup**

- Use `create-react-app` to set up your project environment. Clear out all of the unnecessary content.
- In `App`, create a basic function component. Start with a simple heading and a paragraph describing your page.
- Run the React server to make sure your setup was done correctly.

#### **Step 2: Creating a Child Component**

- To `App`, add a child component that will display the list of books.
- Create a `BookList` component that displays a list of 3 pre-defined books (Hint: this is the child).

#### **Step 3: Introducing Props**

- Modify the `BookList` component so that it does not display pre-defined books, but instead displays books that it receives as props.
- In `App`, make sure to pass the list of books to `BookList`.

#### **Step 4: Managing State**

- Now, you need to make the list of books be dynamic instead of a static list of pre-defined books. Introduce a state in your `App` component to keep track of the list of books.
- You need a way for users to add new books! Add a new child component in `App` that will allow user input, called `AddBookForm.`
- Implement the `AddBookForm` component using a React form.

#### **Step 5: Event Handling and Dynamic Rendering**

- When the user submits a new book title, the list of books in `App` needs to be updated! Add event handling to manage user inputs.
- Use the state in the `App` component to dynamically render the list of books in `BookList`.

#### **Step 6: Extending Functionality**

- Finally, we also want users to take books off of their book list. Extend your `App` functionality so that:
  - A clickable X shows up beside the name of each book
  - When clicked, the list of books is updated so that the selected book is removed from the list

#### **Step 7: Adding Data Persistence**

- Create a mock REST API for your webpage using mockapi.io
- Include GET, POST and DELETE requests when books are added, viewed and deleted

#### **Submit:**

- A link to your GitHub repository containing the project code. Ensure that your repository is public so it can be accessed and evaluated.
- A screenshot of your application with a list of your favorite books!

#### **Additional challenges for practice:**

- Add a feature to edit the title of a book in the list.
- Introduce simple styling to improve the UI/UX of your application.
- Make it possible for the user to upload an image of the book cover along with the title, and display the books as their covers with titles listed underneath. (Hint: a new component, `Book`, might help!)
- Make it possible for the user to include a URL to where to purchase the book, and hyperlink the title of the book to the purchase page.
- Any additional features you can think of! The more features you add, the more comfortable you'll get with React!
