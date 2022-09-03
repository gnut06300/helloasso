const express = require('express');
const router = express.Router();
const AssociationController = require('../controllers/AssociationController');

router.get('/', AssociationController.getAssociationsInfo);
router.get('/dashboard/:name/events', AssociationController.getAssociationEvents);
router.get('/dashboard/:name/members', AssociationController.getAssociationMembers);
router.get('/dashboard/:name/payments', AssociationController.getAssociationPayments);
