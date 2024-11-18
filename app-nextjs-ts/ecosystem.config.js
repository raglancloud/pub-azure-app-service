// v1.1.0
module.exports = {
    apps: [
        {
            name: 'app-nextjs-ts',
            script: './.next/standalone/server.js', // Path to the Next.js binary
            args: 'start', // Start the app in production mode
            env: {
                NODE_ENV: 'production', // Ensure it's running in production mode
                PORT: 8080, // Set the custom port here
            },
        }
    ]
};