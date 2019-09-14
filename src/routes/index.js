const express=require('express');
const router=express.Router();

const Task=require('../model/task')

router.get('/',async (req,res,next)=>{
	const tasks = await Task.find();
	res.render('index',{
		tasks
	});
});
router.post('/add', async (req,res,next)=>{
	const task = new Task(req.body);
	await task.save();
	console.log(task);
	res.redirect('/');
});

router.get('/delete/:id', async (req,res,next)=>{
	let {id} = req.params;
	await Task.remove({_id: id});
	res.redirect('/');
});
router.get('/editar/:id', async (req,res,next)=>{
	const task = await Task.findById(req.params.id);
	res.render('edit',{
		task
	});
});
router.post('/edit/:id', async (req,res,next)=>{
	let {id} = req.params;
	await Task.update({_id: id},req.body);
	res.redirect('/');
});

module.exports=router;
