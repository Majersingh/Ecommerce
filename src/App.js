const updateafterlogin = async (email) => {
  const tempUser = await getUser(email, apiUrl);
  if (tempUser) {
    handleLogin({ ...tempUser, isAuthenticated: true });
    addTocart(tempUser.cart);
  }
};