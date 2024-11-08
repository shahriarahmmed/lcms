const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Function to start server
const startServer = async () => {
    try {
        // Test database connection
        await db.sequelize.authenticate();
        console.log('Database connection established successfully.');

        // Sync database
        await db.sequelize.sync();
        console.log('Database synced successfully.');

        // Start server
        const server = app.listen(3001, () => {
            console.log('Server running on port 3001');
        });

        // Handle server errors
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error('Port 3001 is already in use. Please try a different port or close the application using this port.');
                process.exit(1);
            }
            console.error('Server error:', error);
        });

    } catch (error) {
        console.error('Unable to start server:', error);
        process.exit(1);
    }
};

startServer();