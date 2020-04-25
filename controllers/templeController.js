const Temple = require("../models/templeModel");

        exports.index = async (req, res, next) => {
            const temples = await Temple.find();
                res.status(200).json({
                    temples
                });
        };
    
        exports.showId = async (req, res, next) => {
        try {
            const temples = await Temple.findById(req.params.id); 
            
            if (!temples) {
            throw new Error('No such information'); 
            }   
                res.status(200).json({
                    temples
                });
            
        } catch (error) {
            res.status(400).json({
            data: "error :" + error.message
            });
        }
        };

        exports.addData = async (req, res, next) => {
            const { name, province, latitude, longitude } = req.body;
            let saveEdit = new Temple(req.body);
            await saveEdit.save();
            res.status(201).json({
                data: "complete",
            });
        };

        exports.editDataId = async (req, res) => {
            try {
                const { id } = req.params; 
                const { name, province, latitude, longitude } = req.body;

                const editData = await Temple.findByIdAndUpdate( id ,{
                    name: name ,
                    province: province,
                    latitude: latitude,
                    longitude: longitude
                } );
                if (editData.nModified === 0) {
                    throw new Error('Unable to update information');
                } else {
                    res.status(200).json({
                        message: 'complete'
                    });
                }

                res.status(200).json({
                    message: "complete"
                    });
                } catch (error) {
                    res.status(400).json({
                    data: "error :" + error.message
                    });
                }
            }; 


            exports.deleteData = async (req, res) => {
                try {
                    const delTemple = await Temple.deleteOne({_id: req.params.id}); 
                    if (delTemple.deletedCount === 0 ) {
                    throw new Error('Unable to update information'); 
                    }   
                        res.status(200).json({
                            message : 'Data was deleted'
                        });
                    
                    } catch (error) {
                        res.status(400).json({
                        data: "error :" + error.message
                        });
                    }
                };
