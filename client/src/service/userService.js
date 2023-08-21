const baseUrl = 'http://localhost:3001';

async function fetchUserData(userId) {
  try {
    const response = await fetch(`${baseUrl}/user/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
    return null;
  }
}

async function fetchUserActivity(userId) {
  try {
    const response = await fetch(`${baseUrl}/user/${userId}/activity`);
    const userActivity = await response.json();
    return userActivity;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'activité de l\'utilisateur:', error);
    return null;
  }
}

async function fetchUserAverageSessions(userId) {
  try {
    const response = await fetch(`${baseUrl}/user/${userId}/average-sessions`);
    const averageSessions = await response.json();
    return averageSessions;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur:', error);
    return null;
  }
}

async function fetchUserPerformance(userId) {
  try {
    const response = await fetch(`${baseUrl}/user/${userId}/performance`);
    const userPerformance = await response.json();
    return userPerformance;
  } catch (error) {
    console.error('Erreur lors de la récupération de la performance de l\'utilisateur:', error);
    return null;
  }
}

export {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
};