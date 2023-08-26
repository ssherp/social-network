const { Schema, model } = require('mongoose');
const reactionSchema=require("./Reaction")
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    
    createdAt: {
      type: Date,
      default: Date.now(),
      get:(date)=>date.toLocaleDateString()
    },
    
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [reactionSchema]
  },
  {  
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  })
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
