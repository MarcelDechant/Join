/**
 * Displays logged-in users in the console.
 * @returns {void}
 */
async function displayLoggedInUsers() {
    try {
      let users = await getItem(USERS_TABLE);
      users.forEach(user => {
      });
    } catch (error) {
      console.error("Error when retrieving the user:", error);
    }
  }
  
  // getItem(USERS_TABLE).then(users => console.log(users)); Diese Funktion zeigt alle angemeldeten User in der Console an
  
  // Mit dieser Funktion manuell User löschen, dazu die E-Mail adresse hier eintippen const toDelete = '[E-MAIL]'; und speichern.
  const toDelete = '';
  getItem(USERS_TABLE).then(users => {
    const newUsers = users.filter(u => u.email !== toDelete);
    return setItem(USERS_TABLE, newUsers);
  });
  
  async function logUsersWithAccount() {
    let existingUsers = await getItem(USERS_TABLE);
    console.log('Users with an account:');
    existingUsers.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  }
  
  logUsersWithAccount();