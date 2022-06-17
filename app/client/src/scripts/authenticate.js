
export default {
  hasError: false,
  loading: false,
  authenticateUser(username, password) {
    let headers = { 'Content-type': 'application/json' };
    this.loading = true;

    try {
      const response = {
        data: {
          isAuthenticated: password == "1234"
        }
      };
      this.loading = false;
      return response.data.isAuthenticated;
    }
    catch (error) {
      console.log("API Error: " + error);
      console.log("API Error: " + error.response.data);
      this.hasError = true;
      this.loading = false;
      return error.response.data;
    }

    
  }
}
