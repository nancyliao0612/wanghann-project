import mongoose from "mongoose";

const RespondentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});

export default mongoose.model("Respondents", RespondentSchema);
