"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd5ea2072efc5b",
        pass: "688b3aa3486d76"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Thiago Rocha <thiagord2016@gmail.com>',
            subject,
            html: body,
        });
    }
    ;
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
