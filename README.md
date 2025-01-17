# Responsive Table Application

This project is a React-based application that includes a responsive, dynamic table and a sidebar layout. The app is designed to work seamlessly across various screen sizes, offering both a mobile-friendly card view and a desktop table view. It also supports dynamic data manipulation, such as adding rows and editing cell content.

## Features

### 1. **Responsive Design**
- **Mobile View**: Displays table data as cards for better readability on smaller screens.
- **Desktop View**: Provides a traditional table layout for larger screens.

### 2. **Dynamic Table**
- Editable cells allow users to modify table content.
- Ability to add new rows dynamically.

### 3. **Interactive Sidebar**
- A collapsible sidebar that includes navigation icons for Home, User, and Settings.
- Mobile-friendly sidebar toggle button.

### 4. **Customizable Header**
- Includes action icons for sorting, filtering, and data enrichment.
- Search bar to filter table content.

## Getting Started

### Prerequisites
- Node.js (v14 or later) installed on your system.
- Package manager (npm or yarn).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Components

### 1. **App Component**
- Renders the main layout, including the sidebar, header, and table.
- Manages the state for sidebar visibility and the "Auto Save" toggle.

### 2. **Table Component**
- Displays the data in a responsive table format.
- Supports:
  - Adding new rows.
  - Editing existing data.
  - Rendering table headers with icons.
  - Switching between mobile and desktop views.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Icons**: For rendering interactive icons.

## File Structure

```plaintext
src/
├── components/
│   └── Table.jsx     # Table component
├── App.jsx           # Main application component
├── index.js          # Entry point
├── styles/           # Tailwind CSS configuration
```

## Usage

- **Sidebar**:
  - Click the hamburger menu icon to toggle the sidebar on mobile devices.
- **Table Actions**:
  - Use the "Add Row" button to append new rows to the table.
  - Edit cells directly by clicking and typing in the input fields.
- **Responsive Views**:
  - Resize the browser to observe the switch between card and table views.

## Future Enhancements

- Add row deletion functionality.
- Implement server-side data persistence.
- Include additional filters and sorting mechanisms.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/) for the extensive icon library.
- [Tailwind CSS](https://tailwindcss.com/) for the rapid UI development.

---
Feel free to contribute to the project by submitting issues or pull requests!

