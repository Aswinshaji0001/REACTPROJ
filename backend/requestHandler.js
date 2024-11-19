import employSchema from './models/employee.model.js'


export async function addEmp(req,res){
    try{
        console.log("add");
        const {...employ}=req.body;
        const data=await employSchema.create({...employ});
        return res.status(201).send({msg:data})        
    }catch(error){
        res.status(404).send({msg:error})
    }
}

export async function getEmployees(req,res) {
    try {
        const employees=await employSchema.find();
        res.status(200).send(employees)
    } catch (error) {
        res.status(404).send({msg:error})
    }
}
export async function getEmploy(req,res) {
    try {
        console.log(req.params);
        const {id}=req.params
        const data=await employSchema.findOne({_id:id});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}
export async function editEmploy(req,res) {
    try {
        const {_id}=req.params;
    const {...employ}=req.body;
    const data=await employSchema.updateOne({_id},{$set:{...employ}});
    res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
    
}
export async function deleteEmploy(req,res) {
    try {
        const {_id}=req.params;
        console.log(_id);
        const data=await employSchema.deleteOne({_id});
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }   
}