import ProfileModel from "../model/profile";
import { successAction, failAction } from "../utilities/response";
import Message from "../utilities/message";

/**
 * Adds a new profile to the database.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const addProfile = async (req, res) => {
  // try {
  const { name, email, description, prefrence } = req.body;

  // Create a new profile instance with data from the request body
  const newProfile = new ProfileModel({
    name,
    email,
    description,
    prefrence,
    profilepic: req.files.image,
  });

  // Save the new profile instance to the database
  const profileDetails = await newProfile.save();

  // If the profile is successfully saved, respond with a success message and data
  if (profileDetails) {
    res.status(200).json(successAction(profileDetails, Message.profileAdd));
  }
  // } catch (error) {
  //   // If there's an error during the process, respond with an error message
  //   res.status(400).json(failAction(error.message));
  // }
};

/**
 * Updates a profile in the database.
 *
 */
export const updateProfile = async (req, res) => {
  try {
    const { id, ...updatedProfile } = req.body;

    // Validate that 'id' is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(failAction("Invalid profile ID."));
    }

    // Find and update the profile in the database
    const updatedProfileData = await ProfileModel.findOneAndUpdate(
      { _id: id },
      updatedProfile,
      { new: true }
    );

    if (updatedProfileData) {
      // If the profile is successfully updated, respond with a success message and updated data
      return res
        .status(200)
        .json(successAction(updatedProfileData, Message.profileUpdate));
    } else {
      // If the profile was not found, respond with an error message
      return res.status(404).json(failAction("Profile not found."));
    }
  } catch (error) {
    // If there's an error during the process, respond with an error message
    return res.status(400).json(failAction(error.message));
  }
};
