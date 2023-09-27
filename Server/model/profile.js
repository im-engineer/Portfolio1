import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  description : {
    type:String,
    require: true
  },
  prefrence : {
    type:String,
    require: true
  },
  profilepic : {
    type:String,
    require: true
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  }
});
const profileData = mongoose.model("Profile", profileSchema);
export default profileData;
