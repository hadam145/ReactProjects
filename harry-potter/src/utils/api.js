export async function apiGet(endpoint) {
    const response = await fetch(`https://hp-api.onrender.com/api/${endpoint}`);
    const data = await response.json();
    return data;
}
