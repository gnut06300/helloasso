export default function auhtHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accessToken) {
         // si backOffice avec nodejs & express décommenté ci-dessous
        // return { 'x-access-token': user.accessToken };
        return {Authorization: `Bearer ${user.accessToken}`,};
    } else {
        return {};
    }
}