import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  textarea : {
    type:String
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  }
});
const contactData = mongoose.model("Contact", contactSchema);
export default contactData;
