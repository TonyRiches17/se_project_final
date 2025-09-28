const signUp = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password && username) {
        // Store the username-email mapping in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        users[email] = { username, password }; // Store username with email as key
        localStorage.setItem('users', JSON.stringify(users));

        resolve({ message: "Registration successful" });
      } else {
        reject(new Error("All fields are required"));
      }
    }, 1000);
  });
};

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const user = users[email];

      if (user && user.password === password) {
        const userData = {
          token: "superhardpassword",
          user: {
            email,
            username: user.username
          }
        };


        localStorage.setItem('currentUser', JSON.stringify(userData.user));

        resolve(userData);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};


const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "superhardpassword") {
        // Get the current user data from localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser) {
          resolve({
            email: currentUser.email,
            username: currentUser.username // Use stored username, not hardcoded name
          });
        } else {
          reject(new Error("No user data found"));
        }
      } else {
        reject(new Error("Invalid token"));
      }
    }, 500);
  });
};

export { signUp, signIn, checkToken };