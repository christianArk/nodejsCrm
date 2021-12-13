import { 
    addNewContact, 
    getContacts, 
    getContact, 
    updateContact, 
    deleteContact
 } from "../controllers/crmController"

const crmRoutes = (app) => {
    app.route('/contacts')
        .get(getContacts)
        .post(addNewContact)

    app.route('/contact/:contactid')
        .get(getContact)
        .put(updateContact)
        .delete(deleteContact)
}

export default crmRoutes