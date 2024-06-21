function useLocalStorage(){

    const getUsers = () => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
      };

    const findByEmail = (email) =>{
        const users = getUsers();
        return users.find(user => user.email.toLowerCase() === email.toLowerCase());
    }
    const saveUser = (users,user) =>{
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    return {getUsers, findByEmail, saveUser}
}
export default useLocalStorage;