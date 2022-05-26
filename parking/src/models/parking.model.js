
const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      spot_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "spot",
        required: true,
      },
      floor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "floor",
        required: true,
      },
      assistant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "spot",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
const Evaluation = mongoose.model("evaluation",evaluationSchema);

module.exports = Evaluation;