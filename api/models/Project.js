import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    // About
    photos: {
        type: [String],
    },

    status: {
        type: String,
    },

    duedate: {
        type: Number,
    },
    
    // Fill by Project Applicant
    type: {
        type: String,
    },
    projectname: {
        type: String,
    },
    desc: {
        type: String,
    },
    location: {
        type: String,
    },
    createdby: {
        type: String,
    },
    ownerproof:{
        type:[]
    },

    //Finacial, Fill by Project developer
    goals: {
        type: Number,
    },

    roi: {
        type: Number,
    },

    roi: {
        type: Number,
    },

});

export default mongoose.model("Project", ProjectSchema);


// Skeleton:
// import mongoose from "mongoose";
// const ProjectSchema = new mongoose.Schema({
//     type: {
//         type: String,
//       },
// });

// export default mongoose.model("Project", ProjectSchema)

// Function to retrieve the current user's ID (Not Working)
// const getuid = async (req, res, next) => {
//   return await req.user.id;
// };
