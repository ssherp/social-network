const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required:true,
      Unique:true,
      trimmed:true
    },
    email: {
      type: String,
      required:true,
      Unique:true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref:"thought",
      },
    ],
    friends:[
      {
        type:Schema.Types.ObjectId,
        ref:"user"
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })

const User = model('user', userSchema);

module.exports = User


