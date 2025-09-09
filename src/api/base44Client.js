import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68b202a5aaa3ba0b9af4ec94", 
  requiresAuth: true // Ensure authentication is required for all operations
});
