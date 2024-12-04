This repository demonstrates a common issue with Expo's WebBrowser.openBrowserAsync function.  The promise returned by this function sometimes resolves without providing a useful result, making reliable error handling difficult.  The bug.js file contains code demonstrating this problem.  The bugSolution.js file offers a solution using timeouts and more robust error handling.