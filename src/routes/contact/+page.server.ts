/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const mail = await request.formData();
        const email = mail.get('email');
        const subject = mail.get('subject');
        const name = mail.get('fullname');
        const phoneNo = mail.get('contactno');
        const message = mail.get('message');

        const link = "mailto:enquiries@edess.asia" + "?subject=I'd like to know more about '" + subject + "'&body=From: " + name + " at " + email + "%0D%0AContact me at " + phoneNo + "%0D%0A%0D%0A" + message;
        console.log(link)
        throw redirect(307, link);
    }
};