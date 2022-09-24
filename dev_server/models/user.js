const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredOrNull = (field, type) => {
    return typeof field === 'undefined' || (field != null && typeof field != type);
}

const fields = {
    name: {
        type: String,
        required: () => requiredOrNull(this.name, 'string'),
    },
    passwd: {
        type: String,
        required: () => requiredOrNull(this.passwd, 'string'),
    }

}

const userSchema = new Schema(fields);

module.exports = mongoose.model('User', userSchema)

/* TODO 
• regex matching for name??

*/
