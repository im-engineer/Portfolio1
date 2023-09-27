import mongoose from "mongoose";
import Contact from "../model/contactModel";
import { SendEmail } from "../middleware/sendMail";


//-------------------------->>>>>> Contact to Admin <<<<<<--------------------------
export const contact = async (req, res) => {
  try {
    const contactDetails = new Contact({
      fullname:req.body.fullname,
      email: req.body.email,
      textarea: req.body.textarea,
    });
    const contactData = await contactDetails.save();
    const emailDetails = await SendEmail(
      req.body.email,
      "awasthisameer150@gmail.com",
      `Welcome `,
      `Users Details :
    fullname:${contactData.fullname},
    email:${contactData.email},
    message:${contactData.textarea}`
    );
    if(contactData){
    res.send({
      status: true,
      message: "message sent",
      result: contactData,
      data:emailDetails
    })};
  } catch (e) {
    res.send({
      status: false,
      message: "again u make a mistake",
      result: `error: ${e}`,
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send({
      status: true,
      message: "Contacts retrieved successfully",
      data: contacts
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error retrieving contacts",
      error: error
    });
  }
}