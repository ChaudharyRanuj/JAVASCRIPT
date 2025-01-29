// Complete Guide to fetch() Options in JavaScript
// The fetch() API provides a flexible way to make HTTP requests. It supports various
//  options for configuring requests, such as method type, headers, body, credentials, and caching.

// 🔹 Basic Syntax javascript

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// url: The API endpoint (e.g., "https://api.example.com/data").
// options: A configuration object (optional).fetch() Options Explained

// 1️⃣ method (HTTP Method)
// Defines the HTTP request method:

method: "GET" // or "POST", "PUT", "DELETE", etc.
Example:

fetch("https://api.example.com/data", { method: "GET" });
// ✅ Default is "GET".

// 2️⃣ headers (Request Headers)
// Allows sending additional information with the request.

headers: {
  "Content-Type": "application/json", // Specifies JSON data
  "Authorization": "Bearer YOUR_TOKEN_HERE" // Authentication token
}
Example:


fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
});
// ✅ Used for authentication, content type, and other metadata.

// 3️⃣ body (Request Payload)
// Defines the request body for methods like POST, PUT, and PATCH.
// It must be a string (usually JSON).


body: JSON.stringify({ name: "John", age: 30 })
Example:


fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "John", age: 30 })
});
// ✅ Not used in GET requests.

// 4️⃣ credentials (Handling Cookies & Authentication)
// Controls whether cookies and authentication headers should be sent.


credentials: "same-origin" // Default, sends credentials for same-origin requests
credentials: "include" // Always send credentials (for cross-origin requests)
credentials: "omit" // Never send credentials (useful for public APIs)
Example:


fetch("https://api.example.com/user", {
  method: "GET",
  credentials: "include"
});
// ✅ Needed when working with authentication-based APIs.

// 5️⃣ mode (CORS Handling)
// Controls how fetch() handles cross-origin requests.


mode: "cors" // Default, allows cross-origin requests
mode: "same-origin" // Restricts to same-origin requests
mode: "no-cors" // Prevents fetching from other domains (limited usage)
Example:


fetch("https://api.example.com/data", {
  method: "GET",
  mode: "cors"
});
// ✅ Used to configure CORS requests.

// 6️⃣ cache (Caching Behavior)
// Controls how caching is handled.


cache: "default" // Default browser cache behavior
cache: "no-store" // No caching (always fetch fresh data)
cache: "reload" // Bypass cache and reload from network
cache: "force-cache" // Use cache, even if expired
cache: "only-if-cached" // Only use cache (no network request)
Example:


fetch("https://api.example.com/data", {
  method: "GET",
  cache: "no-store"
});
// ✅ Useful when fetching frequently updated data.

// 7️⃣ redirect (Handling Redirects)
// Defines how redirects should be handled.


redirect: "follow" // Automatically follow redirects (default)
redirect: "error" // Reject redirect responses with an error
redirect: "manual" // Handle redirects manually in code
Example:


fetch("https://api.example.com/redirect", {
  method: "GET",
  redirect: "follow"
});
// ✅ Useful when handling login redirects.

// 8️⃣ referrer & referrerPolicy
// Controls how the request’s referrer information is sent.


referrer: "no-referrer"
referrerPolicy: "strict-origin-when-cross-origin"
Example:


fetch("https://api.example.com/data", {
  method: "GET",
  referrer: "no-referrer",
  referrerPolicy: "strict-origin-when-cross-origin"
});
// ✅ Helps in privacy and security configurations.

// 9️⃣ signal (Abort a Request)
// Allows cancelling a fetch request using AbortController.


const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));

setTimeout(() => controller.abort(), 5000); // Cancel after 5 seconds
✅ Useful for cancelling requests when users navigate away.



// ********  🔹 Full Example Using All fetch() Options 🔹 ******** // 

const fetchData = async () => {
  const controller = new AbortController(); // Abort feature
  const signal = controller.signal;

  try {
    const response = await fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN"
      },
      body: JSON.stringify({ key: "value" }),
      credentials: "include",
      mode: "cors",
      cache: "no-store",
      redirect: "follow",
      signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// Call the function
fetchData();