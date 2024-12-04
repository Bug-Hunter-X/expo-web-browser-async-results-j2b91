import * as WebBrowser from 'expo-web-browser';

// ... other code ...

const handlePress = async () => {
  try {
    let result = await Promise.race([
      WebBrowser.openBrowserAsync('https://example.com'),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
    ]);
    console.log('Result', result);
  } catch (error) {
    console.error('Error opening browser:', error);
    // Handle the error appropriately (e.g., display a message to the user)
  }
};