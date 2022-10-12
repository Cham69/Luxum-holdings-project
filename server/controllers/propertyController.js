

//Show all the properties
const showProperties = async (req, res) =>{
    res.send('Display all the properties');
}

//Add new property
const addProperty = async (req, res) =>{
    res.send('Add a new property');
}

//Update property
const updateProperty = async (req, res) =>{
    const property = req.params.id;
    res.send(`${property} has been updated`);
}

//Update property
const deleteProperty = async (req, res) =>{
    const property = req.params.id;
    res.send(`${property} has been deleted`);
}

module.exports = {
    showProperties, addProperty, updateProperty, deleteProperty
}