const Resume = require("../models/ResumeModelDB");
// class Resume
// {
//     constructor(fn,dept,id)
//     {
//         this.fn=fn;
//         this.dept=dept;
//         this.id=id;
//     }
// }


// create Resume
let addNewResume = (req, res) => {
    const std = new Resume({ ...req.body });


    std.save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            for (let e in err.errors) {
                console.log(err.errors[e].message);
                res.status(400).send("Bad Request.. Some Fields are missed");
            }
        });
};

// let getResumes=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getResumeByID
let getResumeByID = async (req, res) => {
    let std = await Resume.findById(req.params.id);

    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Resume with the given ID wasnt found");
    }
};

//getA11Resumes
let getAllResumes = async (req, res) => {
    let std = await Resume.find(req.body?req.body:{})
    if (std) {
        res.json(std);
        return std
    } else {
        res.status(404).send("Resume with the given ID wasnt found");
    }
};


// updateResume
let updateResume = async (req, res) => {
    let std = await Resume.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Resume with the given ID wasnt found");
    }
};

//de1eteResume
let deleteResumeById = async (req, res) => {
    let std = await Resume.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Resume with the given ID wasnt found");
    }
};

module.exports = {
    getResumeByID,
    addNewResume,
    deleteResumeById,
    getAllResumes,
    updateResume,
};
