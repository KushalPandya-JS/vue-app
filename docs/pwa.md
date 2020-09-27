## Progressive Web App (PWA)

Enable support of mobile/native application capabilities such as:
  - offline support
  - app download, install, versioning
  - background sync
  - notification
 
A Service Worker is like a background process that sits between a web application and the network, intercepting all HTTP requests made by the application.
The same Service Worker instance is shared across multiple tabs of the same application. 
 
The browser that at any time will decide if the Service Worker should be running, this is so to spare resources, especially on mobile.
So if we are not doing any HTTP requests for a while or not getting any notifications, it's possible that the browser will shut down the Service Worker.
If we do trigger an HTTP request that should be handled by the Service Worker, the browser will activate it again, in case it was not yet running. 
