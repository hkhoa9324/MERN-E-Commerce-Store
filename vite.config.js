export default {
    // ...existing code...
    server: {
        // ...existing code...
        headers: {
            // Reduce the size of headers to avoid 431 status code
            'Content-Security-Policy': "default-src 'self'; script-src 'self'; object-src 'none';",
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
            // Removed 'X-XSS-Protection' header to reduce size
        }
    },
    // ...existing code...
}
