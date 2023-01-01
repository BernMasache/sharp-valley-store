import EmailService from "../api/email.api";

const emailService = new EmailService()
export default class useEmailStore {
 
    sendEmail = async (data) => {
        return await emailService.sendEmail(data).then((result => {

            if (result) {
                return result.data
            }
        })).catch(error => {
            return error
        });
    };


}