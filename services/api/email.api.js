import axios from 'axios';
const resource = process.env.NEXT_PUBLIC_API + "/api";


export default class EmailService {

    sendEmail(data) {
        return axios
            .post(resource + "/sendmail",
                data,
            )
            .then(response => {
                return response;
            })
            .catch(error => {
                if (error) {
                    throw error;
                }
            });
    };

}