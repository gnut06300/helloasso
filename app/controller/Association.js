// const httpService = require('../api/httpService');
// const {getToken, isAuth } = require('../Middlewares/Auth');

// exports.getAssociationInfo = async (req, res) => {
//     const token = await getToken();
//     console.log('acces_token',token);
//     console.log(req.params.name);
//     const response = await httpService.get(`/organizations/${req.params.name}`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     res.json(response.data);
//     console.log(response.data);
// }

// exports.getAssociationEvents = async (req, res) => {
//     const token = await getToken();
//     console.log('acces_token',token);
//     console.log(req.params.name);
//     const response = await httpService.get(`/organizations/${req.params.name}/events`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     res.json(response.data);
//     console.log(response.data);
// }

// exports.getAssociationMembers = async (req, res) => {
//     const token = await getToken();
//     console.log('acces_token',token);
//     console.log(req.params.name);
//     const response = await httpService.get(`/organizations/${req.params.name}/members`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     res.json(response.data);
//     console.log(response.data);
// }

// exports.getAssociationPayments = async (req, res) => {
//     const token = await getToken();
//     console.log('acces_token',token);
//     console.log(req.params.name);
//     const response = await httpService.get(`/organizations/${req.params.name}/payments`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     res.json(response.data);
//     console.log(response.data);
// }


