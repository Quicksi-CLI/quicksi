exports.isAuthenticated = (context) => {
    if (context.user) {
        return true;
    }
    throw new Error('User is not logged in (or authenticated).');
};