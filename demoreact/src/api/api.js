


export async function getRepotorios() {
    const URL = 'https://api.github.com/users/cassioseffrin/repos';
    const res = await fetch(URL);
    if (res.status == 200) {
        const data = await res.json();
        return data;
    } else {
        return null;
    }
}