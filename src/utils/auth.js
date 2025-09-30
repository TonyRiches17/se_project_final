const signUp = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password || !username) {
        return reject(new Error("All fields are required"));
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return reject(new Error("Please enter a valid email address"));
      }

      const users = JSON.parse(localStorage.getItem("users") || "{}");

      if (users[email]) {
        return reject(new Error("User already exists"));
      }

      users[email] = { username, password };
      localStorage.setItem("users", JSON.stringify(users));

      resolve({ message: "Registration successful", user: { email, username } });
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