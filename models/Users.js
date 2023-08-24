const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

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
        ref:"Thought",
      },
    ],
    friends:[
      {
        type:Schema.Types.ObjectId,
        ref:"User"
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User


