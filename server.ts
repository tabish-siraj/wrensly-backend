import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
});
// This file is responsible for starting the server.
// It imports the necessary modules, sets up the server, and listens on the specified port.