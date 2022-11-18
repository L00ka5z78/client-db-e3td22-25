const {ValidationError} = require("../utils/error");

class ClientRecords {
    constructor(obj) {
        const {id, name, mail, nextContactAt, notes} = obj;

        if (!id || typeof id !== "string") {
            throw new ValidationError("Invalid or none ID")
        }

        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new ValidationError('Name has to be text at least 3 characters long')
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new ValidationError('Invalid E-mail')
        }

        if (typeof nextContactAt !== 'string') {
            throw new ValidationError('Next contact date has to be text')
        }

        if (typeof notes !== 'string') {
            throw new ValidationError('Notes has to be text')
        }

        this.id = id;
        this.name = name;
        this.mail = mail;
        this.nextContactAt = nextContactAt;
        this.notes = notes;

    }
}

module.exports = {
    ClientRecords,
}