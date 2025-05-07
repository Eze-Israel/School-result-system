export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export const mockLogin = async ({ email, password }: LoginPayload): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          resolve({ token: "mock-token-123" });
        } else {
          reject(new Error("Incorrect email or password"));
        }
      }, 1000);
    });
  };
  