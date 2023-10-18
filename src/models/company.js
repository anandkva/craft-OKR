const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slogan: String,
    ownerName: {
      type: String,
      required: true,
    },
    sector: String,
    address: String,
    location: {
      city: String,
      pinCode: String,
    },
    website: String,

    phoneNumber: String,
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
