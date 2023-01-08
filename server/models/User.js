const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      required: false,
    },
    trainer: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trainer",
      },
    ],
    workouts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Workout",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//hasing user password using middleware
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Number of completed workouts
userSchema.virtual("workoutCount").get(function () {
  return this.workouts.length;
});

const User = model("User", userSchema);

module.exports = User;
