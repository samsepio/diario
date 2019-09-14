const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TaskSchema = Schema({
	day: String,
	description: String,
	status: {
		type: Boolean,
		default: false
	}
});

module.exports=mongoose.model('task',TaskSchema);
