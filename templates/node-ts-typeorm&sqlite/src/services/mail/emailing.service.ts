import { Service } from "@tsed/di";

import * as nodemailer from "nodemailer";
import * as sendgridTransport from "nodemailer-sendgrid-transport";
import config from "../../config";

interface Message {
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string
}

@Service()
export class EmailingService {

  public sendEmail(message: Message): Promise<any> {
    const transporter = nodemailer.createTransport(sendgridTransport({
      auth: {
        api_key: config.sengridApiKey
      }
    }));

    return transporter.sendMail(message);
  }
}